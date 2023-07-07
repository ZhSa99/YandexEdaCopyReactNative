import { StatusBar } from 'expo-status-bar'
import { Dimensions, View } from 'react-native'
import 'react-native-gesture-handler'

import LeftDrawer from './src/customElements/LeftDrawer/LeftDrawer'
import { DrawerProvider } from './src/context/DrawerContext/DrawerContext'
import AppNavigation from './src/navigation/AppNavigation/AppNavigation'
import { NavigationProvider } from './src/context/NavigationContext/NavigationContext'
import { ModalScreensProvider } from './src/context/ModalScreensContext/ModalScreensContext'
import ModalScreens from './src/customElements/ModalScreens/ModalScreens'
import { useEffect } from 'react'
import { login } from './src/firebase/firebaseConfig'

const { width, height } = Dimensions.get('screen')

export default function App() {
	useEffect(() => {
		const aaa = async () => {
			await login('test@gmail.com', 'testpassword')
		}
		aaa()
	}, [])
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
