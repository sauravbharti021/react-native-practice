import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useState, useContext } from 'react'
import Screen from '../config/Screen'
import * as Yup from "yup";
import {AppForm, AppFormField, SubmitButton, ErrorMessage} from '../components/forms'
import AppNavigator from '../navigation/AppNavigator';
import route from '../navigation/route';
import auth from '../api/auth';
import {jwtDecode} from 'jwt-decode'
import AuthContext from '../auth/context';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = ({navigation}) => {

    const [error, setError] = useState(false)
    const {user, setUser} = useContext(AuthContext)
    
    console.log(user,"lol hahah")
    const handleSubmit = async({email, password}) => {
        try{
            const response = await auth.login(email, password)
            if(!response || !response.ok){
                setError(true)
            }else{
                setError(false)
                const details = jwtDecode(response.data)
                setUser(details)
            }
        }catch(err){
            console.log(err)
        }
    }

  return (
    <Screen style={styles.container}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <AppForm
            initialValues={{ 
                email: "",
                password: ""
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            <>  
                <ErrorMessage error="Invalid email or password." visible={error} />
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