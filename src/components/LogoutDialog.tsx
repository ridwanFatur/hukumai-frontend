type LogoutDialogProps = {
	isOpen: boolean;
	onCancel: () => void;
	onLogout: () => void;
};

export default function LogoutDialog({
	isOpen,
	onCancel,
	onLogout,
}: LogoutDialogProps) {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center">
			{/* Overlay */}
			<div
				className="absolute inset-0 bg-black/50 backdrop-blur-sm"
				onClick={onCancel}
			/>

			{/* Dialog box */}
			<div className="relative w-[90%] max-w-md rounded-2xl p-6 border border-black/10 bg-white/70 shadow-2xl">
				<h2 className="text-xl font-semibold mb-3 text-gray-900">
					Logout
				</h2>

				<p className="mb-6 text-sm text-gray-600">
					Are you sure you want to logout from this account?
				</p>

				<div className="h-px w-full mb-6 bg-black/10" />

				<div className="flex justify-end gap-3">
					<button
						onClick={onCancel}
						className="cursor-pointer px-4 py-2 rounded-lg text-sm font-medium text-gray-600 transition hover:opacity-80"
					>
						Cancel
					</button>

					<button
						onClick={onLogout}
						className="cursor-pointer px-4 py-2 rounded-lg text-sm font-semibold bg-red-500 hover:bg-red-600 text-white transition"
					>
						Logout
					</button>
				</div>
			</div>
		</div>
	);
}