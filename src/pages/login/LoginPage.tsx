import { APP_NAME } from "@/utils/string-constants";
import GoogleSignInButton from "@/components/GoogleSignInButton";

export default function LoginPage() {
	return (
		<div
			className="min-h-screen bg-[#f7f8fc] flex items-center justify-center px-6 font-sans relative overflow-hidden"
			style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" }}
		>
			{/* Top right controls */}
			<div className="absolute top-4 right-4 flex items-center gap-3 z-50">
				<button
					onClick={() => { } /* toggleLanguage */}
					className="cursor-pointer px-3 py-1.5 text-xs rounded-full border border-gray-200 bg-white text-gray-900 transition hover:scale-105"
				>
					EN
				</button>
				<button
					onClick={() => { } /* toggleTheme */}
					className="cursor-pointer px-3 py-1.5 text-xs rounded-full border border-gray-200 bg-white text-gray-900 transition hover:scale-105"
				>
					☀ Light
				</button>
			</div>

			{/* Decorative blobs */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-37.5 h-25 bg-indigo-400/20 rounded-full blur-[140px]" />
				<div className="absolute bottom-1/4 left-1/4 w-18.75 h-18.75 bg-purple-300/20 rounded-full blur-[120px]" />
			</div>

			{/* Main card */}
			<div className="relative w-full max-w-md flex flex-col items-center gap-6">
				{/* App Name */}
				<div className="text-center">
					<h2 className="text-sm font-semibold tracking-[0.3em] uppercase text-indigo-600/90">
						{APP_NAME}
					</h2>
				</div>

				{/* Card */}
				<div className="w-full rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl p-8 shadow-xl flex flex-col gap-6">
					<div className="text-center">
						<h1 className="text-gray-900 text-2xl font-semibold">
							Welcome to CV Insight AI
						</h1>
						<p className="text-gray-600 text-sm mt-2">
							Upload your CV and get instant AI feedback
						</p>
					</div>

					{/* Features */}
					<div className="flex flex-col gap-2 text-center text-xs text-gray-600">
						<p>✨ AI-powered CV analysis</p>
						<p>⚡ Instant personalized feedback</p>
						<p>🔒 Secure & private document processing</p>
					</div>

					<div className="h-px bg-black/10" />

					{/* Google Sign In */}
					<GoogleSignInButton />
				</div>

				{/* Footer */}
				<p className="text-gray-500 text-xs text-center">
					© {new Date().getFullYear()} {APP_NAME}. All rights reserved.
				</p>
			</div>
		</div>
	);
}