import React from "react";
import LottieView from 'lottie-react-native'
import { View, Text } from "react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;

  return (
    <View>
        <LottieView
        source={require("../assets/animation/lottie.json")}
        autoPlay
        loop
        />
    </View>
  );
}

export default ActivityIndicator;