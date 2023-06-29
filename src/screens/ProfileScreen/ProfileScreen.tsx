import { Animated, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import DrawerScreensHeader from '../../customElements/StackScreensHeader'

const ProfileScreen = () => {
  return (
		<View>
			<DrawerScreensHeader
				isScrollView={false}
				label="Профиль"
			/>
		</View>
	)
}

export default ProfileScreen

const styles = StyleSheet.create({})