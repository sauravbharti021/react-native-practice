import { Text, StyleSheet } from 'react-native'
import React from 'react'

const AppText = ({children, style}) => {
  return (
      <Text style={{...styles.text, ...style}}>{children}</Text>
  )
}

const styles = StyleSheet.create({
    text: {
        color: 'red',    
        fontSize: 20,
        fontFamily: 'Courier'
    }
})

export default AppText