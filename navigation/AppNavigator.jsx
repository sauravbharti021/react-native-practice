import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import ListingItemScreen from '../screens/ListingItemScreen'
import ProfileScreen from '../screens/ProfileScreen'
import ListingDetailsScreen from '../screens/ListingDetailsScreen'
import FeedNavigator from './FeedNavigator'

const Tab = createBottomTabNavigator()

const AppNavigator = () => {
    return (
        <Tab.Navigator>
           <Tab.Screen name="Feed" component={FeedNavigator} />
           <Tab.Screen name="Listings Edit" component={ListingItemScreen} /> 
           <Tab.Screen name="Account" component={ProfileScreen} />  
        </Tab.Navigator>
    )
}

export default AppNavigator;