import { Animated, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import { stackColors } from '../../utils/colors'
import StackScreensHeader from '../StackScreensHeader'

interface IViewContainer {
	isScrollView?: boolean
	label?: string
	children?: React.ReactNode
}

const ViewContainer = ({ isScrollView = false, label='undefined', children }: IViewContainer) => {
	const scrollY = useRef(new Animated.Value(0)).current

	return (
		<View
			style={{
				width: '100%',
				height: '100%',
				backgroundColor: stackColors.headerBackgroundColor,
			}}
		>
			<StackScreensHeader
				isScrollView={isScrollView}
				scrollY={scrollY}
				label={label}
			/>
			<Animated.ScrollView
				style={{ width: '100%' }}
				onScroll={Animated.event(
					[{ nativeEvent: { contentOffset: { y: scrollY } } }],
					{ useNativeDriver: true }
				)}
			>
				{children}
			</Animated.ScrollView>
		</View>
	)
}

export default ViewContainer

const styles = StyleSheet.create({})