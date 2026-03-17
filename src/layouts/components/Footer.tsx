import { APP_NAME } from "@/utils/string-constants";

export default function Footer() {
	return (
		<footer className="border-t border-black/10 bg-white/70 backdrop-blur-md">
			<div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
				<p className="text-gray-500">
					© {new Date().getFullYear()} {APP_NAME}. All rights reserved.</p>

				<p className="text-gray-500">
					Built by{" "}
					<a
						href="https://github.com/ridwanFatur"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-indigo-500 transition"
					>
						Ridwan Faturrahman
					</a>
				</p>

				<a
					href="https://github.com/ridwanFatur"
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray-500 hover:text-indigo-500 transition"
				>
					GitHub
				</a>
			</div>
		</footer>
	);
}