import { Text, TextStyle } from "react-native"
import { buttonColors } from "./colors"
import { scale } from "react-native-size-matters"

export const getColor = (focused: boolean = false) => {
	return focused ? buttonColors.activeColor : buttonColors.inactiveColor
}
export const tabBarLabel = ({
	color = 'red',
	label = 'undefined',
	labelStyle = {},
}: {
	color: string
	label: string
	labelStyle?: TextStyle
}) => {
	return (
		<Text
			style={{
				color,
				...labelStyle,
				...{ fontSize: scale(11) },
			}}
		>
			{label}
		</Text>
	)
}
