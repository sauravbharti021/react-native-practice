import { View, Text} from 'react-native'
import React from 'react'
import defaultStyle from '../config/styles'

const AppText = ({children, style}) => {
  return (
      <Text style={defaultStyle.text} >{children}</Text>
  )
}



export default AppText