import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import BottomTabNavigation from './src/navigation/BottomTabNavigation/BottomTabNavigation'
import 'react-native-gesture-handler'
import DrawerNavigation from './src/navigation/DrawerNavigation/DrawerNavigation'

export default function App() {
	return (
		<NavigationContainer>
			<DrawerNavigation />
		</NavigationContainer>
	)
}
