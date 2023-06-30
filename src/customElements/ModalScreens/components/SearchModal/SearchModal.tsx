import {
	Modal,
	StyleSheet,
	View,
	Pressable,
	TextInput,
  StatusBar,
} from 'react-native'
import React, { useRef } from 'react'
import { scale, verticalScale } from 'react-native-size-matters'
import {
	basketModalScreenColors,
	buttonContainerColor,
	modalColors,
	textColor1,
	textColor3,
} from '../../../../utils/colors'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'

interface ISearchModal {
	setSearchModalVisible: () => void
}

const SearchModal = ({ setSearchModalVisible }: ISearchModal) => {
  const textInputRef = useRef<TextInput | null>(null)

  React.useEffect(() => {
    textInputRef.current?.focus()
    console.log(StatusBar.currentHeight);
  }, [])

	return (
		<Modal
			style={{
				height: verticalScale(50),
				zIndex: 5,
				width: '100%',
				backgroundColor: '#191918',
			}}
			visible={true}
			animationType="slide"
			presentationStyle="fullScreen"
		>
			<Pressable
				onPress={() => textInputRef.current?.blur()}
				style={{
					height: '100%',
					width: '100%',
					flexDirection: 'column',
					alignItems: 'center',
					backgroundColor: basketModalScreenColors.backgroundColor,
				}}
			>
				<View
					style={{
						width: scale(325),
						height: 100,
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
            top: verticalScale(25)
					}}
				>
					<Pressable
						style={{
							width: scale(55),
							height: verticalScale(47),
							backgroundColor: buttonContainerColor,
							alignItems: 'center',
							justifyContent: 'center',
							borderRadius: scale(18),
						}}
						onPress={setSearchModalVisible}
					>
						<MaterialIcons
							name="arrow-back"
							size={scale(27)}
							color={modalColors.textColor}
						/>
					</Pressable>
					<Pressable
						style={{
							width: scale(260),
							height: verticalScale(47),

							alignItems: 'center',
							// justifyContent: 'center',
							borderRadius: scale(18),

							backgroundColor: '#2f2f2d',
							flexDirection: 'row',
						}}
					>
						<Ionicons
							name="ios-search"
							size={scale(26)}
							color={textColor1}
							style={{ left: scale(15) }}
						/>
						<TextInput
							ref={textInputRef}
							style={{
								color: textColor3,
								fontSize: scale(17),
								left: scale(19),
								width: scale(200),
							}}
							placeholder="Быстрый поиск"
							placeholderTextColor={textColor3}
							clearButtonMode="always"
						/>
					</Pressable>
				</View>
			</Pressable>
		</Modal>
	)
}

export default SearchModal

const styles = StyleSheet.create({})
