import {
	Image,
	ImageSourcePropType,
	Pressable,
	StyleSheet,
	Text,
	View,
} from 'react-native'
import React from 'react'
import { StackRootParamList } from '../../../navigation/types'
import {
	aboutServiceScreen_ICON,
	addressesScreen_ICON,
	becomeCourierScreen_ICON,
	foodForBusiness_ICON,
	ordersListScreen_ICON,
	profileScreen_ICON,
	promocodesScreen_ICON,
} from '../../../utils/iconsPaths'
import { scale, verticalScale } from 'react-native-size-matters'
import CustomIcon from '../../CustomIcon'
import { useNavigation } from '@react-navigation/native'

const stackNavigatorScreens: {
	screenName: keyof StackRootParamList
	iconPath: ImageSourcePropType
	title: string
}[] = [
	{
		screenName: 'OrdersListScreen',
		iconPath: ordersListScreen_ICON,
		title: 'Заказы',
	},
	{
		screenName: 'ProfileScreen',
		iconPath: profileScreen_ICON,
		title: 'Профиль',
	},
	{
		screenName: 'PromocodesScreen',
		iconPath: promocodesScreen_ICON,
		title: 'Промокоды',
	},
	{
		screenName: 'AddressesScreen',
		iconPath: addressesScreen_ICON,
		title: 'Адреса',
	},
	{
		screenName: 'AboutServiceScreen',
		iconPath: aboutServiceScreen_ICON,
		title: 'О сервисе',
	},
	{
		screenName: 'BecomeCourierScreen',
		iconPath: becomeCourierScreen_ICON,
		title: 'Стать курьером',
	},
	{
		screenName: 'FoodForBusinessScreen',
		iconPath: foodForBusiness_ICON,
		title: 'Еда для бизнеса',
	},
]

const ScreensList = () => {
	return (
		<View style={{ width: '100%', marginTop: verticalScale(30) }}>
			{stackNavigatorScreens.map((elem) => {
				return (
					<Pressable
						key={`screen-${elem.screenName.toString()}`}
						style={{
							height: verticalScale(55),
							alignItems: 'center',
							flexDirection: 'row',
							left: scale(15),
						}}
					>
						<CustomIcon
							source={elem.iconPath}
							iconStyle={{ tintColor: 'white' }}
						/>
						<Text
							style={{ color: 'white', fontSize: scale(17), fontWeight: '400', left: scale(13) }}
						>
							{elem.title}
						</Text>
					</Pressable>
				)
			})}
		</View>
	)
}

export default ScreensList

const styles = StyleSheet.create({})
