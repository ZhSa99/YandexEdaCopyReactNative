import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomTabRootParamList } from '../types'
import MainScreen from '../../screens/MainScreen/MainScreen'
import RestaurantsScreen from '../../screens/RestaurantsScreen/RestaurantsScreen'
import ShopsScreen from '../../screens/ShopsScreen/ShopsScreen'
import BasketScreen from '../../screens/BasketScreen/BasketScreen'

const BottomTab = createBottomTabNavigator<BottomTabRootParamList>()

const BottomTabNavigation = () => {
	return (
		<BottomTab.Navigator>
			<BottomTab.Screen name={'MainScreen'} component={MainScreen} />
			<BottomTab.Screen
				name={'RestaurantsScreen'}
				component={RestaurantsScreen}
			/>
			<BottomTab.Screen name={'ShopsScreen'} component={ShopsScreen} />
			<BottomTab.Screen name={'BasketScreen'} component={BasketScreen} />
		</BottomTab.Navigator>
	)
}

export default BottomTabNavigation

const styles = StyleSheet.create({})
