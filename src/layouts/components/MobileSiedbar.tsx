import { useGlobal } from "@/global-context/global";
import { NavLink } from "react-router-dom";

export default function MobileSidebar() {
	const { openLogoutDialog, isMobileSidebarOpen, setIsMobileSidebarOpen } = useGlobal();

	const navItemClass = ({ isActive }: { isActive: boolean }) =>
		isActive
			? "text-indigo-500 text-sm font-medium transition"
			: "text-gray-600 hover:text-gray-900 text-sm font-medium transition";

	return (
		<div
			className={`fixed inset-0 z-50 flex transition-opacity duration-300 ${isMobileSidebarOpen
				? "opacity-100 pointer-events-auto"
				: "opacity-0 pointer-events-none"
				}`}
		>
			{/* Sidebar panel */}
			<div
				className={`w-64 h-full bg-white border-r border-gray-200 p-6 flex flex-col gap-6 shadow-xl transform transition-transform duration-300 ease-in-out ${isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
					}`}
			>
				<button
					className="self-end text-lg cursor-pointer text-gray-900 hover:opacity-70 transition"
					onClick={() => setIsMobileSidebarOpen(false)}
				>
					✕
				</button>

				<NavLink to="/" className={navItemClass} onClick={() => setIsMobileSidebarOpen(false)}>
					Chatbot
				</NavLink>

				<NavLink to="/search" className={navItemClass} onClick={() => setIsMobileSidebarOpen(false)}>
					Search
				</NavLink>

				<div className="h-px border-t border-black/10" />

				<button
					onClick={openLogoutDialog}
					className="cursor-pointer text-left text-sm text-red-500 hover:opacity-80 transition"
				>
					Logout
				</button>
			</div>

			{/* Overlay */}
			<div
				className="flex-1 transition-opacity duration-300 bg-black/30"
				onClick={() => setIsMobileSidebarOpen(false)}
			/>
		</div>
	);
}