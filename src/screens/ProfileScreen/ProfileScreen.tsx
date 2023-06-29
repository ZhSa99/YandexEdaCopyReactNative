import { Animated, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import DrawerScreensHeader from '../../customElements/StackScreensHeader'
import ViewContainer from '../../customElements/ViewContainer/ViewContainer'
import { screenNames_RU } from '../../utils/screenLabels'

const ProfileScreen = () => {
  return (
		<ViewContainer label={screenNames_RU.profile}>

		</ViewContainer>
	)
}

export default ProfileScreen

const styles = StyleSheet.create({})