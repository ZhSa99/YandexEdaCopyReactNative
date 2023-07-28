import { Animated, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useRef } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { verticalScale, scale } from 'react-native-size-matters'
import { bottomTabColors, itemContainerColor, textColor1, textColor2 } from '../../utils/colors'
import { ScreensContext } from '../../context/ScreensProvider/ScreensProvider'
import Svg, { Circle } from 'react-native-svg'

interface ISearchModalHandler {
	scrollY: Animated.Value
}

const AnimatedIonicons = Animated.createAnimatedComponent(Ionicons)

const SearchModalHandler = ({ scrollY }: ISearchModalHandler) => {
	const { setSearchModalVisible } = useContext(ScreensContext)
	const animatedRotateZ = useRef(new Animated.Value(0)).current

	return (
		<Animated.View
			style={[
				{
					width: '100%',
					alignItems: 'center',
					justifyContent: 'center',
					alignSelf: 'center',
					height: verticalScale(60),
					backgroundColor: bottomTabColors.sceneBackgroundColor,
				},
			]}
		>
			<Pressable onPress={setSearchModalVisible}>
				<Animated.View
					style={{
						width: scrollY.interpolate({
							inputRange: [-100, 0],
							outputRange: [scale(50), scale(318)],
							extrapolate: 'clamp',
						}),
						height: verticalScale(45),
						alignItems: 'center',
						justifyContent: 'center',
						borderRadius: scrollY.interpolate({
							inputRange: [-100, 0],
							outputRange: [scale(50), scale(18)],
							extrapolate: 'clamp',
						}),

						backgroundColor: '#2f2f2d',
						flexDirection: 'row',
						marginBottom: verticalScale(15),
					}}
				>
					<Animated.View
						style={[
							{
								position: 'absolute',
								width: scale(48),
								height: scale(48),
								borderRadius: 40,
								alignItems: 'center',
								justifyContent: 'center',
								alignSelf: 'center',
							},
							{
								transform: [
									{
										rotateZ: scrollY.interpolate({
											inputRange: [-100, 0],
											outputRange: ['0deg', '180deg'],
											extrapolate: 'clamp',
										}),
									},
								],

								opacity: scrollY.interpolate({
									inputRange: [-100, 0],
									outputRange: [1, 0],
									extrapolate: 'clamp',
								}),
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
					<AnimatedIonicons
						name="ios-search"
						size={scale(28)}
						color={textColor1}
						style={{
							opacity: scrollY.interpolate({
								inputRange: [-30, 0],
								outputRange: [0, 1],
								extrapolate: 'clamp',
							}),
						}}
					/>
					<Animated.Text
						style={{
							color: textColor1,
							fontSize: scale(18),
							left: scale(4),
							opacity: scrollY.interpolate({
								inputRange: [-30, 0],
								outputRange: [0, 1],
								extrapolate: 'clamp',
							}),
						}}
					>
						Поиск
					</Animated.Text>
				</Animated.View>
			</Pressable>
		</Animated.View>
	)
}

export default SearchModalHandler

const styles = StyleSheet.create({})
