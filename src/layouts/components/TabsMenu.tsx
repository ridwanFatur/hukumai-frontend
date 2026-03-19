import { useGlobal } from "@/global-context/global"
import { Bot, Search } from "lucide-react"
import { useLocation, useNavigate } from "react-router-dom";

export default function TabsMenu() {
	const { isSidebarOpen } = useGlobal()
	const location = useLocation();
	const navigate = useNavigate();

	const tabs = [
		{ name: "Chat", path: "/", Icon: Bot },
		{ name: "Search", path: "/search", Icon: Search },
	];


	return <>
		{/* Tabs — expanded */}
		{isSidebarOpen && (
			<div className="flex bg-white/5 rounded-xl p-1 gap-1">
				{tabs.map((tab) => {
					const isActive = location.pathname === tab.path;
					const Icon = tab.Icon;

					return (
						<button
							key={tab.name}
							onClick={() => navigate(tab.path)}
							className={`
              cursor-pointer flex-1 flex items-center justify-center gap-2 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200
              ${isActive
									? "bg-violet-600/30 text-violet-300 ring-1 ring-violet-500/30"
									: "text-slate-500 hover:text-slate-300"
								}
            `}
						>
							<Icon className="w-4 h-4" />
							{tab.name}
						</button>
					);
				})}
			</div>
		)}

		{/* Tabs — collapsed */}
		{!isSidebarOpen && (
			<div className="flex flex-col items-center gap-1 w-full px-2">
				{[
					{ name: "chat", path: "/", Icon: Bot, title: "Chatbot" },
					{ name: "search", path: "/search", Icon: Search, title: "Cari" },
				].map((tab) => {
					const isActive = location.pathname === tab.path;
					const Icon = tab.Icon;

					return (
						<button
							key={tab.name}
							title={tab.title}
							onClick={() => navigate(tab.path)}
							className={`
            cursor-pointer w-9 h-9 flex items-center justify-center rounded-xl transition-all duration-200
            ${isActive
									? "bg-violet-600/25 text-violet-400"
									: "text-slate-500 hover:text-slate-300 hover:bg-white/5"
								}
          `}
						>
							{tab.name === "chat" ? <Icon /> : <Icon size={20} />}
						</button>
					);
				})}
			</div>
		)}</>
}