import { View, Text, StyleSheet, Platform} from 'react-native'
import React from 'react'
import defaultStyle from '../../config/styles'

const AppText = ({children, style, ...otherProps}) => {
  return (
      <Text style={{...defaultStyle.text, ...style}} {...otherProps} >{children}</Text>
  )
}

const styles = StyleSheet.create({
  text: {
      color: 'red',    
      fontSize: Platform.OS == 'ios' ? '20' : '18',
  }
})


export default AppText