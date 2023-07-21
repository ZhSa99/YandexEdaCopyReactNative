import { Animated, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import { Circle, Svg } from 'react-native-svg'
import { scale } from 'react-native-size-matters'
import { itemContainerColor, textColor1, textColor2 } from '../utils/colors'

const YandexLoadingAnimation = () => {
	const animatedRotateZ = useRef(new Animated.Value(0)).current

	const rotateAnimation = () => {
		Animated.loop(
			Animated.sequence([
				Animated.timing(animatedRotateZ, {
					toValue: 1.5,
					duration: 500,
					useNativeDriver: true,
				}),
				Animated.timing(animatedRotateZ, {
					toValue: 0,
					duration: 500,
					useNativeDriver: true,
				}),
			]),
			{ iterations: -1 }
		).start()
	}
	React.useEffect(() => {
		rotateAnimation()
	}, [])
	return (
		<View style={{ height: '100%', width: '100%', alignItems: 'center' }}>
			<Animated.View
				style={[
					{
						width: scale(48),
						height: scale(48),
						borderRadius: 40,
						backgroundColor: itemContainerColor,
						alignItems: 'center',
						justifyContent: 'center',
					},
					{
						transform: [
							{
								rotateZ: animatedRotateZ.interpolate({
									inputRange: [0, 1],
									outputRange: ['0deg', '360deg'],
                  extrapolate: 'extend'
								}),
							},
						],
					},
				]}
			>
				<Svg>
					<Circle
						cx={scale(24)}
						cy={scale(24)}
						r={scale(10)}
						stroke={textColor2}
						strokeWidth={scale(3)}
						strokeDasharray={scale(15)}
						strokeDashoffset={scale(21)}
						strokeLinecap={'round'}
					/>
				</Svg>
			</Animated.View>
		</View>
	)
}

export default YandexLoadingAnimation

const styles = StyleSheet.create({})
