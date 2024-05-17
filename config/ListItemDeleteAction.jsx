import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import React from "react";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from "./colors";

const ListItemDeleteAction = ({onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress} >
        <View style={styles.delete}>
            <MaterialCommunityIcons 
                name="trash-can"
                color={colors.white}
                size={35}
            />
        </View>
    </TouchableWithoutFeedback>
  )
};

const styles = StyleSheet.create({
  delete: {
    backgroundColor: "red",
    width: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default ListItemDeleteAction;
