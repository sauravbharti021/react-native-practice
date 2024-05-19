import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageInputList from '../ImageInput/ImageInputList'
import ErrorMessage from './ErrorMessage'
import {useFormikContext} from 'formik'
const AppFormImagePicker = ({name}) => {
const {errors, setFieldValue, touched, values} = useFormikContext()
const imageUris = values[name]
  return (
    <>
        <ImageInputList 
            imageUris= {imageUris}
            onAddImage={(uri) => {
                setFieldValue(name, [...imageUris, uri]);
            }}
            onRemoveImage={(uri)=> {
                setFieldValue(name, imageUris.filter((u) => uri!==u))
            }}
        />
        <ErrorMessage error={errors[name]} visible={touched[name]}  />
    </>
  )
}

export default AppFormImagePicker