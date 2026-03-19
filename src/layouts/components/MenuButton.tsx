import { type LucideIcon } from "lucide-react"

interface MenuButtonProps {
	text?: string;
	Icon?: LucideIcon;
	color?: {
		from: string;
		to: string;
		fromHover?: string;
		toHover?: string;
		shadow?: string;
	};
	isSidebarOpen?: boolean;
	onClick?: () => void;
	size?: number; // ukuran icon
}

export default function MenuButton({
	text,
	Icon,
	color = {
		from: "violet-600",
		to: "indigo-600",
		fromHover: "violet-500",
		toHover: "indigo-500",
		shadow: "violet-900/30",
	},
	isSidebarOpen = true,
	onClick,
	size = 20,
}: MenuButtonProps) {
	return (
		<button
			title={isSidebarOpen ? undefined : text}
			onClick={onClick}
			className={`cursor-pointer flex items-center justify-center gap-2 ${isSidebarOpen ? "w-full py-2 px-3.5" : "w-9 h-9"
				} rounded-xl bg-linear-to-r from-${color.from} to-${color.to} hover:from-${color.fromHover
				} hover:to-${color.toHover} text-white text-xs font-semibold shadow-md shadow-${color.shadow
				} transition-all duration-200 active:scale-95`}
		>
			{Icon && <Icon size={size} />}
			{isSidebarOpen && text && (
				<span className="overflow-hidden text-ellipsis whitespace-nowrap">
					{text}
				</span>
			)}
		</button>
	);
}
