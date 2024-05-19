import { View, Text, StyleSheet } from "react-native";
import React from "react";
import AppText from "../Text/AppText";
import colors from "../../config/colors";

const ErrorMessage = ({ error, visible }) => {
  if (!error || !visible) return null;

  return <AppText style={styles.error}>{error}</AppText>;
};

const styles = StyleSheet.create({
    error: {
        fontFamily: 'Sans-serif',
        fontSize: 15,
        paddingBottom: 4,
        color: colors.danger,
        marginHorizontal: 10
    }
});

export default ErrorMessage;
