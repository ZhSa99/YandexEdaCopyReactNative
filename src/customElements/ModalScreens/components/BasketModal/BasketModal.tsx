import { Modal, StyleSheet, View, Text, Image } from 'react-native'
import React from 'react'
import { scale, verticalScale } from 'react-native-size-matters'
import { basketModalScreenColors, modalColors } from '../../../../utils/colors'
import { AntDesign } from '@expo/vector-icons'
import {
	BasketScreen_ICON,
	emptyBasket_ICON,
} from '../../../../utils/iconsPaths'
import CustomIcon from '../../../CustomIcon'
import CustomButton from '../../../CustomButton'

interface IBasketModal {
	setBasketModalVisible: () => void
}

const BasketModal = ({ setBasketModalVisible }: IBasketModal) => {
	return (
		<Modal
			style={{
				height: verticalScale(50),
				zIndex: 5,
				width: '100%',
				backgroundColor: '#191918',
			}}
			visible={true}
			animationType="slide"
			presentationStyle="formSheet"
			onRequestClose={setBasketModalVisible}
		>
			<View
				style={{
					height: '100%',
					width: '100%',
					flexDirection: 'column',

					alignItems: 'center',
					backgroundColor: basketModalScreenColors.backgroundColor,
				}}
			>
				<View
					style={{
						width: '100%',
						height: verticalScale(50),

						justifyContent: 'center',
						top: verticalScale(5),
					}}
				>
					<AntDesign
						onPress={setBasketModalVisible}
						name="close"
						size={scale(32)}
						color={modalColors.textColor}
						style={{ left: scale(15) }}
					/>
					<Text
						style={{
							color: modalColors.textColor,
							position: 'absolute',
							alignSelf: 'center',
							fontSize: scale(20),
							fontWeight: '600',
						}}
					>
						Заказ
					</Text>
				</View>

				<CustomIcon
					source={emptyBasket_ICON}
					iconSize={260}
					containerStyle={{ width: scale(300), height: verticalScale(300) }}
				/>

				<Text
					style={{
						color: modalColors.textColor,
						alignSelf: 'center',
						fontSize: scale(20),
						fontWeight: '600',
					}}
				>
					Ничего нет
				</Text>
				<Text
					style={{
						color: modalColors.textColorDark,
						alignSelf: 'center',
						fontSize: scale(18),
						fontWeight: '400',
						width: scale(300),
						textAlign: 'center',
						top: verticalScale(10),
					}}
				>
					Перейдите в список ресторанов, чтобы выбрать понравившийся и оформить
					из него заказ
				</Text>

				<CustomButton
					label="Выбрать ресторан"
					containerStyle={{ bottom: scale(-130) }}
				/>
			</View>
		</Modal>
	)
}

export default BasketModal

const styles = StyleSheet.create({})
