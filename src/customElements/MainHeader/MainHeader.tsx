import {
	Animated,
	Pressable,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from 'react-native'
import React, { useContext } from 'react'
import CustomIcon from '../CustomIcon'
import { user_ICON, yandexPlus_ICON } from '../../utils/iconsPaths'
import { scale, verticalScale } from 'react-native-size-matters'
import { LinearGradient } from 'expo-linear-gradient'
import {
	YANDEX_BONUS_GRADIENT_COLORS,
	bottomTabColors,
	stackColors,
	textColor1,
} from '../../utils/colors'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import { DrawerContext } from '../../context/DrawerContext/DrawerContext'
import { ModalScreensContext } from '../../context/ModalScreensContext/ModalScreensContext'

interface IMainHeader {
	scrollY: Animated.Value
}

const MainHeader = () => {
	const { setDrawerIsOpen } = useContext(DrawerContext)
	
	return (
		<View>
			<Animated.View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
					width: '100%',
					height: verticalScale(60),
					backgroundColor: bottomTabColors.sceneBackgroundColor,
					padding: scale(15),
					paddingTop: 0
				}}
			>
				<Pressable onPress={setDrawerIsOpen}>
					<CustomIcon
						source={user_ICON}
						iconStyle={{ width: scale(50), height: verticalScale(50) }}
						containerStyle={{ width: scale(50), height: verticalScale(50) }}
					/>
				</Pressable>

				<View style={{ left: scale(10) }}>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Text
							adjustsFontSizeToFit
							style={{
								color: stackColors.titleColor,
								fontSize: scale(13),
							}}
						>
							Адрес и время доставки
						</Text>
						<AntDesign
							name="right"
							size={scale(19)}
							color={stackColors.titleColor}
							style={{ transform: [{ scaleX: 0.5 }], left: scale(-2) }}
						/>
					</View>
					<Text
						adjustsFontSizeToFit
						style={{
							color: stackColors.textColor,
							fontSize: scale(15.5),
							fontWeight: '600',
						}}
					>
						проспект Проспект 11
					</Text>
				</View>

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
							fontSize: scale(18),
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
			</Animated.View>
		</View>
	)
}

export default MainHeader

const styles = StyleSheet.create({})
