import {
	Image,
	ImageSourcePropType,
	ImageStyle,
	StyleSheet,
	Text,
	TextStyle,
	View,
	ViewStyle,
} from 'react-native'
import React from 'react'
import { scale, verticalScale } from 'react-native-size-matters'

interface ICustomIcon {
	source: ImageSourcePropType
	containerStyle?: ViewStyle
	iconStyle?: ImageStyle
	hasLabel?: boolean
	labelStyle?: TextStyle
}

const CustomIcon = ({
	source = require('../../assets/icons/user_logo.png'),
	containerStyle = {},
	iconStyle = {},
	hasLabel = true,
	labelStyle = {},
}: ICustomIcon) => {
	return (
		<View style={[styles.containerStyleDefault, containerStyle]}>
			<Image source={source} style={[styles.iconStyleDefault, iconStyle]} />
			{}
		</View>
	)
}

export default CustomIcon

const styles = StyleSheet.create({
	containerStyleDefault: {
		alignItems: 'center',
		justifyContent: 'center',
    backgroundColor: 'red'
	},
	iconStyleDefault: {
		width: scale(10),
		height: verticalScale(10),
		tintColor: 'black',
	},
})
