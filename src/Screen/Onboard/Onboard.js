import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { String } from '../../Helper/string'
import { styles } from './styles'
import { icons } from '../../Helper/icons'
import { useNavigation } from '@react-navigation/native'


const Onboard = () => {
    const navigation = useNavigation();
    
    const goBack = () => {
        navigation.goBack();
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={goBack} style={styles.leftarroeview}>
                <Image source={icons.arrow} style={styles.arrowstyle}></Image>
            </TouchableOpacity>
            <Image source={icons.gadgets} style={styles.gadgetsimgstyle}></Image>

            <Text style={styles.welcometext}>{String.welcome}</Text>
            <Text style={styles.Loremtext}>{String.simply}</Text>
            <TouchableOpacity onPress={() => { navigation.navigate('Swiperscreen') }}
                style={styles.backarrowstyle}>
                <Image source={icons.arrowrightdoubleline} style={styles.arrowrightimg}></Image>
            </TouchableOpacity>
        </View>
    )
}

export default Onboard

