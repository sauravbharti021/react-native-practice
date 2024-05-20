import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import ListingScreen from "../screens/ListingScreen";
import ListingItemScreen from "../screens/ListingItemScreen";
import ListItem from "../components/ListItem/ListItem";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createNativeStackNavigator()

const FeedNavigator= () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false, presentation: "modal"}} >
            <Stack.Screen name="Listing" component={ListingScreen} />
            <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
        </Stack.Navigator>
    )
}

export default FeedNavigator;