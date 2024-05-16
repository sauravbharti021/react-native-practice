import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.closeIcon}>
            <MaterialCommunityIcons name="close" color="white" size={30} />
        </View>
        <View style={styles.deleteIcon}>
            <MaterialCommunityIcons name="trash-can-outline" color="white" size={30} />
        </View>
        <Image source={require('../assets/chair.jpg')} style={styles.image}  />
    </View>
  )
}

const styles = StyleSheet.create({
    closeIcon: {
        backgroundColor: colors.primary,
        position: 'absolute',
        top: 40,
        left: 30
    },
    deleteIcon: {
        backgroundColor: colors.secondary,
        position: 'absolute',
        top: 40,
        right: 30
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    container: {
        width: '100%',
        backgroundColor: '#000',
        flex: 1
    }
})