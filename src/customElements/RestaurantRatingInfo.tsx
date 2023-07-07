import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IRestaurantInfo } from '../hooks/useRestaurants'
import { FontAwesome } from '@expo/vector-icons'
import { goldenStarColor, greyStarColor } from '../utils/colors'
import { scale, verticalScale } from 'react-native-size-matters'

const getStarColor = (rate: number) => {
	return rate > 4.5 ? goldenStarColor : greyStarColor
}

const getRatingInfo = (rate: number, rateCount: number) => {
	return {
		rate: `${rate} ${rate > 4.6 ? 'Хорошо' : null}`,
		rateCount:
			rateCount > 200 ? `(${Math.trunc(rateCount / 100) * 100}+)` : rateCount,
	}
}
const getFoodTypeRUS = (foodType: string) => {
	switch (foodType) {
		case 'fastfood':
			return 'Фастфуд'
	}
}
const RestaurantRatingInfo = ({
	restaurantInfo,
}: {
	restaurantInfo: IRestaurantInfo
}) => {
	return (
		<View style={{ alignSelf: 'flex-start', width: scale(260), marginTop: verticalScale(4) }}>
			<Text style={{ color: 'white', fontSize: scale(21), fontWeight: '500', lineHeight: 30 }}>
				{restaurantInfo.name}
			</Text>
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<FontAwesome
					name="star"
					size={24}
					color={getStarColor(restaurantInfo.rating)}
				/>

				<Text style={styles.textStyle}>
					{getRatingInfo(restaurantInfo.rating, restaurantInfo.rateCount).rate}
				</Text>
				<Text style={styles.textStyle}>
					{
						getRatingInfo(restaurantInfo.rating, restaurantInfo.rateCount)
							.rateCount
					}
				</Text>
				<Text style={styles.textStyle}>₸₸₸</Text>
				<Text style={styles.textStyle}>
					{getFoodTypeRUS(restaurantInfo.foodType)}
				</Text>
			</View>
		</View>
	)
}

export default RestaurantRatingInfo

const styles = StyleSheet.create({
	textStyle: {
		color: 'white',
		fontSize: scale(15),
		fontWeight: '500',
	},
})
