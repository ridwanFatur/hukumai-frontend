import { NavLink } from "react-router-dom";

export default function MobileSidebar() {
	const isMobileSidebarOpen = true; // can be controlled by mobile sidebar state
	const closeSidebar = () => { }; // placeholder function

	const navItemClass = ({ isActive }: { isActive: boolean }) =>
		isActive
			? "text-indigo-500 text-sm font-medium transition"
			: "text-gray-600 hover:text-gray-900 text-sm font-medium transition";

	const toggleLanguage = () => { };
	const toggleTheme = () => { };
	const openLogoutDialog = () => { };

	return (
		<div
			className={`fixed inset-0 z-50 flex transition-opacity duration-300 ${isMobileSidebarOpen
				? "opacity-100 pointer-events-auto"
				: "opacity-0 pointer-events-none"
				}`}
		>
			{/* Overlay */}
			<div
				className="flex-1 transition-opacity duration-300 bg-black/30"
				onClick={closeSidebar}
			/>

			{/* Sidebar panel */}
			<div
				className={`w-64 h-full bg-white border-l border-gray-200 p-6 flex flex-col gap-6 shadow-xl transform transition-transform duration-300 ease-in-out ${isMobileSidebarOpen ? "translate-x-0" : "translate-x-full"
					}`}
			>
				{/* Close button */}
				<button
					className="self-end text-lg cursor-pointer text-gray-900 hover:opacity-70 transition"
					onClick={closeSidebar}
				>
					✕
				</button>

				{/* Navigation links */}
				<NavLink to="/" className={navItemClass} onClick={closeSidebar}>
					Check Your CV
				</NavLink>

				<NavLink to="/uploaded-cv" className={navItemClass} onClick={closeSidebar}>
					Uploaded CV
				</NavLink>

				<NavLink to="/profile" className={navItemClass} onClick={closeSidebar}>
					My Profile
				</NavLink>

				{/* Divider */}
				<div className="h-px border-t border-black/10" />

				{/* Language toggle */}
				<button
					onClick={toggleLanguage}
					className="cursor-pointer text-left text-sm text-gray-900"
				>
					🌐 Switch to English
				</button>

				{/* Theme toggle */}
				<button
					onClick={toggleTheme}
					className="cursor-pointer text-left text-sm text-gray-900"
				>
					☀ Light
				</button>

				{/* Logout */}
				<button
					onClick={openLogoutDialog}
					className="cursor-pointer text-left text-sm text-red-500 hover:opacity-80 transition"
				>
					🚪 Logout
				</button>
			</div>
		</div>
	);
}