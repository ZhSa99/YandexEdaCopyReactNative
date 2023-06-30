import React, { createContext, useState } from 'react'

interface IModalScreensContext {
	basketModalVisible: boolean
	setBasketModalVisible: () => void
}

export const ModalScreensContext = createContext({} as IModalScreensContext)

export const ModalScreensProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [basketModalVisible, setBasketModalVisible] = useState(false)
	const basketModalVisibleHandler = () => {
		setBasketModalVisible(!basketModalVisible)
	}

	const value = {
		basketModalVisible,
		setBasketModalVisible: basketModalVisibleHandler,
	}

	return (
		<ModalScreensContext.Provider value={value}>
			{children}
		</ModalScreensContext.Provider>
	)
}
