import {
	Animated,
	FlatList,
	Image,
	Pressable,
	StyleSheet,
	Text,
	View,
} from 'react-native'
import React, { useMemo, useRef, useState } from 'react'
import { scale, verticalScale } from 'react-native-size-matters'
import {
	containerColor,
	itemButtonColor,
	itemColor,
	mainBackgroundColor,
	textColor2,
	textColorLightDark,
} from '../../../utils/colors'
import {
	IDishesListInfo,
	IDishesList,
	IRestaurantInfo,
} from '../../../hooks/useRestaurants'
import ItemInfoModal from './ItemInfoModal'
import RestaurantDescription from './RestaurantDescription'
import YandexLoadingAnimation from '../../../customElements/YandexLoadingAnimation'
import DishItem from './DishItem'
import CategoriesListHorizontal from './CategoriesListHorizontal'
import DishesList from './DishesList'

interface IItemsList {
	dishesList: IDishesList
	scrollY: Animated.Value
	restaurantInfo: IRestaurantInfo
	isLoading: boolean
	getHandledInterpolate: (
		inputRange: number[],
		outputRange: string[] | number[]
	) => Animated.AnimatedInterpolation<string | number>
}

const ItemsList = ({
	dishesList,
	scrollY,
	restaurantInfo,
	isLoading,
	getHandledInterpolate,
}: IItemsList) => {
	const [listInfo, setListInfo] = useState({ activeIndex: 0, offset: 0 })

	const [itemModalVisible, setItemModalVisible] = useState({
		visible: false,
		itemInfo: {} as IDishesListInfo | null,
	})

	
	const categoriesNamesRU = Object.values(dishesList?.categoriesList)

	const flatList1Ref = useRef<FlatList>(null)
	const flatList2Ref = useRef<FlatList>(null)

	const DATA = [
		<RestaurantDescription
			restaurantInfo={restaurantInfo}
			interpolate={getHandledInterpolate}
		/>,
		isLoading ? (
			<YandexLoadingAnimation />
		) : (
			<CategoriesListHorizontal
				ref={flatList1Ref}
				categoriesNamesRU={categoriesNamesRU}
				getHandledInterpolate={getHandledInterpolate}
				listInfo={listInfo}
				setListInfo={setListInfo}
			/>
		),
		<DishesList
			dishesList={dishesList}
			categoriesNamesRU={categoriesNamesRU}
			setItemModalVisible={setItemModalVisible}
		/>,
	]

	React.useEffect(() => {
		flatList1Ref.current?.scrollToIndex({
			animated: true,
			index: listInfo.activeIndex,
		})
	}, [listInfo])

	return (
		<>
			<Animated.FlatList
				onScroll={Animated.event(
					[{ nativeEvent: { contentOffset: { y: scrollY } } }],
					{ useNativeDriver: false }
				)}
				ref={flatList2Ref}
				data={DATA}
				keyExtractor={(_, index) => index.toString()}
				showsVerticalScrollIndicator={true}
				stickyHeaderIndices={[1]}
				indicatorStyle={'white'}
				renderItem={({ item, index }) => {
					return item
				}}
				style={{ zIndex: 3 }}
			/>

			<ItemInfoModal
				visible={itemModalVisible.visible}
				setVisible={() =>
					setItemModalVisible((val) => ({
						...val,
						visible: !itemModalVisible.visible,
					}))
				}
				itemInfo={itemModalVisible.itemInfo}
			/>
		</>
	)
}

export default ItemsList

const styles = StyleSheet.create({
	
	
	


	linearGradient: {
		position: 'absolute',
		width: '100%',
		height: verticalScale(240),
		opacity: 1,
	},
	imageBackground: {
		width: '100%',
		height: verticalScale(240),
		flexDirection: 'row',
		paddingTop: verticalScale(45),
		justifyContent: 'center',
		position: 'absolute',
	},
})
