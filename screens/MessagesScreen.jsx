import { View, Text } from "react-native";
import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import ListItem from "../components/ListItem/ListItem";
import Screen from "../config/Screen";
import Constants from "expo-constants";
import colors from "../config/colors";
import ListItemSeperator from "../components/ListItem/ListItemSeperator";
import ListItemDeleteAction from "../components/ListItem/ListItemDeleteAction";


const MessagesScreen = () => {
  const initialMessages = [
    // {
    //     id: 0,
    //     title: 
    // },
    {
      id: 1,
      title: "T1",
      description: "D1",
      image: require("../assets/mosh.jpg"),
    },
    {
      id: 2,
      title: "T2",
      description: "D2",
      image: require("../assets/mosh.jpg"),
    },
  ];
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false)

  const handleDelete = (message) => {
    const tempArray = messages.filter(currentMessage => currentMessage.id != message.id)
    setMessages(tempArray)
  };

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => {
              console.log("Message Selected", item);
            }}
            renderRightActions={() => {
              return <ListItemDeleteAction onPress={() => handleDelete(item)} />;
            }}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={()=> {
        setMessages([{
                id: 2,
                title: "T2",
                description: "D2",
            }])
        }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});
export default MessagesScreen;
