import {
	Pressable,
	StyleSheet,
	Text,
	Image,
	Animated,
	View,
} from 'react-native'
import React, { useRef } from 'react'
import { scale, verticalScale } from 'react-native-size-matters'
import { containerColor, itemButtonColor, itemColor, itemModalColor1, tabBarBackgroundColor, textColor1, textColor2, textColor3, textColorDark } from '../../../utils/colors'
import { IDishesListInfo } from '../../../hooks/useRestaurants'

interface IDishItem {
	setItemModalVisible: (
		value: React.SetStateAction<{
			visible: boolean
			itemInfo: IDishesListInfo | null
		}>
	) => void
	elem: IDishesListInfo
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)
const DishItem = ({ setItemModalVisible, elem }: IDishItem) => {
	const [count, setCount] = React.useState(0)
	const [counterIsVisible, setCounterIsVisible] = React.useState(false)

	const animatedValue = useRef(new Animated.Value(0)).current

	const counterWidth = useRef(new Animated.Value(scale(71))).current
	const costButtonOpacity = useRef(new Animated.Value(1)).current
	const counterOpacity = useRef(new Animated.Value(0)).current

	React.useEffect(() => {
		Animated.timing(counterWidth, {
			toValue: scale(counterIsVisible ? 55 : 71),
			useNativeDriver: false,
			duration: 250,
		}).start()
		Animated.timing(costButtonOpacity, {
			toValue: counterIsVisible ? 0 : 1,
			useNativeDriver: true,
			duration: 250,
		}).start()
		Animated.timing(counterOpacity, {
			toValue: counterIsVisible ? 1 : 0,
			useNativeDriver: true,
			duration: 250,
		}).start()
	}, [counterIsVisible])

	React.useEffect(() => {
		setCounterIsVisible(count === 0 ? false : true)
	}, [count])
	return (
		<Pressable
			style={styles.itemContainer}
			onPress={() =>
				setItemModalVisible((val) => ({
					itemInfo: elem,
					visible: true,
				}))
			}
		>
			<Image source={{ uri: elem.iconPath }} style={styles.itemImage} />
			<Text style={styles.itemText} lineBreakMode="tail" numberOfLines={1}>
				{elem.name}
			</Text>

			<AnimatedPressable
				style={[
					styles.itemCostButton,
					{
						transform: [{ translateY: animatedValue }],
						opacity: costButtonOpacity,
						zIndex: counterIsVisible ? 1 : 2,
					},
				]}
				onPress={() => {
					if (count === 0) {
						setCount((val) => val + 1)
					}
				}}
			>
				<Text style={{ color: textColor2, fontSize: scale(20) }}>
					{elem.cost}
				</Text>
			</AnimatedPressable>

			<Animated.View
				style={[
					styles.itemCostButton,
					{
						position: 'absolute',
						backgroundColor: 'transparent',
						justifyContent: 'space-between',
						bottom: verticalScale(7),
						flexDirection: 'row',
						opacity: counterOpacity,
						zIndex: counterIsVisible ? 2 : 1,
					},
				]}
			>
				{/*-------------------MINUS-------------------- */}
				{/*-------------------------------------------- */}
				<AnimatedPressable
					onPress={() => {
						if (count > 0) {
							setCount((val) => val - 1)
						}
					}}
					style={[
						styles.itemCostButton,
						{
							width: counterWidth,
							backgroundColor: itemButtonColor,
							bottom: verticalScale(3.5),
						},
					]}
				>
					<Text style={styles.text}>-</Text>
				</AnimatedPressable>
				{/*-------------------------------------------- */}

				{/*-------------------COUNT-------------------- */}
				{/*-------------------------------------------- */}
				<Text
					style={[
						styles.text,
						{ fontSize: scale(18), position: 'absolute', left: scale(67) },
					]}
				>
					{count}
				</Text>
				{/*-------------------------------------------- */}

				{/*-------------------PLUS--------------------- */}
				{/*-------------------------------------------- */}
				<AnimatedPressable
					onPress={() => {
						setCount((val) => val + 1)
					}}
					style={[
						styles.itemCostButton,
						{
							width: counterWidth,
							backgroundColor: itemButtonColor,
							bottom: verticalScale(3.5),
						},
					]}
				>
					<Text style={styles.text}>+</Text>
				</AnimatedPressable>
				{/*-------------------------------------------- */}
			</Animated.View>
		</Pressable>
	)
}

export default DishItem

const styles = StyleSheet.create({
	itemContainer: {
		width: scale(155),
		height: verticalScale(235),
		backgroundColor: itemColor,
		borderRadius: scale(28),
		alignItems: 'center',
		marginTop: verticalScale(7),
	},
	itemText: {
		color: textColor2,
		fontSize: scale(18),
		fontWeight: '400',
		lineHeight: verticalScale(40),
		paddingLeft: scale(10),
		paddingRight: scale(10),
	},
	itemCostButton: {
		width: scale(142),
		height: verticalScale(45),
		backgroundColor: itemButtonColor,
		borderRadius: scale(22),
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: verticalScale(7),
	},
	itemImage: {
		width: scale(142),
		height: scale(142),
		borderRadius: scale(22),
		marginTop: verticalScale(6.5),
		borderBottomRightRadius: scale(10),
		borderBottomLeftRadius: scale(10),
	},
	text: {
		color: textColor2,
		fontSize: scale(38),
		fontWeight: '300',
	},
})
