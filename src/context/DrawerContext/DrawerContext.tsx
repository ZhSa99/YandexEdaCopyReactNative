import { GestureResponderEvent, StyleSheet, Text, View } from 'react-native'
import React, { createContext, useMemo, useState } from 'react'

interface IDrawerProvider {
	children: React.ReactNode
}
interface IDrawerContext {
	drawerIsOpen: boolean | undefined
	setDrawerIsOpen: (val: boolean | undefined | GestureResponderEvent) => void
}

export const DrawerContext = createContext({} as IDrawerContext)

export const DrawerProvider = ({ children }: IDrawerProvider) => {
	const [drawerIsOpen, setDrawerIsOpen] = useState<boolean | undefined>(false)

	const drawerHandler = (
		value: boolean | undefined | GestureResponderEvent
	) => {
		setDrawerIsOpen(value && !drawerIsOpen)
	}

	const value = {
		drawerIsOpen,
		setDrawerIsOpen: drawerHandler
	}
	return (
		<DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
	)
}

const styles = StyleSheet.create({})
