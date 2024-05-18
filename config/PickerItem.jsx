import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import AppText from './AppText'
import colors from './colors'

const PickerItem = ({label, onPress}) => {
    console.log(label, "lol")
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    text: {
        padding: 20,
        color: colors.medium,
    }
})

export default PickerItem