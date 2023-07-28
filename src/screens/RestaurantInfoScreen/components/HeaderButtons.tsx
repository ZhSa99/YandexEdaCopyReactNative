import { Animated, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { verticalScale, scale } from 'react-native-size-matters'
import CustomExpoIcon from '../../../customElements/CustomExpoIcon'
import { buttonContainerColor, mainBackgroundColor, textColorLightDark } from '../../../utils/colors'
import { useNavigation } from '@react-navigation/native'

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

interface IHeaderButtons {
	getHandledInterpolate: (
		inputRange: number[],
		outputRange: string[] | number[]
	) => Animated.AnimatedInterpolation<string | number>
	restaurantName: string
}

const HeaderButtons = ({getHandledInterpolate, restaurantName = ''}: IHeaderButtons) => {
  	const navigation = useNavigation()
    const interpolateForButtons = {
			inputRange: [120, 140, 145],
			outputRange: [
				buttonContainerColor,
				buttonContainerColor,
				mainBackgroundColor,
			],
		}
  return (
		<Animated.View
			style={[
				{
					flexDirection: 'row',
					paddingTop: verticalScale(40),
					backgroundColor: getHandledInterpolate(
						[100, 135],
						['transparent', mainBackgroundColor]
					),
					zIndex: 1,
				},
			]}
		>
			<Animated.View
				style={{
					position: 'absolute',
					width: '100%',
					alignItems: 'center',
					top: verticalScale(60),
					opacity: getHandledInterpolate([100, 150], [0, 1]),
				}}
			>
				<Text
					adjustsFontSizeToFit
					style={{
						color: textColorLightDark,
						fontSize: scale(17),
						fontWeight: '400',
					}}
				>
					{restaurantName}
				</Text>
			</Animated.View>
			<AnimatedPressable
				onPress={() => navigation.goBack()}
				style={{ width: '50%' }}
			>
				<CustomExpoIcon
					iconName="arrow-back"
					expoIconName="Ionicons"
					containerStyle={{
						marginLeft: getHandledInterpolate([100, 150], [scale(10), 0]),
						backgroundColor: getHandledInterpolate(
							interpolateForButtons.inputRange,
							interpolateForButtons.outputRange
						),
					}}
				/>
			</AnimatedPressable>
			<View
				style={{
					flexDirection: 'row',
					width: '50%',
					justifyContent: 'flex-end',
				}}
			>
				<AnimatedPressable>
					<CustomExpoIcon
						containerStyle={{
							alignSelf: 'flex-end',
							marginRight: getHandledInterpolate([100, 150], [scale(10), 0]),
							backgroundColor: getHandledInterpolate(
								interpolateForButtons.inputRange,
								interpolateForButtons.outputRange
							),
						}}
						iconName="cards-heart-outline"
						expoIconName="MaterialCommunityIcons"
					/>
				</AnimatedPressable>

				<AnimatedPressable>
					<CustomExpoIcon
						containerStyle={{
							right: 0,
							marginRight: getHandledInterpolate([100, 150], [scale(10), 0]),
							backgroundColor: getHandledInterpolate(
								interpolateForButtons.inputRange,
								interpolateForButtons.outputRange
							),
						}}
						iconName="ios-search"
						expoIconName="Ionicons"
					/>
				</AnimatedPressable>
			</View>
		</Animated.View>
	)
}

export default HeaderButtons

const styles = StyleSheet.create({})