import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import ImageInput from './ImageInput'

const ImageInputList = ({imageUris = [], onAddImage, onRemoveImage}) => {
  return (
    
    <View style={styles.container}>
        <ImageInput onChangeImage={(uri)=> onAddImage(uri)} />
        <ScrollView horizontal={true} >
          { imageUris.map((uri, index) => {
            return (
              <View style={styles.image}>
                <ImageInput imageUri={uri} key={uri+index} onChangeImage={()=> onRemoveImage(uri)} />
              </View>
            )
          })}
        </ScrollView>

      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    image: {
      marginRight: 5
    }
})

export default ImageInputList