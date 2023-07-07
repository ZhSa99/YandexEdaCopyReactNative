import {
	ActivityIndicator,
	Dimensions,
	ImageBackground,
	Pressable,
	StyleSheet,
	Text,
	View,
} from 'react-native'
import React from 'react'
import useRestaurants from '../../hooks/useRestaurants'
import { scale, verticalScale } from 'react-native-size-matters'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import RestaurantRatingInfo from '../RestaurantRatingInfo'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import {
	buttonContainerColor,
	deliveryGreenColor,
	mainBackgroundColor,
	textColorLightDark,
} from '../../utils/colors'
import CustomIcon from '../CustomIcon'
import { delivery_ICON } from '../../utils/iconsPaths'
import { StackRootParamList } from '../../navigation/types'

interface IAllRestaurants {
	hasAllRestaurantsLabel?: boolean
}

const { height } = Dimensions.get('screen')

const AllRestaurants = ({
	hasAllRestaurantsLabel = false,
}: IAllRestaurants) => {
	const { isLoading, getRestaurantsList, restaurantsList } = useRestaurants()

	const navigation = useNavigation<NavigationProp<StackRootParamList>>()

	React.useEffect(() => {
		getRestaurantsList()
	}, [])

	if (isLoading) {
		return <ActivityIndicator />
	}
	return (
		<View
			style={{
				width: '100%',
				height,
				alignItems: 'center',
			}}
		>
			{hasAllRestaurantsLabel ? (
				<Text
					style={styles.allRestaurantsLabelTextStyle}
				>
					Все рестораны
				</Text>
			) : null}
			{restaurantsList?.map((elem) => {
				return (
					<Pressable
						onPress={() =>
							navigation.navigate('RestaurantInfoScreen', { restaurantInfo: elem})
						}
						key={elem.id}
						style={styles.container}
					>
						<ImageBackground
							source={{ uri: elem.iconPath }}
							style={{
								width: scale(318),
								height: verticalScale(165),
								flexDirection: 'row',
							}}
							imageStyle={{
								borderRadius: scale(18),
							}}
						>
							<View style={styles.deliveryCostContainer}>
								<View style={styles.greenCircleContainer}>
									<CustomIcon
										source={delivery_ICON}
										iconStyle={{ tintColor: 'white' }}
										iconSize={22}
									/>
								</View>
								<Text style={styles.textStyle}>Доставка 0-249₸</Text>
							</View>

							<View style={styles.heartButtonContainer}>
								<MaterialCommunityIcons
									name="cards-heart-outline"
									size={scale(25)}
									color={textColorLightDark}
								/>
							</View>

							<View style={styles.deliveryTimeContainer}>
								<CustomIcon
									source={delivery_ICON}
									iconStyle={{ tintColor: 'white', left: scale(5) }}
								/>
								<Text style={[styles.textStyle, { fontSize: scale(16) }]}>
									{elem.deliveryTime} мин
								</Text>
							</View>
						</ImageBackground>

						<RestaurantRatingInfo restaurantInfo={elem} />
					</Pressable>
				)
			})}
		</View>
	)
}

export default AllRestaurants

const styles = StyleSheet.create({
	//Main
	//
	container: {
		width: scale(318),
		height: verticalScale(220),
		alignItems: 'center',
		justifyContent: 'center',
		// marginTop: verticalScale(5)
	},
	//Delivery Cost styles
	//
	deliveryCostContainer: {
		backgroundColor: buttonContainerColor,
		width: scale(180),
		margin: scale(8),
		borderRadius: 100,
		height: verticalScale(36),
		justifyContent: 'flex-start',
		alignItems: 'center',
		flexDirection: 'row',
		opacity: 0.92,
	},
	greenCircleContainer: {
		width: scale(28),
		height: scale(28),
		borderRadius: 50,
		backgroundColor: deliveryGreenColor,
		left: scale(6),
	},
	heartButtonContainer: {
		position: 'absolute',
		right: 0,
		top: 0,
		margin: scale(10),
		width: scale(42),
		height: scale(42),
		borderRadius: 50,
		backgroundColor: buttonContainerColor,
		alignItems: 'center',
		justifyContent: 'center',
		opacity: 0.92,
	},
	deliveryTimeContainer: {
		width: scale(130),
		height: scale(40),
		borderRadius: 50,
		margin: -1,
		borderBottomRightRadius: 0,
		borderTopRightRadius: 0,
		backgroundColor: mainBackgroundColor,
		opacity: 0.92,
		bottom: 0,
		right: 0,
		position: 'absolute',
		alignItems: 'center',
		flexDirection: 'row',
	},
	//
	textStyle: {
		color: textColorLightDark,
		fontSize: scale(15),
		fontWeight: '600',
		left: scale(10),
	},
	//
	allRestaurantsLabelTextStyle: {
		color: 'white',
		fontSize: scale(30),
		fontWeight: '800',
		alignSelf: 'flex-start',
		left: scale(18),
		transform: [{ scaleY: 0.95 }],
		marginTop: verticalScale(0),
		paddingBottom: verticalScale(10),
	},
})
