import { Animated } from "react-native"
import { IRestaurantInfo } from "../hooks/useRestaurants"

export type BottomTabRootParamList ={
  MainScreen: {scrollY: Animated.Value}
  RestaurantsScreen: undefined
  ShopsScreen: undefined
  BasketScreen: undefined
}

export type StackRootParamList = {
	BottomTabNavigation: undefined
	OrdersListScreen: undefined
	ProfileScreen: undefined
	PromocodesScreen: undefined
	AddressesScreen: undefined
	AboutServiceScreen: undefined
	BecomeCourierScreen: undefined
	FoodForBusinessScreen: undefined
	RestaurantInfoScreen: { restaurantInfo?: IRestaurantInfo}
}