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

	return <div className="w-full h-full relative">
		<button
			className="md:hidden text-xl cursor-pointer transition p-4 absolute top-0 left-0 border border-white/30 rounded-md"
			onClick={() => setIsMobileSidebarOpen(true)}
		>
			<MenuIcon size={20} />
		</button>
	</div>
}
