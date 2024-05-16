import { Text, StyleSheet } from 'react-native'
import React from 'react'

const AppText = ({children}) => {
  return (
      <Text style={styles.text}>{children}</Text>
  )
}

const styles = StyleSheet.create({
    text: {
        color: 'tomato',
        fontSize: '18',
        fontFamily: 'Roboto'
    }
})

export default AppText