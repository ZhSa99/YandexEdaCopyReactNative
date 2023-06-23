import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { DrawerRootParamList } from '../types'
import OrdersScreen from '../../screens/OrdersScreen/OrdersScreen'
import BottomTabNavigation from '../BottomTabNavigation/BottomTabNavigation'

const Drawer = createDrawerNavigator<DrawerRootParamList>()

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='OrdersList' component={OrdersScreen}/>
      <Drawer.Screen name='BottomTabNavigation' component={BottomTabNavigation}/>
    </Drawer.Navigator>
  )
}

export default DrawerNavigation
