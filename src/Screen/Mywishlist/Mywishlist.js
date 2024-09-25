import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { String } from '../../Helper/string';
import { Image } from 'react-native';
import { icons } from '../../Helper/icons';
import { styles } from './styles';
import { useTheme } from '../../Componets/ThemeContext';

const Mywishlist = () => {
  const navigation = useNavigation();
  const [isLiked, setIsLiked] = useState(false);
  const { theme, themeStyles, themeStylestext, updateThemeForAllScreens } = useTheme();

  const goBack = () => {
    navigation.goBack();
  };
  const handlePress = () => {
    setIsLiked(!isLiked);
  };
  return (
    <View style={[styles.container, { backgroundColor: themeStyles[theme].backgroundColor }]}>
      <ScrollView>
        <View style={styles.flexrowstyle}>
          <TouchableOpacity onPress={goBack} style={styles.arrowview}>
            <Image source={icons.arrow} style={styles.arrowstyle}></Image>
          </TouchableOpacity>
          <Text style={[styles.bidstextstyle,{color: themeStyles[theme].textColor}]}>{String.MYWISHLIST}</Text>
        </View>
        <View style={styles.flexdractionbids}>
          <View style={styles.jblviewstyle}>
            <TouchableOpacity onPress={handlePress} style={styles.likesidestyle}>
              {isLiked ? (
                <Image style={styles.likeimgstyle} source={icons.heartlike}></Image>
              ) : (
                <Image style={styles.likeimgstyle} source={icons.liketwo}></Image>

              )}
            </TouchableOpacity>
            <Image source={icons.headphonesecond} style={styles.heardphoneimg}></Image>
            <Text style={styles.jbltext}>{String.JBL}</Text>
            <Text style={styles.wirlesstext}>{String.Wireless}</Text>
            <View style={styles.timeviewflex}>
              <View>
                <View style={styles.timeview}>
                  <Text style={styles.timetext}>04</Text>
                </View>
                <Text style={styles.houtext}>Hour</Text>
              </View>
              <View>
                <View style={styles.timeview}>
                  <Text style={styles.timetext}>05</Text>
                </View>
                <Text style={styles.houtext}>Min</Text>
              </View>
              <View>
                <View style={styles.timeview}>
                  <Text style={styles.timetext}>54</Text>
                </View>
                <Text style={styles.houtext}>Sec</Text>
              </View>
            </View>
            <Text style={styles.usdtext}>{String.USD}</Text>
            <TouchableOpacity onPress={() => { navigation.navigate('Order') }} style={styles.winingbutton}>
              <Text style={styles.winingtext}>{String.Wining}</Text>
            </TouchableOpacity>
            <View style={styles.marbottomsd}/>
          </View>
          <View style={styles.jblviewstyle}>
          <TouchableOpacity onPress={handlePress} style={styles.likesidestyle}>
              {isLiked ? (
                <Image style={styles.likeimgstyle} source={icons.heartlike}></Image>
              ) : (
                <Image style={styles.likeimgstyle} source={icons.liketwo}></Image>

              )}
            </TouchableOpacity>
            <Image source={icons.watch} style={styles.watchimg}></Image>
            <Text style={styles.jbltext}>{String.Apple}</Text>
            <Text style={styles.wirlesstext}>{String.Wireless}</Text>
            <View style={styles.timeviewflex}>
              <View>
                <View style={styles.timeview}>
                  <Text style={styles.timetext}>04</Text>
                </View>
                <Text style={styles.houtext}>Hour</Text>
              </View>
              <View>
                <View style={styles.timeview}>
                  <Text style={styles.timetext}>05</Text>
                </View>
                <Text style={styles.houtext}>Min</Text>
              </View>
              <View>
                <View style={styles.timeview}>
                  <Text style={styles.timetext}>54</Text>
                </View>
                <Text style={styles.houtext}>Sec</Text>
              </View>
            </View>
            <Text style={styles.usdtext}>{String.USD}</Text>
            <TouchableOpacity onPress={() => { navigation.navigate('Order') }} style={styles.winingbutton}>
              <Text style={styles.winingtext}>{String.Wining}</Text>
            </TouchableOpacity>
            <View style={styles.marbottomsd}/>
          </View>
          <View style={styles.jblviewstyle}>
          <TouchableOpacity onPress={handlePress} style={styles.likesidestyle}>
              {isLiked ? (
                <Image style={styles.likeimgstyle} source={icons.heartlike}></Image>
              ) : (
                <Image style={styles.likeimgstyle} source={icons.liketwo}></Image>

              )}
            </TouchableOpacity>
            <Image source={icons.usb} style={styles.usbimg}></Image>
            <Text style={styles.jbltext}>{String.JBL}</Text>
            <Text style={styles.wirlesstext}>{String.Wireless}</Text>
            <View style={styles.timeviewflex}>
              <View>
                <View style={styles.timeview}>
                  <Text style={styles.timetext}>04</Text>
                </View>
                <Text style={styles.houtext}>Hour</Text>
              </View>
              <View>
                <View style={styles.timeview}>
                  <Text style={styles.timetext}>05</Text>
                </View>
                <Text style={styles.houtext}>Min</Text>
              </View>
              <View>
                <View style={styles.timeview}>
                  <Text style={styles.timetext}>54</Text>
                </View>
                <Text style={styles.houtext}>Sec</Text>
              </View>
            </View>
            <Text style={styles.usdtext}>{String.USD}</Text>
            <TouchableOpacity onPress={() => { navigation.navigate('Order') }} style={styles.winingbutton}>
              <Text style={styles.winingtext}>{String.Wining}</Text>
            </TouchableOpacity>
            <View style={styles.marbottomsd}/>
          </View>
          <View style={styles.jblviewstyle}>
          <TouchableOpacity onPress={handlePress} style={styles.likesidestyle}>
              {isLiked ? (
                <Image style={styles.likeimgstyle} source={icons.heartlike}></Image>
              ) : (
                <Image style={styles.likeimgstyle} source={icons.liketwo}></Image>

              )}
            </TouchableOpacity>
            <Image source={icons.LED} style={styles.heardphoneimg}></Image>
            <Text style={styles.jbltext}>{String.JBL}</Text>
            <Text style={styles.wirlesstext}>{String.Wireless}</Text>
            <View style={styles.timeviewflex}>
              <View>
                <View style={styles.timeview}>
                  <Text style={styles.timetext}>04</Text>
                </View>
                <Text style={styles.houtext}>Hour</Text>
              </View>
              <View>
                <View style={styles.timeview}>
                  <Text style={styles.timetext}>05</Text>
                </View>
                <Text style={styles.houtext}>Min</Text>
              </View>
              <View>
                <View style={styles.timeview}>
                  <Text style={styles.timetext}>54</Text>
                </View>
                <Text style={styles.houtext}>Sec</Text>
              </View>
            </View>
            <Text style={styles.usdtext}>{String.USD}</Text>
            <TouchableOpacity onPress={() => { navigation.navigate('Order') }} style={styles.winingbutton}>
              <Text style={styles.winingtext}>{String.Wining}</Text>
            </TouchableOpacity>
            <View style={styles.marbottomsd}/>
          </View>
          <View style={styles.jblviewstyle}>
          <TouchableOpacity onPress={handlePress} style={styles.likesidestyle}>
              {isLiked ? (
                <Image style={styles.likeimgstyle} source={icons.heartlike}></Image>
              ) : (
                <Image style={styles.likeimgstyle} source={icons.liketwo}></Image>

              )}
            </TouchableOpacity>
            <Image source={icons.headphonesecond} style={styles.heardphoneimg}></Image>
            <Text style={styles.jbltext}>{String.JBL}</Text>
            <Text style={styles.wirlesstext}>{String.Wireless}</Text>
            <View style={styles.timeviewflex}>
              <View>
                <View style={styles.timeview}>
                  <Text style={styles.timetext}>04</Text>
                </View>
                <Text style={styles.houtext}>Hour</Text>
              </View>
              <View>
                <View style={styles.timeview}>
                  <Text style={styles.timetext}>05</Text>
                </View>
                <Text style={styles.houtext}>Min</Text>
              </View>
              <View>
                <View style={styles.timeview}>
                  <Text style={styles.timetext}>54</Text>
                </View>
                <Text style={styles.houtext}>Sec</Text>
              </View>
            </View>
            <Text style={styles.usdtext}>{String.USD}</Text>
            <TouchableOpacity onPress={() => { navigation.navigate('Order') }} style={styles.winingbutton}>
              <Text style={styles.winingtext}>{String.Wining}</Text>
            </TouchableOpacity>
            <View style={styles.marbottomsd}/>
          </View>
          <View style={styles.jblviewstyle}>

          </View>
        </View>
        <View style={styles.marbottom} />
      </ScrollView>
    </View>
  )
}

export default Mywishlist
