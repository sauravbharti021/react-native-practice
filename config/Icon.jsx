import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {MaterialCommunityIcons} from '@expo/vector-icons' 

const Icon = ({backgroundColor, name}) => {
  return (
    <View style={{...styles.container, backgroundColor: backgroundColor}}>

        <MaterialCommunityIcons 
            name={name}
            style={{...styles.icon}}
            size={40}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
        // borderRightWidth: 20
    }
})

export default Icon