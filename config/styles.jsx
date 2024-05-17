import { StyleSheet, Platform } from 'react-native'
import colors from './colors';

export default {
    text: {
        fontSize: 18,
        fontFamily: Platform.OS == 'ios' ? 'Courier' : 'Roboto',
        color: colors.dark,
    },
}