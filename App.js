import { useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
  Platform,
  Alert,
  StatusBar,
} from "react-native";
import {
  useImageDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import * as ImagePicker from "expo-image-picker";
import WelcomeScreen from "./screens/WelcomeScreen";
import ViewImageScreen from "./screens/ViewImageScreen";
import AppText from "./components/Text/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import style from "./config/styles";
import ButtonComponent from "./config/ButtonComponent";
import Card from "./config/Card";
import ListingDetailsScreen from "./screens/ListingDetailsScreen";
import MessagesScreen from "./screens/MessagesScreen";
import ProfileComponent from "./screens/ProfileScreen";
import Screen from "./config/Screen";
import PracticeComponent from "./components/PracticeComponent";
import AppTextInput from "./components/Text/AppTextInput";
import AppPicker from "./components/picker/AppPicker";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ListingItemScreen from "./screens/ListingItemScreen";
import ImageInputList from "./components/ImageInput/ImageInputList";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import AuthNavigator from "./navigation/AuthNavigator";

const Link = ({}) => {
  const navigation = useNavigation()
  return (
    <ButtonComponent 
      title="Click"
      onPress={() => {
        navigation.navigate('TweetDetails', {id: 2, message: "2"})
      }}
      color=  'dodgerblue'
    />
  )
}

const Tweets = ({navigation}) => {
  return (
    <Screen>
      <Text>
        Tweets
      </Text>
      {/* <ButtonComponent color="dodgerblue" title="View Tweet" onPress={() => {
        navigation.navigate("TweetDetails")
      }} /> */}
      <Link />
    </Screen>
  )
}

const TweetDetails = ({route}) => {
  return (
    <Screen>
      <Text style={{color: 'red'}}>
        Tweet Details {route.params.id}
      </Text>
    </Screen>
  )
}
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const StackNavigator= () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: 'tomato'},
        headerTintColor: 'yellow'
    }}
  >
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen name="TweetDetails" component={TweetDetails} 
      options={{
        
      }} 
    />
  </Stack.Navigator>
)

const Account = ()=> {
  return (
    <Screen>
      <Text>
        Account
      </Text>
    </Screen>
  )
}
const Feed = ()=> {
  return (
    <Screen>
      <Text>
        Feed
      </Text>
    </Screen>
  )
}

const TabNavigator = () => {
  return(
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: "tomato",
        tabBarActiveTintColor: "white",
        // tabBarInactiveBackgroundColor: 'green'

      }}
    >
      <Tab.Screen name="Feed" component={Feed} 
        options={{
          tabBarIcon: ({size, color}) => <MaterialCommunityIcons name="tab" size={size} color={color}  />
        }}
      />
      <Tab.Screen name="Account" component={Account} 
        options={{
          tabBarIcon: ({size, color}) => <MaterialCommunityIcons name="home" size={size} color={color} />
        }}
      />
    </Tab.Navigator>

  )
}

export default function App() {

  return (
    <>

      <NavigationContainer>
        {/* <StackNavigator /> */}
        {/* <TabNavigator /> */}
        <AuthNavigator />
      </NavigationContainer>
      {/* <Screen>

      </Screen> */}
      {/* <ListingItemScreen /> */}
      {/* <RegisterScreen /> */}
      {/* <LoginScreen /> */}
      {/* <Screen>
        <PracticeComponent />
        <AppPicker 
          icon="apps" 
          items={categories} 
          placeholder="Category"
          selectedItem={category}
          onSelectItem = {item => setCategory(item)}
        />
        <AppTextInput icon="email" placeholder="Email" />
      </Screen> */}

      {/* <ProfileComponent title="Mosh Bhai" subTitle="Moshbhai123@gmail.com" /> */}
      {/* <MessagesScreen /> */}
      {/* <ListingDetailsScreen /> */}
      {/* <Card title={"Clothes"} subTitle={"$100"} image={require(`./assets/jacket.jpg`)} /> */}
      {/* <ButtonComponent title={"Login"} onPress={() => {console.log("tapped")}} />  */}
      {/* <WelcomeScreen /> */}
      {/* <ViewImageScreen />  */}
    </>
  );
}
