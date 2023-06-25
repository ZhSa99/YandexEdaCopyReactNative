import { StyleSheet, Text, TextStyle, View } from 'react-native'
import React from 'react'
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

const BottomTab = createBottomTabNavigator<BottomTabRootParamList>()

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

	return (
		<BottomTab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarStyle: {
					backgroundColor: bottomTabColors.bottomTabColor,
					height: verticalScale(bottomTabElemSizes.bottomNavigatorHeight),
					paddingLeft: scale(10),
					paddingRight: scale(10),
					borderTopWidth: 0
				},
			}}
			sceneContainerStyle={{backgroundColor: bottomTabColors.sceneBackgroundColor}}
		>
			<BottomTab.Screen
				name={'MainScreen'}
				component={MainScreen}
				options={{
					tabBarIcon: ({ focused }) => {
						return (
							<CustomIcon
								source={require('../../../assets/icons/mainScreen_logo.png')}
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
								source={require('../../../assets/icons/restaurantsScreen_logo.png')}
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
								source={require('../../../assets/icons/shopsScreen_logo.png')}
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
								source={require('../../../assets/icons/basketScreen_logo.png')}
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
	)
}

export default BottomTabNavigation

const styles = StyleSheet.create({})
