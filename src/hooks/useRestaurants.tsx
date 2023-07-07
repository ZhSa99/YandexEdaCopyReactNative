import { ImageRequireSource, StyleSheet, Text, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import { query, collection, orderBy, getDocs } from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig'

export interface IRestaurantInfo {
	deliveryTime: string
	foodType: string
	iconPath: string
	name: string
	rateCount: number
	rating: number
	id: string
}

export interface IDishesListInfo {
	amount: string | null
	cost: number
	iconPath: string
	name: string
	type: string
	id: string
}

const useRestaurants = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [isInitialLoading, setIsInitialLoading] = useState(false)

	const [restaurantsList, setRestaurantsList] = React.useState(
		{} as IRestaurantInfo[]
	)
	const [dishesList, setDishesList] = React.useState([] as IDishesListInfo[])

	const getRestaurantsList = async () => {
		setIsLoading(true)
		try {
			const ref = query(collection(db, 'restaurants'), orderBy('name'))
			const docRef = await getDocs(ref)
			const restaurantsList = docRef.docs.map((elem) => ({
				...(elem.data() as IRestaurantInfo),
				id: elem.id,
			}))

			setRestaurantsList(restaurantsList)
			// setTimeout(() => setIsLoading(false), 0)
		} catch (error) {
			console.log(error)
		} finally {
			setIsLoading(false)
			// setTimeout(() => setIsLoading(false), 0)
		}
	}

	const getDishesListFromRestaurant = async (restaurantID: string) => {
		setIsLoading(true)
		try {
			const ref = collection(db, 'restaurants', restaurantID, 'dishesList')
			const refSnap = await getDocs(ref)
			const dishesList = refSnap.docs.map((elem) => ({ ...elem.data(), id: elem.id }))

			setDishesList(dishesList as IDishesListInfo[])
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false)
		}
	}


	React.useEffect(() => {
		if(isInitialLoading) {
			getRestaurantsList()
		}
	}, [isInitialLoading])
	const value = useMemo(
		() => ({
			restaurantsList,
			dishesList,
			getRestaurantsList,
			getDishesListFromRestaurant,
			isLoading,
		}),
		[restaurantsList,dishesList, getRestaurantsList]
	)

	return value
}

export default useRestaurants

const styles = StyleSheet.create({})
