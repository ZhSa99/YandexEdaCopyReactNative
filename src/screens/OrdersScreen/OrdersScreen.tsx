import { Animated, Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import DrawerScreensHeader from '../../customElements/StackScreensHeader'
import { stackColors } from '../../utils/colors'
import { useNavigation } from '@react-navigation/native'

const OrdersScreen = () => {
  const scrollY = useRef(new Animated.Value(0)).current

	return (
		<View
			style={{
				width: '100%',
				height: '100%',
				backgroundColor: stackColors.headerBackgroundColor,
			}}
		>
			<DrawerScreensHeader
				isScrollView={true}
				scrollY={scrollY}
				label="Заказы"
			/>
			<Animated.ScrollView
				style={{ width: '100%' }}
				onScroll={Animated.event(
					[{ nativeEvent: { contentOffset: { y: scrollY } } }],
					{ useNativeDriver: true }
				)}
			></Animated.ScrollView>
		</View>
	)
}

export default OrdersScreen

const styles = StyleSheet.create({})
