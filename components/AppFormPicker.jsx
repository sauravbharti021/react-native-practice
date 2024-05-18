import { View, Text } from 'react-native'
import React from 'react'
import { ErrorMessage } from './forms'
import Screen from '../config/Screen'
import { useFormikContext } from 'formik'
import AppPicker from '../config/AppPicker'

const AppFormPicker = ({items, name, PickerItemComponent, placeholder}) => {
  const {errors, setFieldValue, touched, values} = useFormikContext()
  console.log()
  console.log(errors, name, "name")
  console.log()

  return (
    <>
      <AppPicker 
        items = {items}
        onSelectItem = {(item) => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        placeholder= {placeholder}
        selectedItem= {values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]}  />
    </>
  )
}

export default AppFormPicker