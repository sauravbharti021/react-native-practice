import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'
import AppText from './Text/AppText'
import colors from '../config/colors'
import ButtonComponent from '../config/ButtonComponent'
import { useNetInfo } from '@react-native-community/netinfo'
const OfflineNotice = () => {
    const netInfo = useNetInfo();
    if(netInfo.isInternetReachable)
        return null;
  return (
    <View style={styles.container}>
      <AppText style={styles.button}>You are currently offline. </AppText>   
    </View>
  )
}

export default OfflineNotice

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: 40,
        position: 'absolute',
        zIndex: 1,
        width: '100%',
        top: Constants.statusBarHeight,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        color: colors.white
    }
})