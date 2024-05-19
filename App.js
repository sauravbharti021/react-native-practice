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
  const orientation = useDeviceOrientation();
  console.log(orientation);

  const [initial, setInitial] = useState(false);
  const changeColor = () => {
    Alert.prompt("Enter your desired color", "type in lowercase", [
      {
        text: "Confirm",
        onPress: () => {
          setInitial(!initial);
          console.log("haha so funny");
        },
      },
    ]);
  };

  const handlePress = () => {
    console.log("pressed text, ...");
  };

  const categories = [
    {
      label: "Furniture",
      value: 1,
    },
    {
      label: "Clothing",
      value: 2,
    },
    {
      label: "Camera",
      value: 3,
    },
  ];

  const [category, setCategory] = useState();

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
      {/* <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "royalblue",
          borderColor: "blue",
          borderRadius: 10,
          position: "absolute",
          top: "50%",
          left: "40%",
          // borderWidth: 10,
          shadow: "lightgreen",
          shadowOffset: { width: 10, height: 10 },
          shadowOpacity: 0.5,
          shadowRadius: 5,
        }}
      >
        <View
          style={{
            backgroundColor: "tomato",
            width: 50,
            height: 50,
          }}
        ></View>
      </View>

      <Text
        style={{
          flex: 1,
          alignItems: 'center',
          position: "absolute",
          top: "45%",
          width: '100%',
          color: 'tomato',
          textTransform: "capitalize",
          textAlign: 'center'
        }}
      >
        <AppText>
          React Native is Nice{" "}
        </AppText>
      </Text>
      <View style={{flex:1, flexDirection: 'row', position: 'absolute', bottom: 20, width: '100%', justifyContent: 'space-evenly' }}>
        <MaterialCommunityIcons name="email" size={40} />
        <MaterialCommunityIcons name="instagram" size={40} />
        <MaterialCommunityIcons name="twitter" size={40} />
      </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    backgroundColor: "lightgreen",
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: Platform.OS == "ios" ? "cyan" : "lightgreen",
    paddingTop: Platform.OS == "ios" ? StatusBar.currentHeight : 10,
  },
  body: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});

const imageStyle = StyleSheet.create({
  image: {
    width: 300,
    height: 200,
    resizeMode: "contain",
  },
});
const dimensionHelper = {
  width: "100%",
  height: 50,
};
