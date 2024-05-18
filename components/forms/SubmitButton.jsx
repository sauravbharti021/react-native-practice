import { View, Text } from 'react-native'
import React from 'react'
import ButtonComponent from '../ButtonComponent'
import { useFormikContext } from 'formik'

const SubmitButton = ({title, }) => {
    const {handleSubmit} = useFormikContext()
    
  return (
    <ButtonComponent 
        title={title}
        onPress={handleSubmit}
        color="dodgerblue"
    />
  )
}

export default SubmitButton