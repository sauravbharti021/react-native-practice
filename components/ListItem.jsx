import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import AppText from '../config/AppText'
import colors from '../config/colors'
import { TouchableHighlight } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const ListItem = ({image, title, subTitle, onPress, renderRightActions}) => {
  return (
    <GestureHandlerRootView>

        <Swipeable renderRightActions={renderRightActions}>

            <TouchableHighlight 
                underlayColor={colors.light}
                onPress={onPress}
            >
                <View style={styles.container}>
                    <Image style={styles.image} source={image} />
                    <View>
                        <AppText style={styles.title}>{title}</AppText>
                        <AppText style={styles.subTitle}>{subTitle}</AppText>
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15
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
    }
})
export default ListItem