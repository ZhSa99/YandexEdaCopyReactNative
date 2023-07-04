import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderAndSearchWIthChildren from '../../customElements/HeaderAndSearchWithChildren/HeaderAndSearchWithChildren'
import { scale, verticalScale } from 'react-native-size-matters'
import { bottomTabColors } from '../../utils/colors'

const ShopsScreen = () => {
  return (
		<SafeAreaView>
			<HeaderAndSearchWIthChildren
        headerIsPinned={true}
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

export default ShopsScreen

const styles = StyleSheet.create({})