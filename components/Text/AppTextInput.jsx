import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";
import defaultStyles from "../../config/styles";
const AppTextInput = ({ icon, ...otherProps }) => {
  console.log(otherProps.color, "lol")
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name={icon}
        size={20}
        color={colors.medium}
        style={styles.icon}
      />
      <TextInput style={{...defaultStyles.textInput}} {...otherProps} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  textInput: {
    fontSize: 18,
    fontFamily: "",
    color: colors.dark,
    fontWeight: 600,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
