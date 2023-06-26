import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import BottomTabNavigation from './src/navigation/BottomTabNavigation/BottomTabNavigation'
import 'react-native-gesture-handler'
import DrawerNavigation from './src/navigation/DrawerNavigation/DrawerNavigation'

const {width, height} = Dimensions.get('screen')

export default function App() {

	return (
		<View style={{width, height}}>
			<StatusBar style='light'/>
			<NavigationContainer>
				<DrawerNavigation />
			</NavigationContainer>
		</View>
	)
}
