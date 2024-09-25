import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { icons } from '../../Helper/icons';
import { Image } from 'react-native';
import { String } from '../../Helper/string';
import { styles } from './styles';
import { useTheme } from '../../Componets/ThemeContext';
import { ImageBackground } from 'react-native';

const Transactions = () => {
  const navigation = useNavigation();

  const { theme, themeStyles, themeStylestext,  } = useTheme();

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={[styles.container,{ backgroundColor: themeStyles[theme].backgroundColor }]}>
      <ScrollView>
      <View style={styles.flexrowstyle}>
        <TouchableOpacity onPress={goBack} style={styles.arrowview}>
          <Image source={icons.arrow} style={styles.arrowstyle}></Image>
        </TouchableOpacity>
        <Text style={[styles.bidstextstyle,{color: themeStyles[theme].textColor}]}>{String.TRANSACTIONS}</Text>

      </View>
      <View style={styles.lightgreenview}>
        <View style={styles.flexrowview}>
          <View>
            <Text style={styles.currentbal}>{String.CurrentBalance}</Text>
            <Text style={styles.pricestext}>$143,421.20</Text>
          </View>
          {/* <Image source={icons.money} style={styles.moneyimg}></Image> */}
          <ImageBackground source={icons.imagesback} style={styles.moneyimg}>
            <Image source={icons.coinsbag} style={styles.centerimageview}></Image>
          </ImageBackground>
        </View>
      </View>
      <View style={styles.oderview}>
        {/* view one */}
        <View style={styles.datetext}>
          <Text>2023-04-09 - 17:51</Text>
          <TouchableOpacity style={styles.odertext}>
            <Text style={styles.ordertextr}>{String.Order}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.datetext2}>
          <View>
            <Text style={styles.pricetext}>{String.price}      <Text style={styles.usdtext}>$ 8.07 USD</Text></Text>
            <Text style={styles.pricetext}>{String.Totalpay}       <Text style={styles.usdtext2}>$ 8.07 USD</Text></Text>
          </View>
          <TouchableOpacity onPress={() => { navigation.navigate('Order') }} style={styles.arrowside}>
            <Image source={icons.rightarrowtwo} style={styles.rightarrow}></Image>
          </TouchableOpacity>

        </View>
        <View style={styles.viewline} />
        {/* view two */}
        <View style={styles.datetext}>
          <Text>2023-04-09 - 17:51</Text>
          <TouchableOpacity style={styles.odertext}>
            <Text style={styles.ordertextr}>{String.Order}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.datetext2}>
          <View>
            <Text style={styles.pricetext}>{String.price}      <Text style={styles.usdtext}>$ 8.07 USD</Text></Text>
            <Text style={styles.pricetext}>{String.Totalpay}       <Text style={styles.usdtext2}>$ 8.07 USD</Text></Text>
          </View>
          <TouchableOpacity onPress={() => { navigation.navigate('Order') }} style={styles.arrowside}>
            <Image source={icons.rightarrowtwo} style={styles.rightarrow}></Image>
          </TouchableOpacity>

        </View>
        <View style={styles.viewline} />
        <View style={styles.datetext}>
          <Text>2023-04-09 - 17:51</Text>
          <TouchableOpacity style={styles.odertext}>
            <Text style={styles.ordertextr}>{String.Order}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.datetext2}>
          <View>
            <Text style={styles.pricetext}>{String.price}      <Text style={styles.usdtext}>$ 8.07 USD</Text></Text>
            <Text style={styles.pricetext}>{String.Totalpay}       <Text style={styles.usdtext2}>$ 8.07 USD</Text></Text>
          </View>
          <TouchableOpacity onPress={() => { navigation.navigate('Order') }} style={styles.arrowside}>
            <Image source={icons.rightarrowtwo} style={styles.rightarrow}></Image>
          </TouchableOpacity>

        </View>
        <View style={styles.viewline} />
        <View style={styles.datetext}>
          <Text>2023-04-09 - 17:51</Text>
          <TouchableOpacity style={styles.odertext}>
            <Text style={styles.ordertextr}>{String.Order}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.datetext2}>
          <View>
            <Text style={styles.pricetext}>{String.price}      <Text style={styles.usdtext}>$ 8.07 USD</Text></Text>
            <Text style={styles.pricetext}>{String.Totalpay}       <Text style={styles.usdtext2}>$ 8.07 USD</Text></Text>
          </View>
          <TouchableOpacity onPress={() => { navigation.navigate('Order') }} style={styles.arrowside}>
            <Image source={icons.rightarrowtwo} style={styles.rightarrow}></Image>
          </TouchableOpacity>

        </View>
        <View style={styles.viewline} />
        <View style={styles.datetext}>
          <Text>2023-04-09 - 17:51</Text>
          <TouchableOpacity style={styles.odertext}>
            <Text style={styles.ordertextr}>{String.Order}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.datetext2}>
          <View>
            <Text style={styles.pricetext}>{String.price}      <Text style={styles.usdtext}>$ 8.07 USD</Text></Text>
            <Text style={styles.pricetext}>{String.Totalpay}       <Text style={styles.usdtext2}>$ 8.07 USD</Text></Text>
          </View>
          <TouchableOpacity onPress={() => { navigation.navigate('Order') }} style={styles.arrowside}>
            <Image source={icons.rightarrowtwo} style={styles.rightarrow}></Image>
          </TouchableOpacity>

        </View>
        <View style={styles.viewline} />
      </View>
      <View style={styles.marbottomview}></View>
</ScrollView>
    </View>
  )
}

export default Transactions

