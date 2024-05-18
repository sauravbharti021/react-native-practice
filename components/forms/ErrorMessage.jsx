import { View, Text, StyleSheet } from "react-native";
import React from "react";
import AppText from "../../config/AppText";

const ErrorMessage = ({ error, visible }) => {
  console.log(!error, !visible)
  if (!error || !visible) return null;

  return <AppText style={styles.error}>{error}</AppText>;
};

const styles = StyleSheet.create({
    error: {
        fontFamily: 'Sans-serif',
        fontSize: 15,
        paddingBottom: 4
    }
});

export default ErrorMessage;
