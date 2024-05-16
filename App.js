import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback,
  Dimensions,
  TouchableOpacity, TouchableHighlight, Platform,
  Alert, StatusBar
 } from 'react-native';
 import { useImageDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
  console.log(Dimensions.get('window'), "window")
  console.log(Dimensions.get('screen'), "screen")

console.log(useImageDimensions(), "dimensions", useDeviceOrientation())
const orientation = useDeviceOrientation();
console.log(orientation)

  const [initial, setInitial] = useState(false)
  const changeColor=() => {
    // Alert.alert("Button has been pressed", "Are you sure to change background?", [{text : "Yes", onPress :() => {
    //   setInitial(!initial);
    // }},
    //  {text: "No", onPress: () => {
    //   setInitial(initial);
    //  }}])
    Alert.prompt("Enter your desired color", "type in lowercase", [{text : "Confirm", onPress: ()=> {
      setInitial(!initial)
      console.log("haha so funny")
    }}])
    
  }

  const handlePress = () => {
    console.log("pressed text, ...")
  }

  useEffect(()=> {

  }, [])

  return (
      <SafeAreaView style={!initial ? styles.container : styles.body}>
        {/* <Text numberOfLines={2} onPress={handlePress} >Yo, Buddy! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </Text>
        
        <TouchableOpacity onPress={()=> {
          console.log("image tapped")
        }} > 
          <Image style={imageStyle.image}
          source = {{uri: `https://picsum.photos/200/300`}}
          blurRadius={0.1}
          />
        </TouchableOpacity>

        <View>
          <Button onPress={changeColor} title='Press to change color' />
        </View>
        <StatusBar style="auto" /> */}


        <View style={{
          height: orientation == 'landscape' ? '100%': '30%',
          backgroundColor: 'orange'
        }}>
          <Text>
            Hey, whats up?
          </Text>
        <StatusBar style="auto" />

        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    backgroundColor: 'lightgreen',
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: Platform.OS == 'ios' ? 'cyan' : 'lightgreen',
    paddingTop: Platform.OS == 'ios' ? StatusBar.currentHeight : 10
  },
  body: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const imageStyle = StyleSheet.create({
  image: {
    width: 300,
    height: 200,
    resizeMode: 'contain' 
  }
});
