import {
	Animated,
	StyleSheet,
	Text,
	TextStyle,
	View,
	ViewStyle,
	ScrollView,
} from 'react-native'
import React from 'react'
import { drawerColors, screensColor } from '../utils/colors'
import { scale, verticalScale } from 'react-native-size-matters'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

interface IDrawerScreensHeader {
	style?: ViewStyle
	label: string
	textStyle?: TextStyle
	isScrollView: boolean
	scrollY?: Animated.Value | null
}

const DrawerScreensHeader = ({
	style,
	textStyle = {},
	label = '',
	isScrollView = false,
	scrollY = null,
}: IDrawerScreensHeader) => {
  const navigation = useNavigation()
	return (
		<View style={[styles.container, style]}>
			<Feather
        onPress={() => navigation.goBack()}
				name="arrow-left"
				size={scale(24)}
				color={screensColor.textColor}
				style={{
					position: 'absolute',
					bottom: verticalScale(21),
					left: scale(10),
				}}
			/>
			<Animated.Text
				style={[
					{
						textAlign: 'center',
						top: verticalScale(42),
						color: screensColor.textColor,
						fontSize: scale(18),
						fontWeight: '500',
						opacity: isScrollView
							? scrollY?.interpolate({
									inputRange: [100, 110],
									outputRange: [0, 1],
									extrapolate: 'clamp',
							  })
							: 1,
					},
					textStyle,
				]}
			>
				{label}
			</Animated.Text>
		</View>
	)
}

export default DrawerScreensHeader

const styles = StyleSheet.create({
	container: {
		top: 0,
		backgroundColor: drawerColors.headerBackgroundColor,
		height: verticalScale(80),
		width: '100%',
	},
})
