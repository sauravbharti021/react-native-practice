import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
} from "react-native";
import React, { Fragment, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "./colors";
import defaultStyles from "../config/styles";
import AppText from "./AppText";
import ButtonComponent from "../components/ButtonComponent";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

const AppPicker = ({icon, items, placeholder, selectedItem, onSelectItem, PickerItemComponent=PickerItem }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Fragment>
      <TouchableWithoutFeedback
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.container}>
          <MaterialCommunityIcons
            name={icon}
            size={20}
            color={colors.medium}
            style={styles.icon}
          />
          <AppText
            style={{ ...styles.text, color: "black", fontFamily: "Sans-serif" }}
          >
            { selectedItem ? 
              <AppText style={{...styles.text, color: colors.medium}} > {selectedItem.label} </AppText> :  
            <AppText style={{...styles.placeholder, color: colors.medium }} > {placeholder} </AppText>
             }
             {/* {
              selectedItem ? 
              <Text> {selectedItem.label} </Text>
              :
              <Text> {placeholder} </Text>
             } */}
             
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.medium}
            style={styles.icon}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>

            <FlatList
                data = {items}
                keyExtractor={item => item.value.toString()}
                renderItem={({item}) => {
                    return (
                      <PickerItemComponent label={item.label} onPress={() => {
                        console.log("Category clicked")
                        setModalVisible(false)
                        onSelectItem(item)
                    }} />

                  )
                }}
            />
            <ButtonComponent
            title="Close"
            onPress={() => {
                setModalVisible(false);

            }}
            color="dodgerblue"
            />
        </Screen>
      </Modal>
    </Fragment>
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
    alignItems: "center",
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
  text: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: 'black'
  },
  placeholder: {
    color: colors.light
  }
});

export default AppPicker;
