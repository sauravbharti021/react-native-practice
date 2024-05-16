import { StyleSheet, Platform } from 'react-native'

const style = StyleSheet.create({
    text: {
        fontSize: 18,
        fontFamily: Platform.OS == 'ios' ? 'Courier' : 'Roboto'
    }
})

export default style;