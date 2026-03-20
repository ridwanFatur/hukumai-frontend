import { getChatSessionsApi } from "@/api/chat-session-api"
import { useGlobal } from "@/global-context/global"
import type { ChatSession } from "@/models/ChatSession"
import { ENDPOINT, WS_URL } from "@/utils/api-constants"
import { getCookie } from "@/utils/cookie-helper"
import { useEffect, useRef, useState } from "react"

export function useChatbotState() {
	const { user } = useGlobal()
	const [searchHistory, setSearchHistory] = useState("")
	const [activeHistoryId, setActiveHistoryId] = useState<number>()
	const [chatSessions, setChatSessions] = useState<ChatSession[]>([])
	const [loading, setLoading] = useState(false)

	async function loadChatSessions(keyword: string = searchHistory) {
		setLoading(true)
		try {
			const sessions = await getChatSessionsApi(keyword)
			setChatSessions(sessions)
		} catch (err) {
			console.error("Failed to load chat sessions:", err)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		const handler = setTimeout(() => {
			loadChatSessions(searchHistory)
		}, 500)

		return () => clearTimeout(handler)
	}, [searchHistory])

	/** Websocket */
	const socketRef = useRef<WebSocket | null>(null)
	const retryCountRef = useRef(0)
	const maxRetries = 3

	useEffect(() => {
		if (!user?.id) return

		const token = getCookie("token")
		let isMounted = true

		const connect = () => {
			const wsUrl = `${WS_URL}${ENDPOINT.ws_chat}/${user.id}?token=${encodeURIComponent(token!)}`
			const ws = new WebSocket(wsUrl)

			socketRef.current = ws

			ws.onopen = () => {
				console.log("WebSocket connected ✅")
				retryCountRef.current = 0
			}

			ws.onclose = () => {
				console.log("WebSocket disconnected 🔌")

				if (!isMounted) return

				if (retryCountRef.current < maxRetries) {
					retryCountRef.current += 1
					console.log(`Retrying... (${retryCountRef.current})`)

					setTimeout(() => {
						connect()
					}, 2000)
				} else {
					console.log("Max retry reached ❌")
				}
			}

			ws.onerror = (error) => {
				console.error("WebSocket error", error)
				ws.close()
			}

			ws.onmessage = (event) => {
				handleWebsocketMessage(event)
			}
		}

		connect()

		return () => {
			isMounted = false

			if (socketRef.current) {
				console.log("Cleaning up WebSocket 🧹")
				socketRef.current.close()
			}
		}
	}, [user?.id])

	function handleWebsocketMessage(event: MessageEvent) {
		try {
			const payload = JSON.parse(event.data)

			if (payload?.action === "reload_history") {
				console.log("Trigger reload history 🚀")
				loadChatSessions()
			}
		} catch (error) {
			console.error("Invalid JSON payload:", event.data)
		}

	}

	return {
		searchHistory,
		setSearchHistory,
		activeHistoryId,
		setActiveHistoryId,
		chatSessions,
		setChatSessions,
		loading,
	}
}