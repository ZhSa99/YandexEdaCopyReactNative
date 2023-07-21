import {
	Animated,
	Button,
	FlatList,
	Image,
	ImageBackground,
	Modal,
	Pressable,
	StyleSheet,
	Text,
	View,
} from 'react-native'
import React, { useRef, useState } from 'react'
import { scale, verticalScale } from 'react-native-size-matters'
import {
	buttonContainerColor,
	containerColor,
	itemButtonColor,
	itemColor,
	mainBackgroundColor,
	textColor2,
	textColorLightDark,
} from '../../../utils/colors'
import {
	IDishesListInfo,
	IItemsList,
	IRestaurantInfo,
} from '../../../hooks/useRestaurants'
import { LinearGradient } from 'expo-linear-gradient'
import CustomExpoIcon from '../../../customElements/CustomExpoIcon'
import RestaurantDescription from './RestaurantDescription'
import { useNavigation } from '@react-navigation/native'
import ItemInfoModal from './ItemInfoModal'
import BasketModal from '../../../customElements/ModalScreens/components/BasketModal/BasketModal'

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

const ItemsList = ({
	dishesList,
	restaurantInfo,
}: {
	dishesList: IItemsList
	restaurantInfo: IRestaurantInfo
}) => {
	const navigation = useNavigation()

	const [listInfo, setListInfo] = useState({ activeIndex: 0, offset: 0 })
	const [itemModalVisible, setItemModalVisible] = useState({
		visible: false,
		itemInfo: {} as IDishesListInfo | null,
	})

	const cateogries = Object.keys(dishesList?.categoriesList)
	const categoriesNamesRU = Object.values(dishesList?.categoriesList)

	const flatList1Ref = useRef<FlatList>(null)
	const flatList2Ref = useRef<FlatList>(null)

	const scrollY = React.useRef(new Animated.Value(0)).current

	///////
	//

	const interpolateForButtons = {
		inputRange: [120, 140, 145],
		outputRange: [
			buttonContainerColor,
			buttonContainerColor,
			mainBackgroundColor,
		],
	}
	const getHandledInterpolate = (
		inputRange: number[],
		outputRange: string[] | number[]
	) => {
		const handledInputRange = inputRange?.map((elem) => verticalScale(elem))
		return scrollY.interpolate({
			inputRange: handledInputRange,
			outputRange,
			extrapolate: 'clamp',
		})
	}

	const DATA = [
		<RestaurantDescription
			restaurantInfo={restaurantInfo}
			interpolate={getHandledInterpolate}
		/>,
		<Animated.FlatList
			ref={flatList1Ref}
			showsHorizontalScrollIndicator={false}
			style={[
				styles.horizontalFlatList,
				{
					borderTopRightRadius: getHandledInterpolate(
						[100, 160],
						[scale(20), 0]
					),
					borderTopLeftRadius: getHandledInterpolate(
						[100, 160],
						[scale(20), 0]
					),
				},
			]}
			contentContainerStyle={{
				justifyContent: 'center',
				alignItems: 'center',
			}}
			data={categoriesNamesRU}
			horizontal
			keyExtractor={(_, index) => index.toString()}
			renderItem={({ item, index }) => {
				return (
					<Pressable
						onPress={(ev) => {
							setListInfo({
								activeIndex: index,
								offset: ev.nativeEvent.locationX,
							})
						}}
						key={`category-${index}`}
						style={[
							{
								backgroundColor:
									index === listInfo.activeIndex
										? containerColor
										: mainBackgroundColor,
							},
							styles.categoryItemStyle,
						]}
					>
						<Text style={styles.categoryText}>{item}</Text>
					</Pressable>
				)
			}}
		/>,
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
										<Pressable
											key={index}
											style={styles.itemContainer}
											onPress={() =>
												setItemModalVisible((val) => ({
													itemInfo: elem,
													visible: !itemModalVisible.visible,
												}))
											}
										>
											<Image
												source={{ uri: elem.iconPath }}
												style={styles.itemImage}
											/>
											<Text
												style={styles.itemText}
												lineBreakMode="tail"
												numberOfLines={1}
											>
												{elem.name}
											</Text>
											<View style={styles.itemCostButton}>
												<Text
													style={{ color: textColor2, fontSize: scale(20) }}
												>
													{elem.cost}
												</Text>
											</View>
										</Pressable>
									)
								})}
						</View>
					</View>
				)
			})}
		</View>,
	]

	React.useEffect(() => {
		flatList1Ref.current?.scrollToIndex({
			animated: true,
			index: listInfo.activeIndex,
		})
	}, [listInfo])

	return (
		<View style={{ flex: 1 }}>
			{/* ---------------BUTTONS----------------- */}
			{/* --------------------------------------- */}
			<Animated.View
				style={[
					{
						flexDirection: 'row',
						zIndex: 2,
						paddingTop: verticalScale(40),
						backgroundColor: getHandledInterpolate(
							[100, 135],
							['transparent', mainBackgroundColor]
						),
					},
				]}
			>
				<Animated.View
					style={{
						position: 'absolute',
						width: '100%',
						alignItems: 'center',
						top: verticalScale(60),
						opacity: getHandledInterpolate([100, 150], [0, 1]),
					}}
				>
					<Text
						adjustsFontSizeToFit
						style={{
							color: textColorLightDark,
							fontSize: scale(17),
							fontWeight: '400',
						}}
					>
						{restaurantInfo.name}
					</Text>
				</Animated.View>

				<AnimatedPressable
					onPress={() => navigation.goBack()}
					style={{ width: '50%' }}
				>
					<CustomExpoIcon
						iconName="arrow-back"
						expoIconName="Ionicons"
						containerStyle={{
							marginLeft: getHandledInterpolate([100, 150], [scale(10), 0]),
							backgroundColor: getHandledInterpolate(
								interpolateForButtons.inputRange,
								interpolateForButtons.outputRange
							),
						}}
					/>
				</AnimatedPressable>

				<View
					style={{
						flexDirection: 'row',
						width: '50%',
						justifyContent: 'flex-end',
					}}
				>
					<AnimatedPressable>
						<CustomExpoIcon
							containerStyle={{
								alignSelf: 'flex-end',
								marginRight: getHandledInterpolate([100, 150], [scale(10), 0]),
								backgroundColor: getHandledInterpolate(
									interpolateForButtons.inputRange,
									interpolateForButtons.outputRange
								),
							}}
							iconName="cards-heart-outline"
							expoIconName="MaterialCommunityIcons"
						/>
					</AnimatedPressable>

					<AnimatedPressable>
						<CustomExpoIcon
							containerStyle={{
								right: 0,
								marginRight: getHandledInterpolate([100, 150], [scale(10), 0]),
								backgroundColor: getHandledInterpolate(
									interpolateForButtons.inputRange,
									interpolateForButtons.outputRange
								),
							}}
							iconName="ios-search"
							expoIconName="Ionicons"
						/>
					</AnimatedPressable>
				</View>
			</Animated.View>
			{/* --------------------------------------- */}

			{/* -----------RESTAURANT IMAGE------------ */}
			{/* --------------------------------------- */}
			<Animated.View
				style={{
					top: verticalScale(-96),
					transform: [{ scale: getHandledInterpolate([-100, 0], [1.4, 1]) }],
				}}
			>
				<ImageBackground
					source={{ uri: restaurantInfo.iconPath }}
					style={styles.imageBackground}
					imageStyle={{ resizeMode: 'contain', flexDirection: 'row' }}
				/>
				<LinearGradient
					start={{ x: 0.5, y: 0 }}
					locations={[0.6, 1]}
					colors={['rgba(0,0,0,0.2)', mainBackgroundColor]}
					style={styles.linearGradient}
				/>
			</Animated.View>
			{/* --------------------------------------- */}

			<Animated.FlatList
				onScroll={Animated.event(
					[{ nativeEvent: { contentOffset: { y: scrollY } } }],
					{ useNativeDriver: false }
				)}
				ref={flatList2Ref}
				stickyHeaderIndices={[1]}
				data={DATA}
				keyExtractor={(_, index) => index.toString()}
				showsVerticalScrollIndicator={true}
				indicatorStyle={'white'}
				renderItem={({ item, index }) => {
					return item
				}}
			/>

			<ItemInfoModal
				visible={itemModalVisible.visible}
				setVisible={() =>
					setItemModalVisible((val) => ({
						...val,
						visible: !itemModalVisible.visible,
					}))
				}
				itemInfo={itemModalVisible.itemInfo}
			/>
		</View>
	)
}

export default ItemsList

const styles = StyleSheet.create({
	horizontalFlatList: {
		height: verticalScale(70),
		backgroundColor: mainBackgroundColor,
		paddingLeft: scale(7),
		paddingRight: scale(7),
	},
	categoryItemStyle: {
		height: verticalScale(37),
		margin: scale(5),
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: scale(17),
	},
	categoryText: {
		padding: scale(10),
		color: textColorLightDark,
		fontSize: scale(18),
		fontWeight: '400',
	},
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
	itemContainer: {
		width: scale(155),
		height: verticalScale(235),
		backgroundColor: itemColor,
		borderRadius: scale(28),
		alignItems: 'center',
		marginTop: verticalScale(7),
	},
	itemImage: {
		width: scale(142),
		height: scale(142),
		borderRadius: scale(22),
		marginTop: verticalScale(6.5),
		borderBottomRightRadius: scale(10),
		borderBottomLeftRadius: scale(10),
	},
	itemText: {
		color: textColor2,
		fontSize: scale(18),
		fontWeight: '400',
		lineHeight: verticalScale(40),
		paddingLeft: scale(10),
		paddingRight: scale(10),
	},
	itemCostButton: {
		width: scale(142),
		height: verticalScale(55),
		backgroundColor: itemButtonColor,
		borderRadius: scale(22),
		alignItems: 'center',
		justifyContent: 'center',
	},
	linearGradient: {
		position: 'absolute',
		width: '100%',
		height: verticalScale(240),
		opacity: 1,
	},
	imageBackground: {
		width: '100%',
		height: verticalScale(240),
		flexDirection: 'row',
		paddingTop: verticalScale(45),
		justifyContent: 'center',
		position: 'absolute',
	},
})
