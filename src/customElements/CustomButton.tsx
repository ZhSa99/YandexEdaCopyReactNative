import {
	StyleSheet,
	Text,
	TextStyle,
	TouchableOpacity,
	View,
	ViewStyle,
} from 'react-native'
import React from 'react'
import { scale, verticalScale } from 'react-native-size-matters'
import { buttonColorYellow } from '../utils/colors'

interface ICustomButton {
	label?: string
	containerStyle?: ViewStyle
	labelStyle?: TextStyle
	pressable?: boolean
	onPress?: () => void
}

const CustomButton = ({
	label = "'label' prop",
	containerStyle = {},
	labelStyle = {},
	pressable = false,
	onPress = () => {},
}: ICustomButton) => {
	return (
		<TouchableOpacity
			activeOpacity={pressable ? 0.8 : 1}
			onPress={() => {
				pressable ? onPress() : null
			}}
			style={[
				{
					width: scale(310),
					height: verticalScale(55),
					backgroundColor: buttonColorYellow,
					alignItems: 'center',
					justifyContent: 'center',
					borderRadius: scale(18),
				},
				containerStyle,
			]}
		>
			<Text style={[{ fontSize: scale(17) }, labelStyle]}>{label}</Text>
		</TouchableOpacity>
	)
}

export default CustomButton

const styles = StyleSheet.create({})
