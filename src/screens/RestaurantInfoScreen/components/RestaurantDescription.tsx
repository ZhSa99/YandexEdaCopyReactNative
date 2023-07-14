import { Animated, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { verticalScale, scale } from 'react-native-size-matters'
import CustomExpoIcon from '../../../customElements/CustomExpoIcon'
import CustomIcon from '../../../customElements/CustomIcon'
import { containerColor, textColorLightDark, textColorDark } from '../../../utils/colors'
import { delivery_ICON } from '../../../utils/iconsPaths'
import { IRestaurantInfo } from '../../../hooks/useRestaurants'
import { getRatingInfo } from '../../../customElements/RestaurantRatingInfo'

const RestaurantDescription = ({
	restaurantInfo,
	interpolate,
}: {
	restaurantInfo: IRestaurantInfo
	interpolate: (
		inputRange: number[],
		outputRange: string[] | number[]
	) => Animated.AnimatedInterpolation<string | number>
}) => {
	const ratingInfo = getRatingInfo(
		restaurantInfo.rating,
		restaurantInfo.rateCount
	)
	return (
		<Animated.View
			style={{
				paddingTop: verticalScale(60),
				paddingBottom: verticalScale(15),
				left: scale(10),
				opacity: interpolate([verticalScale(50), verticalScale(100)], [1, 0])
			}}
		>
			{/* RESTAURANT NAME LABEL */}
			<Text
				style={{
					fontSize: scale(30),
					color: 'white',
					fontWeight: '600',
					marginBottom: verticalScale(6),
				}}
			>
				{restaurantInfo.name}
			</Text>

			<View style={{ flexDirection: 'row' }}>
				<View
					style={{
						flexDirection: 'row',
						width: scale(100),
						height: verticalScale(50),
						backgroundColor: containerColor,
						opacity: 0.92,
						borderRadius: scale(18),
						alignItems: 'center',
					}}
				>
					<CustomIcon
						source={delivery_ICON}
						iconStyle={{ tintColor: textColorLightDark, left: scale(5) }}
					/>
					<View style={{ left: scale(7) }}>
						<Text
							style={{
								color: textColorLightDark,
								fontSize: scale(18),
								fontWeight: '600',
							}}
						>
							{restaurantInfo.deliveryTime}
						</Text>
						<Text style={{ color: textColorDark }}>мин</Text>
					</View>
				</View>
				<View
					style={{
						flexDirection: 'row',
						width: scale(100),
						height: verticalScale(50),
						backgroundColor: containerColor,
						opacity: 0.92,
						borderRadius: scale(18),
						alignItems: 'center',
						marginLeft: scale(10),
					}}
				>
					<CustomExpoIcon
						iconName="star"
						expoIconName="FontAwesome"
						withContainer={false}
						iconSize={23}
						containerStyle={{ left: scale(5) }}
					/>
					<View style={{ left: scale(7) }}>
						<Text
							style={{
								color: textColorLightDark,
								fontSize: scale(18),
								fontWeight: '600',
							}}
						>
							{restaurantInfo.rating}
						</Text>
						<Text style={{ color: textColorDark }}>{ratingInfo.rateCount}</Text>
					</View>
				</View>

				<View
					style={{
						width: scale(60),
						height: verticalScale(50),
						backgroundColor: containerColor,
						opacity: 0.92,
						borderRadius: scale(18),
						alignItems: 'center',
						justifyContent: 'center',
						marginLeft: scale(10),
					}}
				>
					<Text
						style={{
							color: textColorLightDark,
							fontSize: scale(30),
							top: verticalScale(-7),
							fontWeight: '700',
						}}
					>
						...
					</Text>
				</View>
			</View>
		</Animated.View>
	)
}

export default RestaurantDescription

const styles = StyleSheet.create({})