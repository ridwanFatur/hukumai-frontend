import { getChatSessionsApi } from "@/api/chat-session-api"
import type { ChatSession } from "@/models/ChatSession"
import { useEffect, useState } from "react"

export function useChatbotState() {
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

	function addChatSession(newSession: ChatSession) {
		setChatSessions((prev) => [newSession, ...prev])
	}

	useEffect(() => {
		const handler = setTimeout(() => {
			loadChatSessions(searchHistory)
		}, 500)

		return () => clearTimeout(handler)
	}, [searchHistory])



	return {
		searchHistory,
		setSearchHistory,
		activeHistoryId,
		setActiveHistoryId,
		chatSessions,
		setChatSessions,
		loading,
		addChatSession,
		loadChatSessions
	}
}