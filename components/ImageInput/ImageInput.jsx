import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import React, {useEffect} from "react";
import * as ImagePicker from "expo-image-picker";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const ImageInput = ({ imageUri, onChangeImage }) => {
  const handlePress = () => {
    if (!imageUri) {
      selectImage();
    } else {
      Alert.alert("Alert", "Are you sure, you wanna delete this Image?", [
        {
          text: "Yes",
          onPress: () => {
            onChangeImage(null);
          },
        },
        {
          text: "No",
        },
      ]);
    }
  };

  useEffect(()=> {
    const requestPermission= async() => {
      const response = await ImagePicker.requestCameraPermissionsAsync();

      if(!response.granted){
        alert('You need to enable permission to access library.')
      }
    }
    requestPermission();
  }, [])

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });

      if (!result.canceled) {
        onChangeImage(result.assets[0].uri);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri ? (
          <MaterialCommunityIcons
            color={colors.medium}
            name="camera"
            size={40}
          />
        ) : (
          <Image source={{ uri: imageUri }} key={imageUri} style={styles.image} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 10,
    height: 100,
    justifyContent: "center",
    width: 100,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default ImageInput;
