import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import colors from './colors'

const ListItemSeperator = () => {
  return (
    <View style={styles.seperator} /> 
  )
}

const styles = StyleSheet.create({
    seperator: {
        width: '100%',
        height: 1,
        backgroundColor: colors.light
    }
})

export default ListItemSeperator