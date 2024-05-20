import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
} from "react-native";
import React from "react";
import { useDeviceOrientation } from "@react-native-community/hooks";
import ButtonComponent from "../config/ButtonComponent";
import style from "../config/styles";
import colors from "../config/colors";

const WelcomeScreen = ({navigation}) => {
  // console.log(StatusBar.currentHeight, "status bar", Platform.OS, StatusBar)
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
      blurRadius={10}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo-red.png")}
          resizeMethod="center"
          style={styles.logo}
        />
        <Text style={styles.tagLine}>Sell, what's useless to you!!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonComponent title="Login" color={colors.primary} onPress={() => navigation.navigate('Login')} />
        <ButtonComponent title="register" color={colors.secondary} onPress={() => navigation.navigate('Register')}  />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    paddingTop: Platform.OS == "ios" ? 50 : 30,
    position: "relative",
  },
  logoContainer: {
    position: "absolute",
    top: "10%",
    height: 200,
    width: "100%",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  tagLine: {
    fontWeight: 800,
    fontSize: 25,
    margin: 4,
  },
  buttonContainer: {
    margin: 20,
  },
});

export default WelcomeScreen;
