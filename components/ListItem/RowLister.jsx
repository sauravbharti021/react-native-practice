import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { TouchableHighlight } from 'react-native'
import AppText from '../Text/AppText'
import colors from '../../config/colors'
import {MaterialCommunityIcons} from '@expo/vector-icons'

const RowLister = ({title, subTitle=null, image=null, icon=null, style, marginBottomProvided=0}) => {

    const fontTitleColor = colors.black;
    const fontSubTitleColor = image ? '#afb0b3' : colors.black;
    const fontWeightTitle = image? 700 : 400;

    console.log(style, marginBottomProvided, {...styles.container, marginBottom: marginBottomProvided})  
  return (
    <TouchableHighlight>
        <View style={{...styles.container, marginBottom: marginBottomProvided, borderBottomColor: colors.light, borderBottomWidth: 1.5}}>
            {
                image && <Image style={{...styles.image }} source={image} />
            }
            {   
                icon && 
                <View style={{...styles.iconContainer, ...style}}>
                    <MaterialCommunityIcons style={styles.icon} name={icon.name} size={icon.size} />
                </View>
            }
            <View>
            <AppText style={{...styles.title , color: fontTitleColor, fontWeight: fontWeightTitle}}>{title}</AppText>
            {
            subTitle && <AppText style={{...styles.subTitle, color: fontSubTitleColor}}>{subTitle}</AppText>
            }
            </View>
        </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        flexDirection: 'row',
        backgroundColor: colors.white,
        alignItems: 'center'
    },
    image: {
      width: 70,
      height: 70,
      borderRadius: 35,
      marginRight: 10
    },
    title: {
        fontFamily: 'Sans-serif',
        marginBottom: 7,
        fontSize: 18,
        fontWeight: 500,
        marginLeft: 10
    },
    subTitle: {
        fontFamily: 'Sans-serif',
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 10
    },
    icon: {
        marginRight: 5
    },
    iconContainer: {
        width: 50,
        height: 50,
        // backgroundColor: 'red',
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    }
})
export default RowLister