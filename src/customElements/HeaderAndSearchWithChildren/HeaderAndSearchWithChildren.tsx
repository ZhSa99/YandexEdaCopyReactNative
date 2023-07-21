import { Animated, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import { bottomTabColors } from '../../utils/colors'
import { scale, verticalScale } from 'react-native-size-matters'
import MainHeader from '../MainHeader/MainHeader'
import SearchModalHandler from '../SearchModalHandler/SearchModalHandler'

interface IHeaderAndSearchWIthChildren {
	children: React.ReactNode
	headerIsPinned?: boolean
}

const HeaderAndSearchWIthChildren = ({
	children = <View></View>,
	headerIsPinned = false,
}: IHeaderAndSearchWIthChildren) => {
	const flatListRef = useRef<FlatList>(undefined as any)

	const scrollY = useRef(new Animated.Value(0)).current

	const headerAndSearch = headerIsPinned
		? []
		: [
				<Animated.View
					style={{
						...(headerIsPinned
							? null
							: {
									transform: [
										{
											translateY: Animated.subtract(
												verticalScale(60),
												scrollY
											).interpolate({
												inputRange: [-120, 0],
												outputRange: [-120, 0],
												extrapolate: 'clamp',
											}),
										},
									],
							  }),
					}}
				>
					<MainHeader />
				</Animated.View>,
				,
				<SearchModalHandler scrollY={scrollY} />,
		  ]

	return (
		<Animated.FlatList
			ref={flatListRef}
			stickyHeaderIndices={[0]}
			ListHeaderComponent={
				headerIsPinned
					? () => {
							return (
								<>
									<MainHeader />
									<SearchModalHandler scrollY={scrollY} />
								</>
							)
					  }
					: undefined
			}
			onScroll={Animated.event(
				[
					{
						nativeEvent: { contentOffset: { y: scrollY } },
					},
				],
				{ useNativeDriver: false }
			)}
			data={[...headerAndSearch, children]}
			keyExtractor={(_, index) => index.toString()}
			renderItem={({ item }) => {
				return item
			}}
		/>
	)
}

export default HeaderAndSearchWIthChildren

const styles = StyleSheet.create({})
