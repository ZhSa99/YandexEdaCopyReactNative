import { StyleSheet } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { StackRootParamList } from '../types'
import OrdersScreen from '../../screens/OrdersScreen/OrdersScreen'
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen'
import PromocodesScreen from '../../screens/PromocodesScreen/PromocodesScreen'
import AddressesScreen from '../../screens/AddressesScreen/AddressesScreen'
import AboutServiceScreen from '../../screens/AboutServiceScreen/AboutServiceScreen'
import BecomeCourierScreen from '../../screens/BecomeCourierScreen/BecomeCourierScreen'
import FoodForBusinessScreen from '../../screens/FoodForBusinessScreen/FoodForBusinessScreen'
import BottomTabNavigation from '../BottomTabNavigation/BottomTabNavigation'
import RestaurantInfoScreen from '../../screens/RestaurantInfoScreen/RestaurantInfoScreen'

const Stack = createStackNavigator<StackRootParamList>()

const StackNavigation = () => {
  return (
		<Stack.Navigator screenOptions={{headerShown: false}}>
			<Stack.Screen name={'BottomTabNavigation'} component={BottomTabNavigation} />
			<Stack.Screen name={'OrdersListScreen'} component={OrdersScreen} />
			<Stack.Screen name={'ProfileScreen'} component={ProfileScreen} />
			<Stack.Screen name={'PromocodesScreen'} component={PromocodesScreen} />
			<Stack.Screen name={'AddressesScreen'} component={AddressesScreen} />
			<Stack.Screen
				name={'AboutServiceScreen'}
				component={AboutServiceScreen}
			/>
			<Stack.Screen
				name={'BecomeCourierScreen'}
				component={BecomeCourierScreen}
			/>
			<Stack.Screen
				name={'FoodForBusinessScreen'}
				component={FoodForBusinessScreen}
			/>
			<Stack.Screen name='RestaurantInfoScreen' component={RestaurantInfoScreen}/>
		</Stack.Navigator>
	)
}

export default StackNavigation

const styles = StyleSheet.create({})