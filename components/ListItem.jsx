import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import AppText from '../config/AppText'
import colors from '../config/colors'

const ListItem = ({image, title, subTitle}) => {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10
    },
    title: {
        color: 'black',
        fontFamily: 'sans-serif',
        fontWeight: '800'
    },
    subTitle: {
        fontSize: 13,
        fontFamily: 'sans-serif',
        color: colors.medium
    }
})
export default ListItem