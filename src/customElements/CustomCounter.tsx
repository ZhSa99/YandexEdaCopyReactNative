import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	ViewStyle,
} from 'react-native'
import React, { useState } from 'react'
import { scale, verticalScale } from 'react-native-size-matters'
import {
	customCounterBackgroundColor,
	textColor2,
	textColor3,
} from '../utils/colors'
import CustomExpoIcon from './CustomExpoIcon'

interface ICustomCounter {
	containerStyle: ViewStyle
}

const CustomCounter = ({ containerStyle }: ICustomCounter) => {
	const [count, setCount] = useState(1)
	return (
		<View
			style={[
				{
					width: scale(105),
					height: verticalScale(55),
					backgroundColor: customCounterBackgroundColor,
					alignItems: 'center',
					justifyContent: 'center',
					borderRadius: scale(18),
				},
				containerStyle,
			]}
		>
			<View style={styles.counterElemsContainer}>
				<TouchableOpacity
					style={styles.aIjC}
					activeOpacity={count === 1 ? 1 : 0.5}
					onPress={() => {
						count === 1 ? null : setCount((count) => count - 1)
					}}
				>
					<Text
						style={[styles.text, count === 1 ? { color: textColor3 } : null]}
					>
						-
					</Text>
				</TouchableOpacity>
				<Text style={styles.countText}>{count}</Text>
				<TouchableOpacity
					style={styles.aIjC}
					activeOpacity={0.5}
					onPress={() => setCount((count) => count + 1)}
				>
					<Text style={styles.text}>+</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default CustomCounter

const styles = StyleSheet.create({
	counterElemsContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: scale(78),
		height: verticalScale(55),
	},
	text: {
		color: textColor2,
		fontSize: scale(38),
		fontWeight: '300',
	},
	countText: {
		color: textColor2,
		fontSize: scale(22),
		top: verticalScale(2),
	},
	aIjC: {
		alignItems: 'center',
		justifyContent: 'center',
	},
})
