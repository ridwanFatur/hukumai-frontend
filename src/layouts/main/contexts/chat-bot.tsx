import { getChatSessionsApi } from "@/api/chat-session-api"
import type { ChatSession } from "@/models/ChatSession"
import { useEffect, useState } from "react"

export function useChatbotState() {
	const [searchHistory, setSearchHistory] = useState("")
	const [activeHistoryId, setActiveHistoryId] = useState<number>()
	const [chatSessions, setChatSessions] = useState<ChatSession[]>([])
	const [loading, setLoading] = useState(false)
	useEffect(() => {
		const handler = setTimeout(() => {
			setLoading(true)
			getChatSessionsApi(searchHistory)
				.then((sessions) => setChatSessions(sessions))
				.catch((err) => console.error("Failed to load chat sessions:", err))
				.finally(() => setLoading(false))
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
		loading
	}
}