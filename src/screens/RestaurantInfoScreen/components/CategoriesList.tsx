import {
	FlatList,
	Pressable,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native'
import React, { useRef, useState } from 'react'
import { scale, verticalScale } from 'react-native-size-matters'
import {
	containerColor,
	mainBackgroundColor,
	textColorLightDark,
} from '../../../utils/colors'

interface ICategoriesList {
	categoriesList: string[]
}

const CategoriesList = ({ categoriesList = [] }: ICategoriesList) => {
	const [listInfo, setListInfo] = useState({ activeIndex: 0, offset: 0 })

	const flatListRef = useRef<FlatList>(null)

	React.useEffect(() => {
		flatListRef.current?.scrollToIndex({
			animated: true,
			index: listInfo.activeIndex,
		})
	}, [listInfo])

	return (
		<FlatList
			ref={flatListRef}
			horizontal
			showsHorizontalScrollIndicator={false}
			data={categoriesList}
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
						style={{
							backgroundColor:
								index === listInfo.activeIndex
									? containerColor
									: mainBackgroundColor,
							height: verticalScale(40),
							margin: scale(5),
							alignItems: 'center',
							justifyContent: 'center',
							borderRadius: scale(16),
              left: scale(10)
						}}
					>
						<Text
							style={{
								padding: scale(10),
								color: textColorLightDark,
								fontSize: scale(18),
								fontWeight: '400',
							}}
						>
							{item}
						</Text>
					</Pressable>
				)
			}}
		/>
	)
}

export default CategoriesList

const styles = StyleSheet.create({})
