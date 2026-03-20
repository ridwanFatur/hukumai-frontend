import ProfilePageProvider from "./profile-page-context";

export default function ProfilePage() {
	return (
		<ProfilePageProvider>
			<_ProfilePage />
		</ProfilePageProvider>
	)
}
function _ProfilePage() {
	return (
		<div className="w-full h-full relative flex flex-col bg-linear-to-b from-slate-950 to-slate-900 border-l border-white/5 overflow-hidden">

		</div>
	);
}
