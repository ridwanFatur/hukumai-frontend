import type { ChatMessage } from "@/models/ChatMessage";
import {
	createContext,
	useCallback,
	useContext,
	useRef,
	useState,
	type ReactNode,
} from "react"

export function useHomePageState() {
	const [messages, setMessages] = useState<ChatMessage[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const abortRef = useRef<AbortController | null>(null);

	const sendMessage = useCallback(async (content: string) => {
		if (content) { }
	}, [isLoading]);

	const stopGeneration = useCallback(() => {
		abortRef.current?.abort();
		setIsLoading(false);
	}, []);

	return {
		messages,
		isLoading,
		sendMessage,
		setMessages,
		stopGeneration,
	};
}

type HomePageStateType = ReturnType<typeof useHomePageState>

export const HomePageContext =
	createContext({} as HomePageStateType)

export function useHomePage() {
	const context = useContext(HomePageContext)
	if (!context)
		throw new Error(
			"useHomePage must be used inside HomePageProvider",
		)

	return context
}

export default function HomePageProvider({
	children,
}: {
	children: ReactNode
}) {
	return (
		<HomePageContext.Provider value={useHomePageState()}>
			{children}
		</HomePageContext.Provider>
	)
}