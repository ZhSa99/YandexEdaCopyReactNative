import {
	Animated,
	FlatList,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from 'react-native'
import React, { useRef } from 'react'
import { bottomTabColors, stackColors } from '../../utils/colors'
import { useRoute } from '@react-navigation/native'
import { scale, verticalScale } from 'react-native-size-matters'
import MainHeader from '../../customElements/MainHeader/MainHeader'
import SearchModalHandler from '../../customElements/SearchModalHandler/SearchModalHandler'
import HeaderAndSearchWithChildren from '../../customElements/HeaderAndSearchWithChildren/HeaderAndSearchWithChildren'

const MainScreen = () => {
	return (
		<SafeAreaView>
			<HeaderAndSearchWithChildren
				children={new Array(20)
					.fill({
						test: 'test',
						key: Math.random(),
					})
					.map((elem, index) => {
						return (
							<View
								key={index}
								style={{
									width: '100%',
									height: verticalScale(100),
									backgroundColor: bottomTabColors.bottomTabColor,
									marginTop: index !== 0 ? 10 : 0,
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<Text style={{ color: 'white', fontSize: scale(20) }}>
									{elem.key}
								</Text>
							</View>
						)
					})}
			/>
		</SafeAreaView>
	)
}

export default MainScreen

const styles = StyleSheet.create({})
