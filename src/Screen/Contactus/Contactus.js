import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { String } from '../../Helper/string'
import { icons } from '../../Helper/icons'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from '../../Componets/ThemeContext'
import LinearGradient from 'react-native-linear-gradient'

const Contactus = () => {
  const navigation = useNavigation();
  const { theme, themeStyles } = useTheme();

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={[styles.container,{ backgroundColor: themeStyles[theme].backgroundColor }]}>
      <TouchableOpacity onPress={goBack} style={styles.arrowview}>
        <Image source={icons.arrow} style={styles.arrowstyle}></Image>
      </TouchableOpacity>

      <Image source={icons.Contact} style={styles.imgbidsstyle}></Image>
      <Text style={[styles.bidstext,{color: themeStyles[theme].textColor}]}>{String.CONTACTUS}</Text>
      <Text style={[styles.istedbelowtext,{color: themeStyles[theme].textColor}]}>{String.istedbelow}</Text>
      <View style={styles.flexdracionrowview}>

      
        <TouchableOpacity>
        <LinearGradient
        colors={[
          '#ebf9ef',
          '#ebf9ef',
          '#d8f3df',
          '#c4edcf',
          '#c4edcf',
          '#c4edcf',
          '#c4edcf',
          '#89dc9f',
          
        

         ]}  style={styles.Contactview}>
         <TouchableOpacity style={styles.callview}>
          <Image source={icons.phonefill}></Image>
          </TouchableOpacity> 
        <Text style={styles.erbiltext}>075896142212(Erbil)</Text>
        <Text style={[styles.erbiltext,styles.erbiltext2]}>075896142212(Outside)</Text>
        </LinearGradient>
        </TouchableOpacity>

         <TouchableOpacity>
         <LinearGradient
        colors={[
          '#ebf9ef',
          '#ebf9ef',
          '#d8f3df',
          '#c4edcf',
          '#c4edcf',
          '#c4edcf',
          '#c4edcf',
          '#89dc9f',
          
        

         ]}  style={styles.Contactview}>
         <TouchableOpacity style={styles.callview}>
          <Image source={icons.mappin}></Image>
          
          </TouchableOpacity> 
        <Text style={styles.erbiltext3}>Erbil, New Erbil ,Next to Gasha Institute</Text>
        </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity>
        <LinearGradient
        colors={[
          '#ebf9ef',
          '#ebf9ef',
          '#d8f3df',
          '#c4edcf',
          '#c4edcf',
          '#c4edcf',
          '#c4edcf',
          '#89dc9f',
          
        

         ]}  style={[styles.Contactview,styles.Contactviewtwo]}>
         <TouchableOpacity style={styles.callview}>
          <Image source={icons.mailsendfill}></Image>
          </TouchableOpacity> 
        <Text style={styles.erbiltext3}>info@bestbid.tech</Text>
      </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.Contactview,styles.Contactviewtwo]}>
        <LinearGradient
        colors={[
          '#ebf9ef',
          '#ebf9ef',
          '#d8f3df',
          '#c4edcf',
          '#c4edcf',
          '#c4edcf',
          '#c4edcf',
          '#89dc9f',
          
        

         ]}  style={[styles.Contactview,styles.Contactviewtwo]}>
         <TouchableOpacity style={styles.callview}>
          <Image source={icons.best}></Image>
          </TouchableOpacity> 
        <Text style={styles.erbiltext3}>www.bestbid.tech</Text>
        </LinearGradient>
       </TouchableOpacity>
        
      </View>
      <View style={styles.flexdractionroesocail}>
        <TouchableOpacity>
          <Image source={icons.greenfb} style={styles.greebfbimg}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <ImageBackground source={icons.greebback}style={styles.greebfbimg3} >
           <Image source={icons.whatsapp} style={styles.greebfbimg2}></Image>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={icons.greencamera} style={styles.greebfbimg}></Image>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Contactus

