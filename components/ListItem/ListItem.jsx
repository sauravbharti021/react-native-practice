import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import AppText from '../Text/AppText'
import colors from '../../config/colors'
import { TouchableHighlight } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {MaterialCommunityIcons} from '@expo/vector-icons'

const DefaultListItem = ({title, subTitle, image, onPress, swipeable}) => {
    const currentImage = !swipeable ? {uri: image} : image;
    
    return (
        <TouchableHighlight 
                underlayColor={colors.light}
                onPress={onPress}
            >
                <View style={styles.container}>
                    <Image style={styles.image} source ={currentImage}/>
                    <View style={styles.detailsContainer} >
                        <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                        { subTitle && <AppText style={styles.subTitle} numberOfLines={2} >{subTitle}</AppText> }
                    </View>
                    <MaterialCommunityIcons 
                        name="chevron-right" 
                        size={20} 
                        color={colors.medium}
                    />
                </View>
            </TouchableHighlight>
    )
}
const ListItem = ({image, title, subTitle, onPress, renderRightActions, swipeable = true}) => {
    
    return (
        
            swipeable ?
                (
                    <GestureHandlerRootView>
            
                        <Swipeable renderRightActions={renderRightActions}>
                            <DefaultListItem title={title} subTitle={subTitle} image={image} onPress={onPress} swipeable={swipeable} />
                        </Swipeable>
                    </GestureHandlerRootView>
                ) :
                (
                    <DefaultListItem title={title} subTitle={subTitle} image={image} onPress={onPress} swipeable={swipeable} />
                )
        
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10
    },
    title: {
        color: 'black',
        fontFamily: 'sans-serif',
        fontWeight: '800'
    },
    subTitle: {
        fontSize: 13,
        fontFamily: 'sans-serif',
        color: colors.medium
    },
    detailsContainer: {
        flex: 1,
    }
})
export default ListItem