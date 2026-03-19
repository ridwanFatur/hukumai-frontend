import { useGlobal } from "@/global-context/global";
import HomePageProvider, { useHomePage } from "./home-page-context"
import { MenuIcon } from "lucide-react";
import EmptyState from "./components/EmptyState";
import ChatInput from "./components/ChatInput";
import ChatMessages from "./components/ChatMessages";

export default function HomePage() {
	return (
		<HomePageProvider>
			<_HomePage />
		</HomePageProvider>
	)
}

function _HomePage() {
	const { setIsMobileSidebarOpen } = useGlobal();
	const { messages, isLoading } = useHomePage();

	const isEmpty = messages.length === 0;

	return <div className="w-full h-full relative flex flex-col bg-[#0e0e10] overflow-hidden">
		{/* Mobile menu button */}
		<button
			className="md:hidden text-white/60 hover:text-white cursor-pointer transition-all duration-200 p-3 absolute top-3 left-3 z-10 border border-white/10 hover:border-white/25 rounded-lg bg-white/5 hover:bg-white/10 backdrop-blur-sm"
			onClick={() => setIsMobileSidebarOpen(true)}
		>
			<MenuIcon size={18} />
		</button>

		{/* Main content area */}
		<div className="flex-1 flex flex-col min-h-0">
			{isEmpty ? (
				<EmptyState />
			) : (
				<ChatMessages messages={messages} isLoading={isLoading} />
			)}
		</div>

		{/* Input area */}
		<div className="shrink-0 px-4 pb-4 pt-2">
			<ChatInput />
		</div>
	</div>
}
