import { Modal, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { ScreensContext } from '../../context/ScreensProvider/ScreensProvider'
import { verticalScale } from 'react-native-size-matters'
import { basketModalScreenColors } from '../../utils/colors'
import BasketModal from './components/BasketModal/BasketModal'
import SearchModal from './components/SearchModal/SearchModal'

const ModalScreens = () => {
	const { basketModalVisible, setBasketModalVisible, searchModalVisible, setSearchModalVisible } =
		useContext(ScreensContext)
	return (
		<>
			{basketModalVisible ? (
				<BasketModal setBasketModalVisible={setBasketModalVisible} />
			) : null}
			{searchModalVisible ? (
				<SearchModal setSearchModalVisible={setSearchModalVisible} />
			) : null}
		</>
	)
}

export default ModalScreens

const styles = StyleSheet.create({})
