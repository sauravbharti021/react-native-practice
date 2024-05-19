import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import React from 'react'
import AppText from '../Text/AppText'
import Icon from '../../config/Icon'
import colors from '../../config/colors'

const CategoryPickerItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={{...styles.container}} onPress={()=>{
      onPress()
    }
      }>
        <Icon backgroundColor={item.backgroundColor} name={item.icon} />   
        <AppText style={styles.text}  >{item.label}</AppText>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        margin: 10,
        width: '33%'
    },
    text: {
        margin: 5,
        color: colors.medium,
        textAlign: 'center'
    }
})

export default CategoryPickerItem