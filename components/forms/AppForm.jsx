import { View, Text } from 'react-native'
import React from 'react'
import { Formik } from 'formik'

const AppForm = ({ initialValues, onSubmit, validationSchema, children }) => {
  return (
    <Formik 
        initialValues={{ 
            name: "",
            email: "",
            password: "",
            title: "",
            price: "",
            description: "",
            category: null
        }}
        onSubmit={(values) => {
            console.log(values)
        }}
        validationSchema={validationSchema}
    >
        {children}
    </Formik>
  )
}

export default AppForm