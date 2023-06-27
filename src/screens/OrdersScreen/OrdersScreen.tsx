import { Animated, Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import DrawerScreensHeader from '../../customElements/DrawerScreensHeader'
import { drawerColors } from '../../utils/colors'
import { useNavigation } from '@react-navigation/native'

const OrdersScreen = () => {
  const scrollY = useRef(new Animated.Value(0)).current
  const navigation = useNavigation()

  React.useEffect(() => {
    navigation.setOptions({swipeEnabled: true})
  }, [])
	return (
		<View
			style={{
				width: '100%',
				height: '100%',
				backgroundColor: drawerColors.headerBackgroundColor,
			}}
		>
			<DrawerScreensHeader isScrollView={true} scrollY={scrollY} label='Заказы'/>
			<Animated.ScrollView
				style={{ width: '100%' }}
				onScroll={Animated.event(
					[{ nativeEvent: { contentOffset: { y: scrollY } } }],
					{ useNativeDriver: true }
				)}
			>
				
			</Animated.ScrollView>
		</View>
	)
}

export default OrdersScreen

const styles = StyleSheet.create({})
