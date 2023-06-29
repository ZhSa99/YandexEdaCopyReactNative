import { Animated, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import StackScreensHeader from '../../customElements/StackScreensHeader'
import { stackColors } from '../../utils/colors'
import ViewContainer from '../../customElements/ViewContainer/ViewContainer'
import { screenNames_RU } from '../../utils/screenLabels'

const PromocodesScreen = () => {

	return (
		<ViewContainer isScrollView label={screenNames_RU.promocodes}>

    </ViewContainer>
	)
}

export default PromocodesScreen

const styles = StyleSheet.create({})