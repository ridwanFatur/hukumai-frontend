import { useState } from "react"

export function useChatbotState() {
	const [searchHistory, setSearchHistory] = useState("")
	const [activeHistoryId, setActiveHistoryId] = useState<number>()

	return {
		searchHistory,
		setSearchHistory,
		activeHistoryId,
		setActiveHistoryId
	}
}