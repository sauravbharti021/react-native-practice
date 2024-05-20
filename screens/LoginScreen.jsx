import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Screen from '../config/Screen'
import * as Yup from "yup";
import {AppForm, AppFormField, SubmitButton} from '../components/forms'
import AppNavigator from '../navigation/AppNavigator';
import route from '../navigation/route';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = ({navigation}) => {

  return (
    <Screen style={styles.container}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <AppForm
            initialValues={{ 
                email: "",
                password: ""
            }}
            onSubmit={(values) => {
                console.log(values)
                // navigation.navigate(route.ACCOUNT)
            }}
            validationSchema={validationSchema}
        >
            <>
                <AppFormField
                    icon="email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Email"
                    keyboardType="email"
                    name="email"
                    textContentType="email"
                />
                <AppFormField
                    icon="lock"
                    autoCapitalize="none"
                    autoCorrect={false}
                    name="password"
                    placeholder="Password"
                    textContentType="password"
                    secureTextEntry
                />
                <SubmitButton title="Login" />
            </>
        </AppForm>

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