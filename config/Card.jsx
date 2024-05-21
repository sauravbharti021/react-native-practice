import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import colors from './colors'
import AppText from '../components/Text/AppText'

const Card = ({title, subTitle, imageUrl, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>

        <View style={styles.container}>
        <View style={styles.card}>
            <Image style={{ ...styles.image,resizeMode: 'contain'}} source={{uri: imageUrl }}/>

            <View style={styles.detailsContainer}>
                <AppText style={styles.title} >
                    {title}
                </AppText>
                <AppText style={styles.subTitle}>
                    {subTitle}
                </AppText>
            </View>
        </View>
        </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f4f4',
        padding: 20,
    },
    card : {
        width: '100%',
        borderRadius: 30,
        backgroundColor: colors.white,
        overflow: 'hidden'
        // marginBottom: 20,
    },
    image: {
        width: '100%',
        height: 250,
        overflow: "hidden",
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        marginTop: -10
    },
    detailsContainer: {
        padding: 20
    },
    title: {
        marginBottom: 7,
        color: colors.primary
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: 'bold'
    }
})

export default Card