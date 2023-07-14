import { Animated, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import { buttonContainerColor, textColorLightDark } from '../utils/colors'
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { scale } from 'react-native-size-matters'

interface ICustomExpoIcon {
	containerStyle?: ViewStyle | Animated.AnimatedInterpolation<string | number>
	expoIconName: string
	iconName: string
	withContainer?: boolean
	iconSize?: number
}

const CustomExpoIcon = ({
	containerStyle,
	expoIconName,
	iconName,
	withContainer = true,
	iconSize = 25
}: ICustomExpoIcon) => {
	const expoIcon = () => {
		switch (expoIconName) {
			case 'MaterialCommunityIcons':
				return (
					<MaterialCommunityIcons
						name={iconName as keyof typeof MaterialCommunityIcons.glyphMap}
						size={scale(iconSize)}
						color={textColorLightDark}
					/>
				)
			case 'Ionicons':
				return (
					<Ionicons
						name={iconName as keyof typeof Ionicons.glyphMap}
						size={scale(iconSize)}
						color={textColorLightDark}
					/>
				)
			case 'FontAwesome':
				return (
					<FontAwesome
						name={iconName as keyof typeof FontAwesome.glyphMap}
						size={scale(iconSize)}
						color={textColorLightDark}
					/>
				)
		}
	}
	return (
		<Animated.View
			style={[
				withContainer
					? {
							backgroundColor: buttonContainerColor,
							width: scale(42),
							height: scale(42),
					  }
					: null,
				styles.heartButtonContainer,
				containerStyle,
			]}
		>
			{expoIcon()}
		</Animated.View>
	)
}

export default CustomExpoIcon

const styles = StyleSheet.create({
	heartButtonContainer: {
		
		borderRadius: 50,
		
		alignItems: 'center',
		justifyContent: 'center',
		opacity: 0.92,
		marginTop: scale(10),
	},
})
