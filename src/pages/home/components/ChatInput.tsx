import { useRef, useState, useEffect } from "react";
import { ArrowUpIcon, SquareIcon } from "lucide-react";
import { useHomePage } from "../home-page-context";

export default function ChatInput() {
	const { sendMessage, isLoading, stopGeneration } = useHomePage();
	const [value, setValue] = useState("");
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	// Auto-resize textarea
	useEffect(() => {
		const el = textareaRef.current;
		if (!el) return;
		el.style.height = "auto";
		el.style.height = Math.min(el.scrollHeight, 180) + "px";
	}, [value]);

	const handleSend = () => {
		const trimmed = value.trim();
		if (!trimmed || isLoading) return;
		sendMessage(trimmed);
		setValue("");
		if (textareaRef.current) {
			textareaRef.current.style.height = "auto";
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			handleSend();
		}
	};

	const canSend = value.trim().length > 0 && !isLoading;

	return (
		<div className="max-w-2xl mx-auto w-full">
			<div className="relative flex items-end gap-2 bg-white/5 border border-white/10 hover:border-white/16 focus-within:border-violet-500/40 focus-within:bg-white/[0.07] rounded-2xl px-4 py-3 transition-all duration-200 shadow-xl shadow-black/30">
				{/* Textarea */}
				<textarea
					ref={textareaRef}
					value={value}
					onChange={(e) => setValue(e.target.value)}
					onKeyDown={handleKeyDown}
					placeholder="Message..."
					rows={1}
					className="flex-1 bg-transparent text-white/85 placeholder:text-white/25 text-sm resize-none outline-none leading-relaxed max-h-45 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent py-0.5"
					disabled={isLoading}
				/>

				{/* Action button */}
				{isLoading ? (
					<button
						onClick={stopGeneration}
						className="shrink-0 w-8 h-8 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/20 flex items-center justify-center text-white/60 hover:text-white transition-all duration-150 cursor-pointer"
					>
						<SquareIcon size={12} fill="currentColor" />
					</button>
				) : (
					<button
						onClick={handleSend}
						disabled={!canSend}
						className={`shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-150 cursor-pointer border
              ${canSend
								? "bg-violet-600 hover:bg-violet-500 border-violet-500/50 text-white shadow-lg shadow-violet-900/30"
								: "bg-white/4 border-white/[0.07] text-white/20 cursor-not-allowed"
							}`}
					>
						<ArrowUpIcon size={15} strokeWidth={2.5} />
					</button>
				)}
			</div>

			{/* Footer hint */}
			<p className="text-center text-white/15 text-[10px] mt-2 tracking-wide">
				Press <span className="font-medium text-white/25">Enter</span> to send &nbsp;·&nbsp; <span className="font-medium text-white/25">Shift+Enter</span> for new line
			</p>
		</div>
	);
}