import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useContext } from 'react'
import {
	NavigationContainerRefWithCurrent,
	createNavigationContainerRef,
} from '@react-navigation/native'
import { StackRootParamList } from '../../navigation/types'
import { DrawerContext } from '../DrawerContext/DrawerContext'

interface INavigationContext {
	navigationRef: NavigationContainerRefWithCurrent<StackRootParamList>
	navigateToScreen: (screenName: keyof StackRootParamList) => void
}

export const NavigationContext = createContext({} as INavigationContext)

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const {setDrawerIsOpen} = useContext(DrawerContext)

	const navigationRef = createNavigationContainerRef<StackRootParamList>()

	const navigateToScreen = (screenName: keyof StackRootParamList) => {
		navigationRef.navigate(screenName)
		setDrawerIsOpen()
	}

	const value = {
		navigationRef,
		navigateToScreen,
	}
	return (
		<NavigationContext.Provider value={value}>
			{children}
		</NavigationContext.Provider>
	)
}

const styles = StyleSheet.create({})
