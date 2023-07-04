import { Animated, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { verticalScale, scale } from 'react-native-size-matters'
import { bottomTabColors, textColor1 } from '../../utils/colors'
import { ModalScreensContext } from '../../context/ModalScreensContext/ModalScreensContext'

interface ISearchModalHandler {
	scrollY: Animated.Value
}

const AnimatedIonicons = Animated.createAnimatedComponent(Ionicons)

const SearchModalHandler = ({ scrollY }: ISearchModalHandler) => {
	const { setSearchModalVisible } = useContext(ModalScreensContext)

	return (
		<Animated.View
			style={[
				{	
					width: '100%',
					alignItems: 'center',
					justifyContent: 'center',
					alignSelf: 'center',
					height: verticalScale(60),
					// backgroundColor: 'red',
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
					<AnimatedIonicons
						name="ios-search"
						size={scale(28)}
						color={textColor1}
						style={{
							opacity: scrollY.interpolate({
								inputRange: [-100, 0],
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
								inputRange: [-100, 0],
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
