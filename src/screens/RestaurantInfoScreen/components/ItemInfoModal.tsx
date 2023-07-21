import {
	Dimensions,
	Image,
	Pressable,
	StyleSheet,
	View,
	Text,
} from 'react-native'
import React from 'react'
import { scale, verticalScale } from 'react-native-size-matters'
import {
	itemButtonColor,
	itemContainerColor,
	itemModalColor1,
	mainBackgroundColor,
	textColor1,
	textColor2,
	textColor3,
} from '../../../utils/colors'
import { IDishesListInfo } from '../../../hooks/useRestaurants'
import Animated, {
	runOnJS,
	useAnimatedStyle,
	useDerivedValue,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import CustomCounter from '../../../customElements/CustomCounter'
import CustomButton from '../../../customElements/CustomButton'

interface IItemInfoModal {
	visible: boolean
	setVisible: () => void
	itemInfo?: IDishesListInfo | null
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)
const { height } = Dimensions.get('screen')

const ItemInfoModal = ({
	visible = false,
	setVisible = () => {},
	itemInfo = null,
}: IItemInfoModal) => {
	const modalTranslationY = useSharedValue(0)
	const modalHeight = useSharedValue(height)

	const derivedModalTranslationY = useDerivedValue(() => {
		return Math.max(0, modalTranslationY.value)
	}, [])

	const panGesture = Gesture.Pan()
		.onChange((event) => {
			modalTranslationY.value = event.translationY
		})
		.onEnd((event) => {
			if (event.translationY > 200) {
				runOnJS(setVisible)()
				modalTranslationY.value = withTiming(height)
			} else {
				modalTranslationY.value = withTiming(0)
			}
		})

	const rViewStyle = useAnimatedStyle(() => {
		return {
			transform: [{ translateY: derivedModalTranslationY.value }],
		}
	}, [])
	const rModalStyle = useAnimatedStyle(() => {
		return {
			transform: [{ translateY: modalHeight.value }],
		}
	}, [])

	React.useEffect(() => {
		if (!visible) {
			modalTranslationY.value = withTiming(0)
		}
		modalHeight.value = withTiming(visible ? 0 : height)
	}, [visible])

	return (
		<Animated.View
			style={[
				{
					position: 'absolute',
					height: '100%',
					width: '100%',
					backgroundColor: 'transparent',
					zIndex: 3,
					top: 0,
				},
				rModalStyle,
			]}
		>
			<Pressable
				style={[
					{
						position: 'absolute',
						width: '100%',
						height: '100%',
					},
				]}
				onPress={setVisible}
			/>

			<GestureDetector gesture={panGesture}>
				<Animated.View
					style={[
						styles.animatedViewContainer,
						rViewStyle,
					]}
				>
					<View
						style={{
							width: scale(62),
							height: verticalScale(6),
							backgroundColor: itemModalColor1,
							alignSelf: 'center',
							zIndex: 4,
							borderRadius: 10,
							position: 'absolute',
							top: verticalScale(-12),
						}}
					/>
					{visible ? (
						<Image
							source={{ uri: itemInfo?.iconPath }}
							style={{
								resizeMode: 'contain',
								width: '100%',
								height: verticalScale(274),
								borderTopLeftRadius: scale(25),
								borderTopRightRadius: scale(25),
							}}
						/>
					) : null}
					<View
						style={{
							width: '100%',
							height: '100%',
							backgroundColor: itemContainerColor,
						}}
					>
						<Text
							style={[
								styles.text,
								{ color: textColor1, margin: verticalScale(10) },
							]}
						>
							{itemInfo?.name}
						</Text>
					</View>
				</Animated.View>
			</GestureDetector>

			<View
				style={styles.bottomSheetContainer}
			>
				<View style={[styles.flexDirectionDefault, {}]}>
					<Text style={styles.text}>{itemInfo?.name}</Text>
					<Text style={styles.text}>{itemInfo?.cost}</Text>
				</View>
				<View style={[styles.flexDirectionDefault]}>
					<CustomCounter containerStyle={{ height: verticalScale(50) }} />
					<CustomButton
						containerStyle={{ width: scale(190), height: verticalScale(50) }}
						labelStyle={{ fontWeight: '600' }}
						pressable
						label="Добавить"
					/>
				</View>
			</View>
		</Animated.View>
	)
}

export default ItemInfoModal

const styles = StyleSheet.create({
	flexDirectionDefault: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		height: verticalScale(55),
		width: scale(310),
	},
	text: {
		color: textColor2,
		fontSize: scale(18),
	},
	bottomSheetContainer: {
		position: 'absolute',
		width: '100%',
		height: verticalScale(140),
		backgroundColor: itemButtonColor,
		bottom: 0,

		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	animatedViewContainer: {
		position: 'absolute',
		width: '100%',
		alignItems: 'center',
		backgroundColor: mainBackgroundColor,
		minHeight: verticalScale(450),
		bottom: verticalScale(139),
		borderTopLeftRadius: scale(25),
		borderTopRightRadius: scale(25),
	},
})
