import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import AppText from '../config/AppText'
import colors from '../config/colors'
import ListItem from './ListItem'

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/jacket.jpg')}/>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>
            Red jacket for sale
        </AppText>
        <AppText style={styles.price}>
            $100
        </AppText>

        <View style={styles.userContainer}>
            <ListItem 
                image={require('../assets/mosh.jpg')}
                title="Mosh Bhai"
                subTitle="3 Listings"
            />

        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    detailsContainer: {
        padding: 20
    },
    title: {
        fontSize: 25,
        fontWeight: 500
    },
    price: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20
    },
    userContainer: {
        marginVertical: 35
    }
})

export default ListingDetailsScreen