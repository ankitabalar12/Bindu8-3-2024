import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from './styles'
import { Image } from 'react-native'
import { icons } from '../../Helper/icons'
import { useNavigation } from '@react-navigation/native'
import { String } from '../../Helper/string'
import { useTheme } from '../../Componets/ThemeContext'

const Bides = () => {
  const navigation = useNavigation();
  const { theme, themeStyles, themeStylestext,  } = useTheme();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('BidsProduct');
    },1000);
    return () => clearTimeout(timeout);
}, [navigation]);

  const goBack = () => {
    navigation.goBack();
};
  return (
    <View style={[styles.container,{ backgroundColor: themeStyles[theme].backgroundColor }]}>
      <TouchableOpacity  onPress={goBack} style={styles.arrowview}>
        <Image source={icons.arrow} style={styles.arrowstyle}></Image>
      </TouchableOpacity>
      <Text style={[styles.bidstext,{color: themeStyles[theme].textColor}]}>{String.BIDS}</Text>
      <Text style={[styles.thewishtext,{color: themeStyles[theme].textColor}]}>{String.thewishlistitems}</Text>
    <TouchableOpacity onPress={()=>{
       navigation.navigate('BidsProduct');
    }}>
    <Image source={icons.Layer1} style={styles.imgbidsstyle}></Image>
    </TouchableOpacity>
    </View>
  )
}

export default Bides

