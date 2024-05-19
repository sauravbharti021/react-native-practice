import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import AppText from '../Text/AppText'
import colors from '../../config/colors'
import { TouchableHighlight } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {MaterialCommunityIcons} from '@expo/vector-icons'

const ListItem = ({image, title, subTitle, onPress, renderRightActions}) => {
    const someText = "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
    return (
    <GestureHandlerRootView>

        <Swipeable renderRightActions={renderRightActions}>

            <TouchableHighlight 
                underlayColor={colors.light}
                onPress={onPress}
            >
                <View style={styles.container}>
                    <Image style={styles.image} source={image} />
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
        </Swipeable>
    </GestureHandlerRootView>
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