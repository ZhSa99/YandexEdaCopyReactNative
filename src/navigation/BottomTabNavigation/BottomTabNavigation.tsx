import { Animated, Dimensions, SafeAreaView, StyleSheet, View } from 'react-native'
import React, { useRef } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomTabRootParamList } from '../types'
import MainScreen from '../../screens/MainScreen/MainScreen'
import RestaurantsScreen from '../../screens/RestaurantsScreen/RestaurantsScreen'
import ShopsScreen from '../../screens/ShopsScreen/ShopsScreen'
import BasketScreen from '../../screens/BasketScreen/BasketScreen'

import { scale, verticalScale, vs } from 'react-native-size-matters'
import CustomIcon from '../../customElements/CustomIcon'
import { bottomTabColors, buttonColors } from '../../utils/colors'
import {
	MainScreen_ICON,
	RestaurantsScreen_ICON,
	ShopsScreen_ICON,
} from '../../utils/iconsPaths'
import MainHeader from '../../customElements/MainHeader/MainHeader'
import BasketModalHandler from '../../customElements/BasketModalHandler/BasketModalHandler'
import { getColor, tabBarLabel } from '../../utils/getUIElems'
import SearchModalHandler from '../../customElements/SearchModalHandler/SearchModalHandler'
import { useSharedValue } from 'react-native-reanimated'

const BottomTab = createBottomTabNavigator<BottomTabRootParamList>()

const { width } = Dimensions.get('screen')

const BottomTabNavigation = () => {
	const scrollY = useRef(new Animated.Value(0)).current

	const emptyRef = useRef(new Animated.Value(0)).current

	return (
		<View
			style={{ flex: 1, backgroundColor: bottomTabColors.sceneBackgroundColor }}
		>
			

			<BottomTab.Navigator
				screenOptions={{
					headerShown: false,
					tabBarStyle: {
						backgroundColor: bottomTabColors.bottomTabColor,
						height: verticalScale(70),
						paddingLeft: scale(15),
						paddingRight: scale(15),
						borderTopWidth: 0,
					},
				}}
				sceneContainerStyle={{
					backgroundColor: bottomTabColors.sceneBackgroundColor,
				}}
			>
				<BottomTab.Screen
					name={'MainScreen'}
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
									iconSize={30}
									containerStyle={{
										height: verticalScale(30),
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
				>
					{() => <MainScreen />}
				</BottomTab.Screen>
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
									iconSize={30}
									containerStyle={{
										height: verticalScale(30),
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
									iconSize={30}
									containerStyle={{
										height: verticalScale(30),
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
						tabBarButton: () => (
							<BasketModalHandler style={{ width: width / 4 }} />
						),
					}}
				/>
			</BottomTab.Navigator>
		</View>
	)
}

export default BottomTabNavigation

const styles = StyleSheet.create({})
