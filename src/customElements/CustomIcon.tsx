import {
	Image,
	ImageSourcePropType,
	ImageStyle,
	StyleSheet,
	View,
	ViewStyle,
} from 'react-native'
import React from 'react'
import { scale, verticalScale } from 'react-native-size-matters'

interface ICustomIcon {
	source: ImageSourcePropType
	containerStyle?: ViewStyle
	iconStyle?: ImageStyle
}

const CustomIcon = ({
	source = require('../../assets/icons/user_icon.png'),
	containerStyle,
	iconStyle,
}: ICustomIcon) => {
	return (
		<View style={{...styles.containerStyleDefault, ...containerStyle}}>
			<Image
				source={source}
				style={{ ...styles.containerStyleDefault, ...iconStyle }}
				resizeMode='contain'
			/>
		</View>
	)
}

export default CustomIcon

const styles = StyleSheet.create({
	containerStyleDefault: {
		width: scale(28),
		height: verticalScale(24),
		alignItems: 'center',
		justifyContent: 'center',

	},
	iconStyleDefault: {
		width: scale(20),
		height: verticalScale(20),
		tintColor: 'black',
		resizeMode: 'cover',
	},
})
