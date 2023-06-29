import { StyleSheet } from 'react-native'
import React from 'react'
import ViewContainer from '../../customElements/ViewContainer/ViewContainer'
import { screenNames_RU } from '../../utils/screenLabels'

 
const OrdersScreen = () => {
	return (
		<ViewContainer isScrollView label={screenNames_RU.ordersList}>

		</ViewContainer>
	)
}

export default OrdersScreen

const styles = StyleSheet.create({})
