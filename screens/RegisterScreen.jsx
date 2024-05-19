import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Screen from '../config/Screen'
import * as Yup from "yup";
import {AppForm, AppFormField, SubmitButton} from '../components/forms'

const validationSchema = Yup.object().shape({
  name: Yup.string().required().max(40).matches(/^[A-Za-z ]*$/, 'Please enter valid name').label("name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const RegisterScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppForm 
        initialValues={{
          name: "",
          email: "",
          password: ""
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={validationSchema}
      >
        <>
          <AppFormField 
            icon="account"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Name"
            keyboardType="name"
            textContentType="name"
            name="name"
          />
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
          <SubmitButton title="Register" />
        </>
      </AppForm>
    </Screen>
  )
};


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


export default RegisterScreen