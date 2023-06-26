import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { DrawerRootParamList } from '../types'
import OrdersScreen from '../../screens/OrdersScreen/OrdersScreen'
import BottomTabNavigation from '../BottomTabNavigation/BottomTabNavigation'
import { scale, verticalScale } from 'react-native-size-matters'
import CustomIcon from '../../customElements/CustomIcon'
import { YANDEX_BONUS_GRADIENT_COLORS, drawerColors } from '../../utils/colors'
import { useNavigation } from '@react-navigation/native'
import { DrawerNavigationConfig } from '@react-navigation/drawer/lib/typescript/src/types'
import { LinearGradient } from 'expo-linear-gradient'

const Drawer = createDrawerNavigator<DrawerRootParamList>()

const DrawerNavigation = () => {
	return (
		<Drawer.Navigator
			screenOptions={({ navigation }) => ({
				swipeEnabled: false,
				drawerStyle: { width: scale(270) },
				headerStyle: {
					backgroundColor: drawerColors.headerBackgroundColor,
					height: verticalScale(100),
					shadowRadius: 0,
					shadowOffset: { width: 0, height: 0 },
				},
				headerLeftContainerStyle: { padding: scale(20) },
				headerLeft: (props) => (
					<Pressable
						onPress={() => {
							navigation.openDrawer()
						}}
					>
						<CustomIcon
							source={require('../../../assets/icons/user_logo.png')}
							iconStyle={{ width: scale(50), height: verticalScale(50) }}
						/>
					</Pressable>
				),
				headerRightContainerStyle: { padding: scale(10) },
				headerRight: () => (
					<Pressable
						style={{
							width: scale(64),
							height: verticalScale(24),
							overflow: 'hidden',
							borderRadius: scale(36),
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<Text
							style={{
								position: 'absolute',
								fontSize: 23,
								fontWeight: '600',
								color: 'white',
								zIndex: 1,
							}}
						>
							220
						</Text>
						<LinearGradient
							colors={YANDEX_BONUS_GRADIENT_COLORS}
							style={{
								width: scale(100),
								height: verticalScale(70),
								transform: [{ rotateZ: '-90deg' }],
							}}
						/>
					</Pressable>
				),
			})}
		>
			<Drawer.Screen
				name="BottomTabNavigation"
				component={BottomTabNavigation}
			/>
			<Drawer.Screen name="OrdersList" component={OrdersScreen} />
		</Drawer.Navigator>
	)
}

export default DrawerNavigation
