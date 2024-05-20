import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListingItemScreen from "../screens/ListingItemScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NewListingButton from "./NewListingButton";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ListingsEdit"
        component={ListingItemScreen}
        options={({navigation}) => ({
            tabBarButton: () => <NewListingButton onPress={()=>(navigation.navigate('ListingsEdit')) } />,
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="plus-circle" color={color} size={size} />
            ),
            title: "Listings Edit"
        })}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
