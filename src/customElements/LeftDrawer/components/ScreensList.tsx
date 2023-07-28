import {
	ImageSourcePropType,
	Pressable,
	StyleSheet,
	Text,
	View,
} from 'react-native'
import React, { useContext } from 'react'
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
import { NavigationContext } from '../../../context/NavigationContext/NavigationContext'
import { screenNames_RU } from '../../../utils/screenLabels'
import * as WebBrowser from 'expo-web-browser'
import { stackColors } from '../../../utils/colors'
import { ScreensContext } from '../../../context/ScreensProvider/ScreensProvider'

const stackNavigatorScreens: {
	screenName: keyof StackRootParamList
	iconPath: ImageSourcePropType
	title: string
	url?: string
}[] = [
	{
		screenName: 'OrdersListScreen',
		iconPath: ordersListScreen_ICON,
		title: 'Заказы',
	},
	{
		screenName: 'ProfileScreen',
		iconPath: profileScreen_ICON,
		title: screenNames_RU.profile,
	},
	{
		screenName: 'PromocodesScreen',
		iconPath: promocodesScreen_ICON,
		title: screenNames_RU.promocodes,
	},
	{
		screenName: 'AddressesScreen',
		iconPath: addressesScreen_ICON,
		title: screenNames_RU.addresses,
	},
	{
		screenName: 'AboutServiceScreen',
		iconPath: aboutServiceScreen_ICON,
		title: screenNames_RU.aboutService,
	},
	{
		screenName: 'BecomeCourierScreen',
		iconPath: becomeCourierScreen_ICON,
		title: screenNames_RU.becomeCourier,
		url: 'https://eda.yandex.ru/partner/rabota/?utm_medium=eda_app&utm_source=eda_app_menu',
	},
	{
		screenName: 'FoodForBusinessScreen',
		iconPath: foodForBusiness_ICON,
		title: screenNames_RU.foodForBusiness,
		url: 'https://yandex.ru/project/eda/lunchcard?utm_source=app&utm_medium=eats',
	},
]

const ScreensList = () => {
	const { navigateToScreen } = useContext(NavigationContext)
	const { setDrawerIsOpen } = useContext(ScreensContext)

	return (
		<View style={{ width: '100%', marginTop: verticalScale(30) }}>
			{stackNavigatorScreens.map((elem) => {
				return (
					<Pressable
						onPress={() => {
							elem.url
								? (async () => {
										setDrawerIsOpen()
										await WebBrowser.openBrowserAsync(elem.url as string, {
											presentationStyle:
												WebBrowser.WebBrowserPresentationStyle.FULL_SCREEN,
												toolbarColor: stackColors.headerBackgroundColor
										})
								  })()
								: navigateToScreen(elem.screenName)
						}}
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
							style={{
								color: 'white',
								fontSize: scale(17),
								fontWeight: '400',
								left: scale(13),
							}}
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
