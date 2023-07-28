import { Animated, FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { scale, verticalScale } from 'react-native-size-matters'
import { containerColor, mainBackgroundColor, textColorLightDark } from '../../../utils/colors'

interface ICategoriesListHorizontal {
	categoriesNamesRU: string[]
	getHandledInterpolate: (
		inputRange: number[],
		outputRange: string[] | number[]
	) => Animated.AnimatedInterpolation<string | number>
	listInfo: {
		activeIndex: number
		offset: number
	}
	setListInfo: React.Dispatch<
		React.SetStateAction<{
			activeIndex: number
			offset: number
		}>
	>
}

const CategoriesListHorizontal = React.forwardRef(
	(props: ICategoriesListHorizontal, ref) => {

    const { categoriesNamesRU, getHandledInterpolate, listInfo, setListInfo } = props
		return (
			<Animated.FlatList
				ref={ref}
				showsHorizontalScrollIndicator={false}
				style={[
					styles.horizontalFlatList,
					{
						borderTopRightRadius: getHandledInterpolate(
							[100, 160],
							[scale(20), 0]
						),
						borderTopLeftRadius: getHandledInterpolate(
							[100, 160],
							[scale(20), 0]
						),
					},
				]}
				contentContainerStyle={{
					justifyContent: 'center',
					alignItems: 'center',
				}}
				data={categoriesNamesRU}
				horizontal
				keyExtractor={(_, index) => index.toString()}
				renderItem={({ item, index }) => {
					return (
						<Pressable
							onPress={(ev) => {
								setListInfo({
									activeIndex: index,
									offset: ev.nativeEvent.locationX,
								})
							}}
							key={`category-${index}`}
							style={[
								{
									backgroundColor:
										index === listInfo.activeIndex
											? containerColor
											: mainBackgroundColor,
								},
								styles.categoryItemStyle,
							]}
						>
							<Text style={styles.categoryText}>{item}</Text>
						</Pressable>
					)
				}}
			/>
		)
	}
)

export default CategoriesListHorizontal

const styles = StyleSheet.create({
	horizontalFlatList: {
		height: verticalScale(70),
		backgroundColor: mainBackgroundColor,
		paddingLeft: scale(7),
		paddingRight: scale(7),
	},
	categoryItemStyle: {
		height: verticalScale(37),
		margin: scale(5),
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: scale(17),
	},
	categoryText: {
		padding: scale(10),
		color: textColorLightDark,
		fontSize: scale(18),
		fontWeight: '400',
	},
})