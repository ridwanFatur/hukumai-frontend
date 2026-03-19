import DocumentSearchPageProvider from "./document-search-page-context";

export default function DocumentSearchPage() {
	return (
		<DocumentSearchPageProvider>
			<_DocumentSearchPage />
		</DocumentSearchPageProvider>
	)
}

function _DocumentSearchPage() {
	return <div className="w-full h-full relative">
		Search
	</div>
}
