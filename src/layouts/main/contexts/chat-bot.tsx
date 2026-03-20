import type { ChatSession } from "@/models/ChatSession"
import { useEffect, useState } from "react"

export function useChatbotState() {
	const [searchHistory, setSearchHistory] = useState("")
	const [activeHistoryId, setActiveHistoryId] = useState<number>()
	const [chatSessions, setChatSessions] = useState<ChatSession[]>([])

	useEffect(() => {

	}, [searchHistory])

	return {
		searchHistory,
		setSearchHistory,
		activeHistoryId,
		setActiveHistoryId,
		chatSessions,
		setChatSessions
	}
}