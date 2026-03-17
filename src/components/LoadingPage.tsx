import { APP_NAME } from "@/utils/string-constants";

export default function LoadingPage() {
	return (
		<div className="h-dvh flex items-center justify-center bg-[#f7f8fc] relative overflow-hidden">
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-87.5 bg-indigo-400/20 rounded-full blur-[140px]" />
				<div className="absolute bottom-1/4 left-1/4 w-62.5 h-62.5 bg-purple-300/20 rounded-full blur-[120px]" />
			</div>

			<div className="relative flex flex-col items-center gap-6">
				<div className="animate-spin rounded-full h-14 w-14 border-4 border-indigo-600 border-t-transparent" />
				<div className="flex flex-col items-center gap-2">
					<p className="text-sm font-medium tracking-wide text-indigo-600/90">
						{APP_NAME}
					</p>
				</div>
			</div>
		</div>
	);
}