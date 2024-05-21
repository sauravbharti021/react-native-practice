import { View, Text, StyleSheet, Modal } from 'react-native'
import React from 'react'
import AppText from '../components/Text/AppText'
import * as Progress from 'react-native-progress'
import colors from '../config/colors'

const UploadScreen = ({progress = 0, visible=false}) => {
    console.log(progress, "progress")
  return (
    <Modal visible={visible}>
        <View style={styles.container}>
            <Progress.Bar progress={progress} color={colors.primary} width={200} />
            <Text>{progress * 100 } %</Text> 
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
})

export default UploadScreen