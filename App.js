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

export default function App() {

  return (
    <>
      <ListingItemScreen />
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

