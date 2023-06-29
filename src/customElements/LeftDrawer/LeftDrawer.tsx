import {
	Animated,
	Button,
	Pressable,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from 'react-native'
import React, { ForwardedRef, useContext, useEffect, useRef } from 'react'
import { scale } from 'react-native-size-matters'
import { stackColors } from '../../utils/colors'
import { DrawerContext } from '../../context/DrawerContext/DrawerContext'
import ReAnimated, {
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated'
import { StackRootParamList } from '../../navigation/types'
import { NavigationContainerRef } from '@react-navigation/native'
import YandexEdaTitleIcon from '../YandexEdaTitleIcon'
import ScreensList from './components/ScreensList'

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

const LeftDrawer = React.forwardRef((props, ref) => {
	const { setDrawerIsOpen, drawerIsOpen } = useContext(DrawerContext)
	const scrollX = useRef(new Animated.Value(0)).current
	const zIndex = useRef(new Animated.Value(0)).current

	const zIndexProgress = useSharedValue(0)

	useEffect(() => {
		Animated.timing(scrollX, {
			toValue: drawerIsOpen ? scale(270) : 0,
			duration: 100,
			useNativeDriver: true,
		}).start()
		Animated.timing(zIndex, {
			toValue: drawerIsOpen ? 2 : 0,
			duration: 300,
			useNativeDriver: true,
		}).start()
	}, [drawerIsOpen])

	return (
		<Animated.View
			style={[
				{
					height: '100%',
					width: '100%',
					position: 'absolute',
				},
				{
					zIndex: zIndex,
				},
			]}
		>
			<SafeAreaView
				style={{
					height: '100%',
					width: scale(270),
					backgroundColor: stackColors.headerBackgroundColor,
					position: 'absolute',
					alignItems: 'center',
				}}
			>
				<YandexEdaTitleIcon />

				<ScreensList/>
			</SafeAreaView>

			{/*INVISIBLE ELEM */}
			{/*---------------*/}
			<AnimatedPressable
				onPress={setDrawerIsOpen}
				style={[
					{
						backgroundColor: 'rgba(0,0,0,0)',
						height: '100%',
						width: scale(90),
					},
					{ transform: [{ translateX: scrollX }] },
				]}
			/>
		</Animated.View>
	)
})

export default LeftDrawer

const styles = StyleSheet.create({})
