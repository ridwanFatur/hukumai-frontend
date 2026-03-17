import { NavLink } from "react-router-dom";
import { APP_NAME } from "@/utils/string-constants";

export default function Header() {
	const navItemClass = ({ isActive }: { isActive: boolean }) =>
		isActive
			? "text-indigo-500 text-sm font-medium transition"
			: "text-gray-600 hover:text-gray-900 text-sm font-medium transition";

	return (
		<header className="sticky top-0 z-50 backdrop-blur-xl border-b border-black/10 bg-white/70">
			<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
				{/* App name */}
				<h1 className="text-sm font-semibold tracking-widest text-indigo-600/90">
					{APP_NAME}
				</h1>

				{/* Navigation */}
				<nav className="hidden md:flex items-center gap-8">
					<NavLink to="/" className={navItemClass}>
						Check Your CV
					</NavLink>

					<NavLink to="/uploaded-cv" className={navItemClass}>
						Uploaded CV
					</NavLink>

					<NavLink to="/profile" className={navItemClass}>
						My Profile
					</NavLink>
				</nav>

				{/* Action buttons */}
				<div className="flex items-center gap-3">
					{/* Language toggle */}
					<button className="cursor-pointer px-3 py-1.5 text-xs rounded-full border border-gray-200 bg-white text-gray-900 transition hover:scale-105 hidden md:block">
						EN
					</button>

					{/* Theme toggle */}
					<button className="cursor-pointer px-3 py-1.5 text-xs rounded-full border border-gray-200 bg-white text-gray-900 transition hover:scale-105 hidden md:block">
						☀ Light
					</button>

					{/* Logout */}
					<button className="cursor-pointer px-3 py-1.5 text-xs rounded-full border border-gray-200 bg-white text-gray-900 transition hover:scale-105 hidden md:block">
						Logout
					</button>

					{/* Mobile menu button */}
					<button className="md:hidden text-xl cursor-pointer transition text-gray-800 hover:text-gray-600">
						☰
					</button>
				</div>
			</div>
		</header>
	);
}