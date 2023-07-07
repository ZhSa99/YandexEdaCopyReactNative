import {
	SafeAreaView,
	StyleSheet,
} from 'react-native'
import React, {  } from 'react'
import HeaderAndSearchWithChildren from '../../customElements/HeaderAndSearchWithChildren/HeaderAndSearchWithChildren'
import AllRestaurants from '../../customElements/AllRestaurants/AllRestaurants'

const MainScreen = () => {

	return (
		<SafeAreaView>
			<HeaderAndSearchWithChildren
				children={<AllRestaurants hasAllRestaurantsLabel/>}
			/>
		</SafeAreaView>
	)
}

export default MainScreen

const styles = StyleSheet.create({})
