import {
	createContext,
	useContext,
	type ReactNode,
} from "react"

export function useHomePageState() {
	return {}
}

type HomePageStateType = ReturnType<typeof useHomePageState>

export const HomePageContext =
	createContext({} as HomePageStateType)

export function useHomePage() {
	const context = useContext(HomePageContext)
	if (!context)
		throw new Error(
			"useHomePage must be used inside HomePageProvider",
		)

	return context
}

export default function HomePageProvider({
	children,
}: {
	children: ReactNode
}) {
	return (
		<HomePageContext.Provider value={useHomePageState()}>
			{children}
		</HomePageContext.Provider>
	)
}