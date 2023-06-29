import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import ViewContainer from '../../customElements/ViewContainer/ViewContainer'
import { screenNames_RU } from '../../utils/screenLabels'

const AboutServiceScreen = () => {
  return (
    <ViewContainer label={screenNames_RU.aboutService}>

    </ViewContainer>
  )
}

export default AboutServiceScreen

const styles = StyleSheet.create({})