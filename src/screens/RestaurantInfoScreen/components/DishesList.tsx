import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { mainBackgroundColor } from '../../../utils/colors'
import DishItem from './DishItem'
import { scale, verticalScale } from 'react-native-size-matters'
import { IDishesList, IDishesListInfo } from '../../../hooks/useRestaurants'

interface IDishesLists {
	dishesList: IDishesList
	categoriesNamesRU: string[]
	setItemModalVisible: React.Dispatch<
		React.SetStateAction<{
			visible: boolean
			itemInfo: IDishesListInfo | null
		}>
	>
}

const DishesList = ({
	dishesList,
	categoriesNamesRU,
	setItemModalVisible,
}: IDishesLists) => {
	const cateogries = Object.keys(dishesList?.categoriesList)
	return (
		<View style={{ backgroundColor: mainBackgroundColor }}>
			{categoriesNamesRU?.map((item, index) => {
				return (
					<View key={index} style={styles.categoryItemsContainer}>
						<Text style={styles.categoryLabel}>{item}</Text>
						<View style={styles.itemsListContainer}>
							{dishesList.itemsList
								.filter((elem) => elem.type === cateogries[index])
								.map((elem, index) => {
									return (
										<DishItem
											key={index}
											setItemModalVisible={setItemModalVisible}
											elem={elem}
										/>
									)
								})}
						</View>
					</View>
				)
			})}
		</View>
	)
}

export default DishesList

const styles = StyleSheet.create({
	categoryItemsContainer: {
		width: scale(320),
		alignSelf: 'center',
		paddingTop: verticalScale(15),
		backgroundColor: 'transparent',
	},
	categoryLabel: {
		color: 'white',
		fontSize: scale(30),
		fontWeight: '700',
	},
	itemsListContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: verticalScale(7),
		flexWrap: 'wrap',
	},
})