import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Screen from '../config/Screen'
import AppTextInput from '../config/AppTextInput'
import ButtonComponent from './ButtonComponent'

const LoginScreen = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

  return (
    <Screen style={styles.container}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <AppTextInput
            icon="email"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Email"
            keyboardType="email"
            textContentType="emailAddress"
            onChangeText= {text => setEmail(text)}
        />
        <AppTextInput
            icon="lock"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Password"
            textContentType="password"
            secureTextEntry
            onChangeText= {text => setPassword(text)}
        />

        <ButtonComponent 
            title="Login"
            onPress={()=> {
                console.log(email, password)
            }}
            color="dodgerblue"
        />
    </Screen>
  )
}

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20
    },
    container: {
        padding: 10,
    }
})

export default LoginScreen