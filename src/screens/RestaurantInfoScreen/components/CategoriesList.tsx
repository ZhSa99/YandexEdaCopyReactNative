import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface ICategoriesList {
	categoriesList: string[]
}

const CategoriesList = ({ categoriesList = [] }: ICategoriesList) => {
	return (
		<ScrollView horizontal showsHorizontalScrollIndicator={false}>
			{categoriesList.map((elem, index) => {
				return <Pressable key={`category-${index}`}><Text>{elem}</Text></Pressable>
			})}
		</ScrollView>
	)
}

export default CategoriesList

const styles = StyleSheet.create({})
