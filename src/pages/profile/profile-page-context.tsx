import {
	createContext,
	useContext,
	type ReactNode,
} from "react"

export function useProfilePageState() {
	return {
	};
}

type ProfilePageStateType = ReturnType<typeof useProfilePageState>

export const ProfilePageContext =
	createContext({} as ProfilePageStateType)

export function useProfilePage() {
	const context = useContext(ProfilePageContext)
	if (!context)
		throw new Error(
			"useProfilePage must be used inside ProfilePageProvider",
		)

	return context
}

export default function ProfilePageProvider({
	children,
}: {
	children: ReactNode
}) {
	return (
		<ProfilePageContext.Provider value={useProfilePageState()}>
			{children}
		</ProfilePageContext.Provider>
	)
}