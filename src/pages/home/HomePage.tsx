import { useGlobal } from "@/global-context/global";
import HomePageProvider from "./home-page-context"
import { MenuIcon } from "lucide-react";

export default function HomePage() {
	return (
		<HomePageProvider>
			<_HomePage />
		</HomePageProvider>
	)
}

function _HomePage() {
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
