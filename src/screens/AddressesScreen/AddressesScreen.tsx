import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ViewContainer from '../../customElements/ViewContainer/ViewContainer'
import { screenNames_RU } from '../../utils/screenLabels'

const AddressesScreen = () => {
  return (
    <ViewContainer label={screenNames_RU.addresses}>
      
    </ViewContainer>
  )
}

export default AddressesScreen

const styles = StyleSheet.create({})