import { View, Text, Pressable, ViewStyle } from 'react-native'
import React, { useContext } from 'react'
import { verticalScale } from 'react-native-size-matters'
import CustomIcon from '../CustomIcon'
import { BasketScreen_ICON } from '../../utils/iconsPaths'
import { buttonColors } from '../../utils/colors'
import { tabBarLabel } from '../../utils/getUIElems'
import { ModalScreensContext } from '../../context/ModalScreensContext/ModalScreensContext'

interface IBasketModalHandler {
  style: ViewStyle
}

const BasketModalHandler = ({ style }: IBasketModalHandler) => {
	const {setBasketModalVisible} = useContext(ModalScreensContext)
	return (
		<Pressable
			style={{
				alignItems: 'center',
				justifyContent: 'center',
				...style,
			}}
			onPress={setBasketModalVisible}
		>
			<CustomIcon
				source={BasketScreen_ICON}
				iconStyle={{
					tintColor: buttonColors.inactiveColor,
					top: verticalScale(1),
				}}
				iconSize={30}
				containerStyle={{
					height: verticalScale(30),
				}}
			/>
			{tabBarLabel({
				color: buttonColors.inactiveColor,
				label: 'Корзина',
				labelStyle: { top: verticalScale(2) },
			})}
		</Pressable>
	)
}

export default BasketModalHandler