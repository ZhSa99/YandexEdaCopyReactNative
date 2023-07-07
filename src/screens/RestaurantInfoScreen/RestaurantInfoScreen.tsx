import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/firebaseConfig'
import useRestaurants, { IRestaurantInfo } from '../../hooks/useRestaurants'
import { ActivityIndicator } from 'react-native'
import { mainBackgroundColor } from '../../utils/colors'

const RestaurantInfoScreen = ({
	route,
}: {
	route: { params: { restaurantInfo: IRestaurantInfo } }
}) => {
	const navigation = useNavigation()

	const { getDishesListFromRestaurant, isLoading, dishesList } =
		useRestaurants()

	React.useEffect(() => {
		getDishesListFromRestaurant(route.params.restaurantInfo.id)
	}, [])

  const dishesListFiltered = dishesList.filter(elem => elem.id !== 'generalInformation')
  const categoriesList = dishesList.filter(elem => elem.id === 'generalInformation')

	return (
		<SafeAreaView style={{ backgroundColor: mainBackgroundColor, flex: 1 }}>
			{isLoading ? (
				<ActivityIndicator />
			) : (
				<Text style={{ color: 'white', fontSize: 30 }}>
					{dishesListFiltered[0]?.amount}
				</Text>
			)}
		</SafeAreaView>
	)
}

export default RestaurantInfoScreen

const styles = StyleSheet.create({})
