import { View, Text } from 'react-native'
import React from 'react'
import { ErrorMessage } from '../forms'
import Screen from '../../config/Screen'
import { useFormikContext } from 'formik'
import AppPicker from './AppPicker'

const AppFormPicker = ({items, name, numberOfColumns=1, PickerItemComponent, placeholder}) => {
  const {errors, setFieldValue, touched, values} = useFormikContext()

  return (
    <>
      <AppPicker 
        items = {items}
        numberOfColumns={numberOfColumns}
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