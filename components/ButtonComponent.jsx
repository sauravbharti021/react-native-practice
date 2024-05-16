import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../config/colors'

const ButtonComponent = ({title, onPress, color}) => {
  return (
    // <Button style={styles.button} title='Login' />
    <TouchableOpacity style={{...styles.button, backgroundColor: color}} onPress={onPress}>
        <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    button: {
        width: '100%',
        padding: 20,
        backgroundColor: colors.primary,
        borderRadius: 20,
        justifyContent: 'space-around',
        margin: 5
    },
    textButton: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 15,
        fontWeight: '800',
        textTransform: 'uppercase'
    }
})

export default ButtonComponent