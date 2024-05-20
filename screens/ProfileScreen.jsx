import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import Screen from "../config/Screen";
import AppText from "../components/Text/AppText";
import { TouchableHighlight, Image } from "react-native";
import colors from "../config/colors";
import RowLister from "../components/ListItem/RowLister";

const ProfileScreen = ({ title, subTitle }) => {
  const messages = {};

  return (
    <Screen style={styles.screen}>
      <RowLister
        title="Mosh"
        subTitle="mosh123@gmail.com"
        image={require("../assets/mosh.jpg")}
        style={{
          marginBottom: 10
        }}
        marginBottomProvided= {35}
      />
      <RowLister
        title="My Listings"
        icon={{
          name: "format-list-bulleted",
          size: 30,
        }}
        style={{
          ...styles.icon,
          backgroundColor: colors.primary,
          color: colors.black,
        }}
      />
      <RowLister
        title="My Messages"
        icon={{
          name: "email",
          size: 30,
        }}
        style={{
          ...styles.icon,
          backgroundColor: colors.secondary,
          color: colors.black,
        }}
        marginBottomProvided={10}
      />

      <RowLister
        title="Log Out"
        icon={{
          name: "logout",
          size: 30,
        }}
        style={{ ...styles.icon, backgroundColor: "#ffe66d" }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.light,
  },
  icon: {
    padding: 2,
    marginRight: 3,
  },
});

export default ProfileScreen;
