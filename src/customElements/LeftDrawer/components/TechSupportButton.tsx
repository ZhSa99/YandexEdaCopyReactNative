import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomIcon from '../../CustomIcon'
import { techSupport_ICON } from '../../../utils/iconsPaths'
import { scale, verticalScale } from 'react-native-size-matters'
import { stackColors } from '../../../utils/colors'

const TechSupportButton = () => {
	return (
		<View
			style={{
				alignSelf: 'flex-start',
				alignItems: 'center',
				left: scale(20),
				marginTop: verticalScale(20),
			}}
		>
			<CustomIcon
				source={techSupport_ICON}
				iconSize={80}
				containerStyle={{ width: scale(80), height: verticalScale(80) }}
			/>
			<Text
				style={{
					color: stackColors.titleColor,
					fontSize: scale(14),
					fontWeight: '500',
				}}
			>
				Поддержка
			</Text>
		</View>
	)
}

export default TechSupportButton

const styles = StyleSheet.create({})
