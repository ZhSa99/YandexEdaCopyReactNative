import { Button, SafeAreaView, View } from 'react-native'
import React from 'react'
import useRestaurants, { IRestaurantInfo } from '../../hooks/useRestaurants'
import { ActivityIndicator } from 'react-native'
import { mainBackgroundColor } from '../../utils/colors'
import ItemsList from './components/ItemsList'
import YandexLoadingAnimation from '../../customElements/YandexLoadingAnimation'

const RestaurantInfoScreen = ({
	route,
}: {
	route: { params: { restaurantInfo: IRestaurantInfo } }
}) => {
	const restaurantInfo = route.params.restaurantInfo

	const { getDishesListFromRestaurant, isLoading, dishesList } =
		useRestaurants()

	React.useEffect(() => {
		getDishesListFromRestaurant(route.params.restaurantInfo.id)
	}, [])

	return (
		<View style={{ backgroundColor: mainBackgroundColor, height: '100%' }}>
			
			{isLoading ? (
				<SafeAreaView>
					<YandexLoadingAnimation />
				</SafeAreaView>
			) : (
				<ItemsList dishesList={dishesList} restaurantInfo={restaurantInfo} />
			)}
		</View>
	)
}

export default RestaurantInfoScreen
