import { Pressable, Text, View } from 'react-native'
import React from 'react'
import {
	createDrawerNavigator,
} from '@react-navigation/drawer'
import { DrawerRootParamList } from '../types'
import OrdersScreen from '../../screens/OrdersScreen/OrdersScreen'
import BottomTabNavigation from '../BottomTabNavigation/BottomTabNavigation'
import { scale, verticalScale } from 'react-native-size-matters'
import CustomIcon from '../../customElements/CustomIcon'
import { YANDEX_BONUS_GRADIENT_COLORS, drawerColors } from '../../utils/colors'
import { LinearGradient } from 'expo-linear-gradient'
import { user_ICON, yandexPlus_ICON } from '../../utils/iconsPaths'
import { drawerElemSizes } from '../../utils/globalConstants'
import { AntDesign } from '@expo/vector-icons'
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen'
import PromocodesScreen from '../../screens/PromocodesScreen/PromocodesScreen'
import AddressesScreen from '../../screens/AddressesScreen/AddressesScreen'
import AboutServiceScreen from '../../screens/AboutServiceScreen/AboutServiceScreen'
import BecomeCourierScreen from '../../screens/BecomeCourierScreen/BecomeCourierScreen'
import FoodForBusinessScreen from '../../screens/FoodForBusinessScreen/FoodForBusinessScreen'

const Drawer = createDrawerNavigator<DrawerRootParamList>()

const DrawerNavigation = () => {
	return (
		<Drawer.Navigator

			screenOptions={({ navigation }) => ({
				headerShown: false,
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
							source={user_ICON}
							iconStyle={{ width: scale(50), height: verticalScale(50) }}
						/>
					</Pressable>
				),
				headerRightContainerStyle: { padding: scale(10) },
				headerRight: () => (
					<Pressable
						style={{
							width: scale(68),
							height: verticalScale(24),
							overflow: 'hidden',
							borderRadius: scale(36),
							alignItems: 'center',
							justifyContent: 'center',
							flexDirection: 'row',
						}}
					>
						<LinearGradient
							colors={YANDEX_BONUS_GRADIENT_COLORS}
							style={{
								width: scale(100),
								height: verticalScale(70),
								transform: [{ rotateZ: '-90deg' }],
								zIndex: 0,
								position: 'absolute',
							}}
						/>
						<Text
							style={{
								fontSize: drawerElemSizes.yandexBonusFontSize,
								fontWeight: '500',
								color: 'white',
								zIndex: 11,
								left: scale(4),
							}}
						>
							220
						</Text>
						<CustomIcon
							source={yandexPlus_ICON}
							iconStyle={{
								width: scale(22),
								height: verticalScale(22),
								tintColor: 'white',
								right: scale(-4),
							}}
						/>
					</Pressable>
				),
				headerTitle: (props) => {
					return (
						<View style={{ left: scale(-8) }}>
							<View style={{ flexDirection: 'row', alignItems: 'center' }}>
								<Text
									adjustsFontSizeToFit
									style={{
										color: drawerColors.titleColor,
										fontSize: drawerElemSizes.headerLabelFontSize.first,
									}}
								>
									Адрес и время доставки
								</Text>
								<AntDesign
									name="right"
									size={scale(19)}
									color={drawerColors.titleColor}
									style={{ transform: [{ scaleX: 0.5 }], left: scale(-2) }}
								/>
							</View>
							<Text
								adjustsFontSizeToFit
								style={{
									color: drawerColors.textColor,
									fontSize: drawerElemSizes.headerLabelFontSize.second,
									fontWeight: '600',
								}}
							>
								проспект Проспект 11
							</Text>
						</View>
					)
				},
			})}

		>
			<Drawer.Screen

				options={{
					drawerType: 'slide',
					drawerItemStyle: { height: 0 },
				}}
				name="BottomTabNavigation"
				component={BottomTabNavigation}
				
			/>
			<Drawer.Screen name="OrdersList" component={OrdersScreen} />
			<Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
			<Drawer.Screen name="PromocodesScreen" component={PromocodesScreen} />
			<Drawer.Screen name="AddressesScreen" component={AddressesScreen} />
			<Drawer.Screen name="AboutServiceScreen" component={AboutServiceScreen} />
			<Drawer.Screen
				name="BecomeCourierScreen"
				component={BecomeCourierScreen}
			/>
			<Drawer.Screen
				name="FoodForBusinessScreen"
				component={FoodForBusinessScreen}
			/>
		</Drawer.Navigator>
	)
}

export default DrawerNavigation
