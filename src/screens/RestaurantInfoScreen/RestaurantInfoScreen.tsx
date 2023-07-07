import {
	ImageBackground,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/firebaseConfig'
import useRestaurants, { IRestaurantInfo } from '../../hooks/useRestaurants'
import { ActivityIndicator } from 'react-native'
import {
	buttonContainerColor,
	containerColor,
	mainBackgroundColor,
	textColorDark,
	textColorLightDark,
} from '../../utils/colors'
import { scale, verticalScale } from 'react-native-size-matters'
import { LinearGradient } from 'expo-linear-gradient'
import CustomIcon from '../../customElements/CustomIcon'
import CustomExpoIcon from '../../customElements/CustomExpoIcon'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { delivery_ICON } from '../../utils/iconsPaths'
import { getRatingInfo } from '../../customElements/RestaurantRatingInfo'
import RestaurantInfo from './components/RestaurantInfo'
import CategoriesList from './components/CategoriesList'

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

	const dishesListFiltered = dishesList.filter(
		(elem) => elem.id !== 'generalInformation'
	)
	const categoriesList = dishesList.filter(
		(elem) => elem.id === 'generalInformation'
	)[0]
	
	return (
		<View style={{ backgroundColor: mainBackgroundColor, flex: 1 }}>
			{isLoading ? (
				<ActivityIndicator />
			) : (
				<>
					<RestaurantInfo restaurantInfo={restaurantInfo}/>

					<CategoriesList categoriesList={Object.values(categoriesList)}/>
				</>
			)}
		</View>
	)
}

export default RestaurantInfoScreen

const styles = StyleSheet.create({})
