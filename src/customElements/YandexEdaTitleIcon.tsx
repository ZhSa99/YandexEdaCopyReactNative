import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { yandexEdaTitle_ICON } from '../utils/iconsPaths'
import { scale } from 'react-native-size-matters'

const YandexEdaTitleIcon = () => {
	return (
		<>
			<Image
				source={yandexEdaTitle_ICON}
				style={{ width: scale(160), }}
				resizeMode='contain'
			/>
		</>
	)
}

export default YandexEdaTitleIcon

const styles = StyleSheet.create({})
