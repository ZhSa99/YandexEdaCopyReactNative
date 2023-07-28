import { Animated, View } from 'react-native'
import React, { useState } from 'react'
import useRestaurants, {
	IDishesListInfo,
	IRestaurantInfo,
} from '../../hooks/useRestaurants'
import { mainBackgroundColor } from '../../utils/colors'
import ItemsList from './components/ItemsList'
import { verticalScale } from 'react-native-size-matters'
import ItemInfoModal from './components/ItemInfoModal'
import HeaderButtons from './components/HeaderButtons'
import RestaurantImage from './components/RestaurantImage'

const RestaurantInfoScreen = ({
	route,
}: {
	route: { params: { restaurantInfo: IRestaurantInfo } }
}) => {
	const restaurantInfo = route.params.restaurantInfo

	const { getDishesListFromRestaurant, isLoading, dishesList } =
		useRestaurants()

	const scrollY = React.useRef(new Animated.Value(0)).current

	const [itemModalVisible, setItemModalVisible] = useState({
		visible: false,
		itemInfo: {} as IDishesListInfo | null,
	})

	// --------------UTILS----------------
	// -----------------------------------

	const getHandledInterpolate = (
		inputRange: number[],
		outputRange: string[] | number[]
	) => {
		const handledInputRange = inputRange?.map((elem) => verticalScale(elem))
		return scrollY.interpolate({
			inputRange: handledInputRange,
			outputRange,
			extrapolate: 'clamp',
		})
	}

	React.useEffect(() => {
		getDishesListFromRestaurant(route.params.restaurantInfo.id)
	}, [])

	return (
		<View style={{ backgroundColor: mainBackgroundColor, height: '100%' }}>
			{/* ---------------BUTTONS----------------- */}
			{/* --------------------------------------- */}
			<HeaderButtons
				restaurantName={restaurantInfo.name}
				getHandledInterpolate={getHandledInterpolate}
			/>
			{/* --------------------------------------- */}

			{/* -----------RESTAURANT IMAGE------------ */}
			{/* --------------------------------------- */}
			<RestaurantImage
				getHandledInterpolate={getHandledInterpolate}
				iconPath={restaurantInfo.iconPath}
			/>
			{/* --------------------------------------- */}

			{/* -----------ITEMS LIST------------------ */}
			{/* --------------------------------------- */}

			<ItemsList
				getHandledInterpolate={getHandledInterpolate}
				scrollY={scrollY}
				dishesList={dishesList}
				restaurantInfo={restaurantInfo}
				isLoading={isLoading}
			/>

			{/* --------------------------------------- */}

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
		</View>
	)
}

export default RestaurantInfoScreen
