import { useGlobal } from "@/global-context/global"
import { MessageSquare, Plus, Search } from "lucide-react"
import MenuButton from "./MenuButton";

export default function ChatbotContent({ alwaysOpen = false }: { alwaysOpen: boolean }) {
	const { isSidebarOpen, chatbot } = useGlobal()
	const open = alwaysOpen ? true : isSidebarOpen;

	return <>
		<div className={`flex flex-col gap-3 ${open ? "px-3.5" : "px-0 items-center"}`}>
			<MenuButton
				text="New Chat"
				Icon={Plus}
				isSidebarOpen={open}
				onClick={() => console.log("New Chat clicked")}
				color={{
					bg: "bg-gradient-to-r from-violet-600 to-indigo-600",
					hover: "hover:from-violet-500 hover:to-indigo-500",
					shadow: "shadow-violet-900/30",
				}}
			/>

			{open && (
				<div className="flex flex-col flex-1 overflow-hidden gap-2">
					<div className="relative">
						<span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">
							<Search size={14} />
						</span>
						<input
							type="text"
							placeholder="Find History Chat"
							value={chatbot.searchHistory}
							onChange={e => chatbot.setSearchHistory(e.target.value)}
							className="w-full pl-8 pr-3 py-2 bg-white/5 border border-white/10 focus:border-violet-500/50 rounded-xl text-slate-300 placeholder-slate-600 text-xs outline-none transition-colors duration-200"
						/>
					</div>

					<p className="text-slate-600 text-[10px] font-bold tracking-widest uppercase px-1">
						History
					</p>
				</div>
			)}
		</div>

		<div className="flex-1 overflow-y-auto overflow-x-hidden space-y-4 pr-0.5">
			{
				open && <>
					<div>
						{/* <p className="text-slate-700 text-[10px] font-bold tracking-wider uppercase mb-1 px-1">
						{group.label}
					</p> */}
						<div className="space-y-0.5">
							{chatbot.chatSessions.map(item => (
								<button
									key={item.id}
									onClick={() => chatbot.setActiveHistoryId(item.id)}
									className={`
												w-full flex items-center gap-2 px-2.5 py-2 rounded-lg text-left text-xs transition-all duration-150
												${chatbot.activeHistoryId === item.id
											? "bg-violet-600/15 text-violet-300 ring-1 ring-violet-500/20"
											: "text-slate-500 hover:bg-white/5 hover:text-slate-300"
										}
											`}
								>
									<span className="shrink-0 opacity-60">
										<MessageSquare size={24} />
									</span>
									<span className="truncate leading-snug">
										{item.title}
									</span>
								</button>
							))}
						</div>
					</div>
					{chatbot.chatSessions.length === 0 && (
						<p className="text-center text-slate-600 text-xs mt-8">
							No results found
						</p>
					)}
				</>
			}

		</div>
	</>
}