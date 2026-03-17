import { Navigate, Route, Routes } from "react-router-dom"
import LoadingPage from "./components/LoadingPage"
import { useGlobal } from "./global-context/global"
import GoogleAuthCallback from "./callbacks/GoogleAuthCallback"
import LoginPage from "./pages/login/LoginPage"
import MainLayout from "./layouts/MainLayout"
import HomePage from "./pages/home/HomePage"

function App() {
	const { isAppLoaded, user } = useGlobal()

	if (!isAppLoaded) {
		return <LoadingPage />
	}

	if (!user) {
		return (
			<div className="w-full h-dvh">
				<Routes>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/auth/google/callback" element={<GoogleAuthCallback />} />
					<Route path="*" element={<Navigate to="/login" replace />} />
				</Routes>
			</div>
		)
	}

	return (
		<div className="w-full h-dvh">
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route path="/" element={<HomePage />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App
