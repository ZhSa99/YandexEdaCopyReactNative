import { Animated } from "react-native"

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
}