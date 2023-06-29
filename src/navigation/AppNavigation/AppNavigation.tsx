import { Animated, StyleSheet } from 'react-native'
import React, { ForwardedRef, useContext, useEffect, useRef } from 'react'
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native'
import StackNavigation from '../StackNavigation/StackNavigation'
import { scale } from 'react-native-size-matters'
import { DrawerContext } from '../../context/DrawerContext/DrawerContext'
import { StackRootParamList } from '../types'
import { NavigationContext } from '../../context/NavigationContext/NavigationContext'

const AppNavigation = () => {
	const { drawerIsOpen } = useContext(DrawerContext)
	const {navigationRef} = useContext(NavigationContext)

	const scrollX = useRef(new Animated.Value(0)).current

	const slideAnimation = () => {
		Animated.timing(scrollX, {
			toValue: drawerIsOpen ? scale(270) : 0,
			duration: 300,
			useNativeDriver: true,
		}).start()
	}

	useEffect(() => {
		slideAnimation()
	}, [drawerIsOpen])

	return (
		<Animated.View
			style={[
				{ width: '100%', height: '100%', zIndex: 1 },
				{
					transform: [{ translateX: scrollX }],
				},
			]}
		>
			<NavigationContainer ref={navigationRef}>
				<StackNavigation />
			</NavigationContainer>
		</Animated.View>
	)
}

export default AppNavigation

const styles = StyleSheet.create({})
