import { View, Text } from 'react-native'
import React from 'react'
import AppTextInput from '../Text/AppTextInput'
import ErrorMessage from './ErrorMessage'
import { useFormikContext } from 'formik'

const AppFormField = ({name, ...otherProps}) => {
    const {setFieldTouched, setFieldValue, handleChange, errors, touched, values } = useFormikContext()

  return (
    <>
        <AppTextInput
            onBlur={()=> setFieldTouched(name)}
            onChangeText= {text => setFieldValue(name, text)}
            value= {values[name]}
            {...otherProps}
        />
        <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

export default AppFormField