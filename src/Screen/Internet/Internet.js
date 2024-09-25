import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { icons } from '../../Helper/icons';
import { Image } from 'react-native';
import { String } from '../../Helper/string';
import GreenButton from '../../Componets/GreenButton/GreenButton';

const SomethingWentWrong = () => {
    const navigation = useNavigation();
    const goBack = () => {
        navigation.goBack();
    };
    return (
        <View style={styles.container}>
            <View style={styles.flexrowstyle}>
                <TouchableOpacity onPress={goBack} style={styles.arrowview}>
                    <Image source={icons.arrow} style={styles.arrowstyle}></Image>
                </TouchableOpacity>
            </View>
            <Image source={icons.Noconnectionbro} style={styles.updateimages}></Image>
            <Text style={styles.textstyle}>{String.InternetConnection}</Text>
            <Text style={styles.Performancetext}>{String.startBestbidagain}</Text>
            <GreenButton
          title={String.tryagain}
          updateapp={styles.updateapp} 
          onPress={() => { navigation.navigate('Location') }}
         />
         <TouchableOpacity>
            <Text style={styles.remaindtext}>Remind me later</Text>
         </TouchableOpacity>
        </View>
    )
}

export default SomethingWentWrong

