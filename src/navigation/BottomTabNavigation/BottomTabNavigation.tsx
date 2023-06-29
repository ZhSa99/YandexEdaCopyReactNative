import { StyleSheet, Text, TextStyle, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomTabRootParamList } from '../types'
import MainScreen from '../../screens/MainScreen/MainScreen'
import RestaurantsScreen from '../../screens/RestaurantsScreen/RestaurantsScreen'
import ShopsScreen from '../../screens/ShopsScreen/ShopsScreen'
import BasketScreen from '../../screens/BasketScreen/BasketScreen'

import { scale, verticalScale } from 'react-native-size-matters'
import CustomIcon from '../../customElements/CustomIcon'
import { bottomTabColors, buttonColors } from '../../utils/colors'
import { bottomTabElemSizes } from '../../utils/globalConstants'
import { BasketScreen_ICON, MainScreen_ICON, RestaurantsScreen_ICON, ShopsScreen_ICON } from '../../utils/iconsPaths'
import { useDrawerProgress, useDrawerStatus } from '@react-navigation/drawer'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import MainHeader from '../../customElements/MainHeader/MainHeader'

const BottomTab = createBottomTabNavigator<BottomTabRootParamList>()

// {
// 	navigation,
// }: {
// 	navigation: NavigationProp<ReactNavigation.RootParamList>
// }

const BottomTabNavigation = () => {
	const getColor = (focused: boolean) => {
		return focused ? buttonColors.activeColor : buttonColors.inactiveColor
	}
	const tabBarLabel = ({
		color = 'red',
		label = 'undefined',
		labelStyle = {},
	}: {
		color: string
		label: string
		labelStyle?: TextStyle
	}) => {
		return (
			<Text
				style={{
					color,
					...labelStyle,
					...{ fontSize: scale(bottomTabElemSizes.tabBarLabelFontSize) },
				}}
			>
				{label}
			</Text>
		)
	}

	// const drawer = useDrawerStatus()
	
	// useEffect(() => {
	// 	navigation.setOptions({headerShown: true})
	// }, [])
	// useEffect(() => {

	// 	navigation.setOptions({ swipeEnabled: drawer == 'open' ? true : false })
	// }, [drawer])

	return (
		<View style={{height: '100%'}}>
			<MainHeader />
			<BottomTab.Navigator
				screenOptions={{
					headerShown: false,
					tabBarStyle: {
						backgroundColor: bottomTabColors.bottomTabColor,
						height: verticalScale(bottomTabElemSizes.bottomNavigatorHeight),
						paddingLeft: scale(10),
						paddingRight: scale(10),
						borderTopWidth: 0,
					},
				}}
				sceneContainerStyle={{
					backgroundColor: bottomTabColors.sceneBackgroundColor,
				}}
			>
				<BottomTab.Screen
					name={'MainScreen'}
					component={MainScreen}
					options={{
						tabBarIcon: ({ focused }) => {
							return (
								<CustomIcon
									source={MainScreen_ICON}
									iconStyle={{
										tintColor: focused
											? buttonColors.activeColor
											: buttonColors.inactiveColor,
									}}
								/>
							)
						},
						tabBarLabel: ({ focused }) =>
							tabBarLabel({
								color: getColor(focused),
								label: 'Главная',
							}),
					}}
				/>
				<BottomTab.Screen
					name={'RestaurantsScreen'}
					component={RestaurantsScreen}
					options={{
						tabBarIcon: ({ focused }) => {
							return (
								<CustomIcon
									source={RestaurantsScreen_ICON}
									iconStyle={{
										tintColor: focused
											? buttonColors.activeColor
											: buttonColors.inactiveColor,
									}}
								/>
							)
						},
						tabBarLabel: ({ focused }) =>
							tabBarLabel({
								color: getColor(focused),
								label: 'Рестораны',
							}),
					}}
				/>
				<BottomTab.Screen
					name={'ShopsScreen'}
					component={ShopsScreen}
					options={{
						tabBarIcon: ({ focused }) => {
							return (
								<CustomIcon
									source={ShopsScreen_ICON}
									iconStyle={{
										tintColor: focused
											? buttonColors.activeColor
											: buttonColors.inactiveColor,
									}}
								/>
							)
						},
						tabBarLabel: ({ focused }) =>
							tabBarLabel({
								color: getColor(focused),
								label: 'Магазины',
							}),
					}}
				/>
				<BottomTab.Screen
					name={'BasketScreen'}
					component={BasketScreen}
					options={{
						tabBarIcon: ({ focused }) => {
							return (
								<CustomIcon
									source={BasketScreen_ICON}
									iconStyle={{
										tintColor: focused
											? buttonColors.activeColor
											: buttonColors.inactiveColor,
									}}
								/>
							)
						},
						tabBarLabel: ({ focused }) =>
							tabBarLabel({
								color: getColor(focused),
								label: 'Корзина',
							}),
					}}
				/>
			</BottomTab.Navigator>
		</View>
	)
}

export default BottomTabNavigation

const styles = StyleSheet.create({})
