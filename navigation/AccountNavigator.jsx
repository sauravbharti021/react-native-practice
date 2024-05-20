import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import ListingScreen from "../screens/ListingScreen";
import MessagesScreen from "../screens/MessagesScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createNativeStackNavigator()

const AccountNavigator= () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}} >
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Messages" component={MessagesScreen} />
        </Stack.Navigator>
    )
}

export default AccountNavigator;