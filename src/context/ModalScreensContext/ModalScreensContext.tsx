import React, { createContext, useMemo, useState } from 'react'

interface IModalScreensContext {
	basketModalVisible: boolean
	setBasketModalVisible: () => void
	searchModalVisible: boolean
	setSearchModalVisible: () => void
}

export const ModalScreensContext = createContext({} as IModalScreensContext)

export const ModalScreensProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [basketModalVisible, setBasketModalVisible] = useState(false)
	const basketModalVisibleHandler = () => {
		setBasketModalVisible(!basketModalVisible)
	}

	const [searchModalVisible, setSearchModalVisible] = useState(false)
	const searchModalVisibleHandler = () => {
		setSearchModalVisible(!searchModalVisible)
	}

	const value = useMemo(() => ({
		basketModalVisible,
		setBasketModalVisible: basketModalVisibleHandler,
		searchModalVisible,
		setSearchModalVisible: searchModalVisibleHandler,
	}), [basketModalVisible, searchModalVisible])

	return (
		<ModalScreensContext.Provider value={value}>
			{children}
		</ModalScreensContext.Provider>
	)
}
