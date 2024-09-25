import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { icons } from '../../Helper/icons'
import { String } from '../../Helper/string'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from './styles'
import { useTheme } from '../../Componets/ThemeContext'

const Wining = () => {
  const navigation = useNavigation();
  const { theme, themeStyles } = useTheme();


  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={[styles.container, { backgroundColor: themeStyles[theme].backgroundColor }]}>
      <ScrollView>
        <View style={styles.flexrowstyle}>
          <TouchableOpacity onPress={goBack} style={styles.arrowview}>
            <Image source={icons.arrow} style={styles.arrowstyle}></Image>
          </TouchableOpacity>
          <Text style={[styles.bidstextstyle, { color: themeStyles[theme].textColor }]}>{String.winninghistory}</Text>

        </View>
        <View style={styles.winingflexrow}>
          <View style={styles.winingview}>
            <Image source={icons.doll} style={styles.dollstyle}></Image>
            <Text style={styles.winingtextstyle}>{String.winingtext}</Text>
            <Text style={styles.usdtextstyle}>$7 USD</Text>
            <Text style={styles.timetextstyle}>2023-04-06 - 23:42</Text>
            <TouchableOpacity>
            <Text style={styles.Deliveredstyel}>Delivered</Text>
            </TouchableOpacity>
            <View style={styles.marbottomview} />
          </View>

          <View style={styles.winingview}>
            <Image source={icons.candal} style={styles.dollstyle}></Image>
            <Text style={styles.winingtextstyle}>{String.winingtext}</Text>
            <Text style={styles.usdtextstyle}>$7 USD</Text>
            <Text style={styles.timetextstyle}>2023-04-06 - 23:42</Text>
            <TouchableOpacity>
            <Text style={styles.Deliveredstyel}>Delivered</Text>
            </TouchableOpacity>
            <View style={styles.marbottomview} />

          </View>

          <View style={styles.winingview}>
            <Image source={icons.candal} style={styles.dollstyle}></Image>
            <Text style={styles.winingtextstyle}>{String.winingtext}</Text>
            <Text style={styles.usdtextstyle}>$7 USD</Text>
            <Text style={styles.timetextstyle}>2023-04-06 - 23:42</Text>
            <TouchableOpacity>
            <Text style={styles.Deliveredstyel}>Delivered</Text>
            </TouchableOpacity>
            <View style={styles.marbottomview} />

          </View>

          <View style={styles.winingview}>
            <Image source={icons.doll} style={styles.dollstyle}></Image>
            <Text style={styles.winingtextstyle}>{String.winingtext}</Text>
            <Text style={styles.usdtextstyle}>$7 USD</Text>
            <Text style={styles.timetextstyle}>2023-04-06 - 23:42</Text>
            <TouchableOpacity>
            <Text style={styles.Deliveredstyel}>Delivered</Text>
            </TouchableOpacity>
            <View style={styles.marbottomview} />

          </View>

          <View style={styles.winingview}>
            <Image source={icons.doll} style={styles.dollstyle}></Image>
            <Text style={styles.winingtextstyle}>{String.winingtext}</Text>
            <Text style={styles.usdtextstyle}>$7 USD</Text>
            <Text style={styles.timetextstyle}>2023-04-06 - 23:42</Text>
            <TouchableOpacity>
            <Text style={styles.Deliveredstyel}>Delivered</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.winingview}>
            <Image source={icons.candal} style={styles.dollstyle}></Image>
            <Text style={styles.winingtextstyle}>{String.winingtext}</Text>
            <Text style={styles.usdtextstyle}>$7 USD</Text>
            <Text style={styles.timetextstyle}>2023-04-06 - 23:42</Text>
            <TouchableOpacity>
            <Text style={styles.Deliveredstyel}>Delivered</Text>
            </TouchableOpacity>

          </View>
        </View>
        <View style={styles.marbottomviewtwo}></View>
      </ScrollView>
    </View>
  )
}

export default Wining

