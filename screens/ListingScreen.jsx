import React, {useState, useEffect} from "react";
import { FlatList, StyleSheet, Button, View, ActivityIndicator } from "react-native";

import Card from "../config/Card";
import colors from "../config/colors";
import Screen from "../config/Screen";
import route from "../navigation/route";
import listingsApi from "../api/listingsApi";
import AppText from "../components/Text/AppText";
import ButtonComponent from "../config/ButtonComponent";
import useApi from "../hooks/useApi";

// const listings = [
//   {
//     id: 1,
//     title: "Red jacket for sale",
//     price: 100,
//     image: require("../assets/jacket.jpg"),
//   },
//   {
//     id: 2,
//     title: "Couch in great condition",
//     price: 1000,
//     image: require("../assets/couch.jpg"),
//   },
// ];

function ListingScreen({navigation}) {
  
  const {data: listings, error, loading, request: listLoader } = useApi(listingsApi.getListings)

  console.log(listings)
  console.log("Error", error)
  useEffect (()=> {    
    listLoader()
  }, [])

  return (
    <Screen style={styles.screen}>
      {
        error && 
        <View style={{flex: 1, justifyContent: 'center', height: 200, alignItems: 'center'}} >
          <AppText> Couldn't retrive the List of Items.</AppText>
          <Button title="Retry" onPress={listLoader} color="dodgerblue" />
        </View>
      }
      <ActivityIndicator animating={loading} size="large" />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => {
          
          return <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(route.LISTING_DETAILS, item)}
          />
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light,
  },
});


export default ListingScreen