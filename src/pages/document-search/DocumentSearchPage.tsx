import { useGlobal } from "@/global-context/global";
import DocumentSearchPageProvider from "./document-search-page-context";
import { MenuIcon } from "lucide-react";

export default function DocumentSearchPage() {
	return (
		<DocumentSearchPageProvider>
			<_DocumentSearchPage />
		</DocumentSearchPageProvider>
	)
}

function _DocumentSearchPage() {
	const { setIsMobileSidebarOpen } = useGlobal();

	return <div className="w-full h-full relative bg-linear-to-b from-slate-950 to-slate-900 border-l border-white/5 overflow-hidden flex items-center justify-center">
		{/* Mobile menu button */}
		<button
			className="md:hidden text-white/60 hover:text-white cursor-pointer transition-all duration-200 p-3 absolute top-3 left-3 z-10 border border-white/10 hover:border-white/25 rounded-lg bg-white/5 hover:bg-white/10 backdrop-blur-sm"
			onClick={() => setIsMobileSidebarOpen(true)}
		>
			<MenuIcon size={18} />
		</button>

		{/* Coming Soon text */}
		<div className="text-white/70 text-lg md:text-2xl font-semibold">
			Coming Soon 🚧
		</div>
	</div>
}
