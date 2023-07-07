import { ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { verticalScale, scale } from 'react-native-size-matters'
import CustomExpoIcon from '../../../customElements/CustomExpoIcon'
import CustomIcon from '../../../customElements/CustomIcon'
import { mainBackgroundColor, containerColor, textColorLightDark, textColorDark } from '../../../utils/colors'
import { delivery_ICON } from '../../../utils/iconsPaths'
import { IRestaurantInfo } from '../../../hooks/useRestaurants'
import { getRatingInfo } from '../../../customElements/RestaurantRatingInfo'
import { useNavigation } from '@react-navigation/native'

const RestaurantInfo = ({ restaurantInfo }: { restaurantInfo: IRestaurantInfo }) => {
  const ratingInfo = getRatingInfo(
		restaurantInfo.rating,
		restaurantInfo.rateCount
	)

  const navigation = useNavigation()
	return (
		<>
			<ImageBackground
				source={{ uri: restaurantInfo.iconPath }}
				style={{
					width: '100%',
					height: verticalScale(240),
					flexDirection: 'row',
					paddingTop: verticalScale(45),
					justifyContent: 'center',
				}}
				imageStyle={{ resizeMode: 'contain', flexDirection: 'row' }}
			>
				<View style={{ width: '50%', zIndex: 1 }}>
					<Pressable onPress={() => navigation.goBack()}>
						<CustomExpoIcon iconName="arrow-back" expoIconName="Ionicons" />
					</Pressable>
				</View>

				<View style={{ width: '50%', flexDirection: 'row', left: scale(60) }}>
					<CustomExpoIcon
						containerStyle={{ marginRight: 0 }}
						iconName="cards-heart-outline"
						expoIconName="MaterialCommunityIcons"
					/>

					<CustomExpoIcon
						containerStyle={{ marginLeft: scale(5) }}
						iconName="ios-search"
						expoIconName="Ionicons"
					/>
				</View>

				<LinearGradient
					start={{ x: 0.5, y: 0 }}
					locations={[0.6, 1]}
					colors={['rgba(0,0,0,0.2)', mainBackgroundColor]}
					style={{
						position: 'absolute',
						width: '100%',
						height: verticalScale(240),
						opacity: 1,
					}}
				/>
			</ImageBackground>

			<View
				style={{
					position: 'absolute',
					top: verticalScale(150),
					left: scale(10),
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
							<Text style={{ color: textColorDark }}>
								{ratingInfo.rateCount}
							</Text>
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
			</View>
		</>
	)
}

export default RestaurantInfo

const styles = StyleSheet.create({})