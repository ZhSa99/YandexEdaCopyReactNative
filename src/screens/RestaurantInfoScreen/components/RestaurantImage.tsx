import { Animated, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { verticalScale } from 'react-native-size-matters'
import { mainBackgroundColor } from '../../../utils/colors'

interface IRestaurantImage {
	getHandledInterpolate: (
		inputRange: number[],
		outputRange: string[] | number[]
	) => Animated.AnimatedInterpolation<string | number>
	iconPath: string
}

const RestaurantImage = ({getHandledInterpolate, iconPath = ''}: IRestaurantImage) => {
  return (
		<Animated.View
			style={{
				top: verticalScale(-96),
				transform: [{ scale: getHandledInterpolate([-100, 0], [1.4, 1]) }],
			}}
		>
			<ImageBackground
				source={{ uri: iconPath }}
				style={[styles.imageBackground]}
				imageStyle={{ resizeMode: 'contain', flexDirection: 'row' }}
			/>
			<LinearGradient
				start={{ x: 0.5, y: 0 }}
				locations={[0.6, 1]}
				colors={['rgba(0,0,0,0.2)', mainBackgroundColor]}
				style={styles.linearGradient}
			/>
		</Animated.View>
	)
}

export default RestaurantImage

const styles = StyleSheet.create({
	imageBackground: {
		width: '100%',
		height: verticalScale(240),
		flexDirection: 'row',
		paddingTop: verticalScale(45),
		justifyContent: 'center',
		position: 'absolute',
	},
	linearGradient: {
		position: 'absolute',
		width: '100%',
		height: verticalScale(240),
		opacity: 1,
	},
})