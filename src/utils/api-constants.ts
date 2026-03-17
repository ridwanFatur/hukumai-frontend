export const ENDPOINT = {
	root: "/",
	user: "/api/user",
	auth: "/api/auth",
}

export const WS_URL = import.meta.env.VITE_BACKEND_API_URL.replace("http://", "ws://").replace(
	"https://",
	"wss://"
)