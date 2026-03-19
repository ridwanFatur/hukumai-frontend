import HomePageProvider from "./home-page-context"

export default function HomePage() {
	return (
		<HomePageProvider>
			<_HomePage />
		</HomePageProvider>
	)
}

function _HomePage() {
	return <div className="w-full h-full relative">
		Home
	</div>
}
