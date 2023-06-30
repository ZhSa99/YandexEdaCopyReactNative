import { Modal, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { ModalScreensContext } from '../../context/ModalScreensContext/ModalScreensContext'
import { verticalScale } from 'react-native-size-matters'
import { basketModalScreenColors } from '../../utils/colors'
import BasketModal from './components/BasketModal/BasketModal'

const ModalScreens = () => {
	const { basketModalVisible, setBasketModalVisible } =
		useContext(ModalScreensContext)
	return (
		<>
			{basketModalVisible ? (
				<BasketModal setBasketModalVisible={setBasketModalVisible} />
			) : null}
		</>
	)
}

export default ModalScreens

const styles = StyleSheet.create({})
