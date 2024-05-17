import { View, Text, TextInput } from "react-native";
import React from "react";
import { useState } from "react";
import { Switch } from "react-native";

const PracticeComponent = () => {
  const [firstName, setFirstName] = useState('')
  const [isNew, setIsNew] = useState(false);
  return (
    <>
        {/* <Text>{firstName}</Text>
        <TextInput 
            placeholder="First Name" 
            style={{
                borderBottomColor: '#ccc',
                borderBottomWidth: 1,

            }}
            onChangeText={(text) => setFirstName(text)}
            maxLength={5}
            clearButtonMode="always"
        /> */}
      <Switch 
        value={isNew}
        onValueChange={(newValue) => setIsNew(newValue)}
      />

    </>
  );
};

export default PracticeComponent;
