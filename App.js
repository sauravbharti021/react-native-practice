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
import ProfileScreen from "./screens/ProfileScreen";
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
import NavigationTheme from "./navigation/NavigationTheme";
import AppNavigator from "./navigation/AppNavigator";
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OfflineNotice from "./components/OfflineNotice";
import AuthContext from "./auth/context";

export default function App() {

  const [user, setUser] = useState()

  return (
    <>
      <AuthContext.Provider value={{user, setUser}}>
        <Screen>
          <OfflineNotice />
          <NavigationContainer theme={NavigationTheme}>
            {
              !user ?
              <AuthNavigator />
              :
              <AppNavigator />
            }
          </NavigationContainer>
        </Screen>
      </AuthContext.Provider>

    </>
  );
}

