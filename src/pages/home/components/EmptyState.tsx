import { useHomePage } from "../home-page-context";

export default function EmptyState() {
	return (
		<div className="flex-1 flex flex-col items-center justify-center px-6 select-none">
			<div className="mb-6 relative">
				<div className="w-14 h-14 rounded-2xl bg-linear-to-br from-violet-500/30 to-indigo-500/10 border border-violet-500/20 flex items-center justify-center shadow-[0_0_40px_rgba(139,92,246,0.15)]">
					<svg
						width="28"
						height="28"
						viewBox="0 0 28 28"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M14 4C14 4 6 9 6 15C6 19.4183 9.58172 23 14 23C18.4183 23 22 19.4183 22 15C22 9 14 4 14 4Z"
							fill="url(#grad)"
							fillOpacity="0.9"
						/>
						<defs>
							<linearGradient
								id="grad"
								x1="6"
								y1="4"
								x2="22"
								y2="23"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="#a78bfa" />
								<stop offset="1" stopColor="#6366f1" />
							</linearGradient>
						</defs>
					</svg>
				</div>
				<div className="absolute inset-0 rounded-2xl bg-violet-500/5 blur-xl scale-150 -z-10" />
			</div>

			<h1 className="text-white/90 text-2xl font-semibold tracking-tight mb-2 font-[system-ui]">
				Ask a Legal Question
			</h1>
			<p className="text-white/35 text-sm text-center max-w-xs leading-relaxed">
				Consult about contracts, regulations, or legal procedures — I can provide guidance and clarify legal concepts.
			</p>

			<SuggestionChips />
		</div>
	);
}

function SuggestionChips() {
	const { sendMessage } = useHomePage();

	const suggestions = [
		{ icon: "⚖", text: "Explain a contract clause" },
		{ icon: "📝", text: "Draft a legal notice" },
		{ icon: "🔍", text: "Summarize legal document" },
		{ icon: "💡", text: "Legal advice on tenant rights" },
	];

	return (
		<div className="mt-8 grid grid-cols-2 gap-2 w-full max-w-sm">
			{suggestions.map((s) => (
				<button
					key={s.text}
					onClick={() => sendMessage(s.text)}
					className="group flex items-start gap-2.5 px-3.5 py-3 rounded-xl bg-white/4 hover:bg-white/8 border border-white/[0.07] hover:border-white/[0.14] text-left transition-all duration-200 cursor-pointer"
				>
					<span className="text-violet-400/70 text-sm mt-0.5 shrink-0 group-hover:text-violet-400 transition-colors">
						{s.icon}
					</span>
					<span className="text-white/50 text-xs leading-snug group-hover:text-white/70 transition-colors">
						{s.text}
					</span>
				</button>
			))}
		</div>
	);
}