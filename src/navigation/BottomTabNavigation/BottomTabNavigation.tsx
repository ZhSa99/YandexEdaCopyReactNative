import {
	Dimensions,
	Pressable,
	StyleSheet,
	Text,
	TextStyle,
	View,
} from 'react-native'
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
import {
	BasketScreen_ICON,
	MainScreen_ICON,
	RestaurantsScreen_ICON,
	ShopsScreen_ICON,
} from '../../utils/iconsPaths'
import MainHeader from '../../customElements/MainHeader/MainHeader'
import BasketModalHandler from '../../customElements/BasketModalHandler/BasketModalHandler'
import { getColor, tabBarLabel } from '../../utils/getUIElems'

const BottomTab = createBottomTabNavigator<BottomTabRootParamList>()

const { width } = Dimensions.get('screen')

const BottomTabNavigation = () => {
	

	return (
		<View style={{ height: '100%' }}>
			<MainHeader />
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
						tabBarButton:() =>  <BasketModalHandler style={{width: width /4}}/>
					}}
				/>
			</BottomTab.Navigator>
		</View>
	)
}

export default BottomTabNavigation

const styles = StyleSheet.create({})
