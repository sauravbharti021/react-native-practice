import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import AppText from '../components/Text/AppText'
import colors from '../config/colors'
import ListItem from '../components/ListItem/ListItem'

const ListingDetailsScreen = ({route}) => {
  const listings = route.params
  return (
    <View>
      <Image style={styles.image} source={listings.image}/>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>
            {listings.title}
        </AppText>
        <AppText style={styles.price}>
            $ {listings.price}
        </AppText>

        <View style={styles.userContainer}>
            <ListItem 
                image={listings.image}
                title={listings.title}
                subTitle="3 Listings"
                swipeable={false}
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