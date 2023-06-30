import {
	NavigationContainer,
	createNavigationContainerRef,
} from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { Animated, Dimensions, StyleSheet, Text, View } from 'react-native'
import BottomTabNavigation from './src/navigation/BottomTabNavigation/BottomTabNavigation'
import 'react-native-gesture-handler'
import MainHeader from './src/customElements/MainHeader/MainHeader'

import {
	BottomTabRootParamList,
	StackRootParamList,
} from './src/navigation/types'
import StackNavigation from './src/navigation/StackNavigation/StackNavigation'
import LeftDrawer from './src/customElements/LeftDrawer/LeftDrawer'
import { scale } from 'react-native-size-matters'
import { DrawerProvider } from './src/context/DrawerContext/DrawerContext'
import AppNavigation from './src/navigation/AppNavigation/AppNavigation'
import { NavigationProvider } from './src/context/NavigationContext/NavigationContext'
import { ModalScreensProvider } from './src/context/ModalScreensContext/ModalScreensContext'
import ModalScreens from './src/customElements/ModalScreens/ModalScreens'

const { width, height } = Dimensions.get('screen')

export default function App() {
	return (
		<DrawerProvider>
			<NavigationProvider>
				<ModalScreensProvider>
					<View style={{ width, height, flexDirection: 'row' }}>
						<StatusBar style="light" />

						<LeftDrawer />

						<AppNavigation />

						<ModalScreens />
					</View>
				</ModalScreensProvider>
			</NavigationProvider>
		</DrawerProvider>
	)
}
