import React, { createContext, useMemo, useState } from 'react'

interface IScreensContext {
	basketModalVisible: boolean
	setBasketModalVisible: () => void
	searchModalVisible: boolean
	setSearchModalVisible: () => void
	drawerIsOpen: boolean | undefined
	setDrawerIsOpen: () => void
}

export const ScreensContext = createContext({} as IScreensContext)

export const ScreensProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [basketModalVisible, setBasketModalVisible] = useState(false)
	const basketModalVisibleHandler = () => {
		setBasketModalVisible(!basketModalVisible)
	}

	const [drawerIsOpen, setDrawerIsOpen] = useState<boolean | undefined>(false)
	const drawerHandler = () => {
		setDrawerIsOpen(!drawerIsOpen)
	}

	const [searchModalVisible, setSearchModalVisible] = useState(false)
	const searchModalVisibleHandler = () => {
		setSearchModalVisible(!searchModalVisible)
	}

	const value = useMemo(
		() => ({
			basketModalVisible,
			setBasketModalVisible: basketModalVisibleHandler,
			searchModalVisible,
			setSearchModalVisible: searchModalVisibleHandler,

			drawerIsOpen,
			setDrawerIsOpen: drawerHandler,
		}),
		[basketModalVisible, searchModalVisible, drawerIsOpen]
	)

	return (
		<ScreensContext.Provider value={value}>
			{children}
		</ScreensContext.Provider>
	)
}
