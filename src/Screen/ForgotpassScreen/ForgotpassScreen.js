import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { String } from '../../Helper/string'
import { icons } from '../../Helper/icons'
import GreenButton from '../../Componets/GreenButton/GreenButton'
import { useNavigation } from '@react-navigation/native'
import { ActivityIndicator } from 'react-native'

const ForgotpassScreen = () => {
    const [email, setEmail] = useState('');
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false)

    const goBack = () => {
        navigation.goBack();
      };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffff" />
      <ScrollView>
        <TouchableOpacity onPress={goBack} style={styles.leftarroeview}>
          <Image source={icons.arrow} style={styles.arrowstyle}></Image>
        </TouchableOpacity>
        <Image source={icons.loginimg} style={styles.Groupimg}></Image>
        <Text style={styles.logintext}>{String.ForgotPassword}</Text>
        {/* <Text style={styles.welcometext}>{String.welcomeback}</Text> */}
        <View style={styles.textniputview}>
          <View style={styles.flexdcration}>
            <Image source={icons.Phone} style={styles.Phonetyle}></Image>
            <View>
              <Text style={styles.textphone}>{String.email}</Text>
              <TextInput
                placeholder="Enter your Email"
                placeholderTextColor="#8391A1"
                value={email}
                onChangeText={(email) => setEmail(email)}
                style={styles.input}
              />
            </View>

          </View>
        </View>
        {loading && <ActivityIndicator size="large" color="#006800" />}

        <GreenButton
          title={String.save} />
        </ScrollView>
    </View>
  )
}

export default ForgotpassScreen

const styles = StyleSheet.create({
     container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    leftarroeview: {
        height: 25,
        width: 25,
        borderColor: "#E6E6E6",
        borderWidth: 1,
        marginLeft: "5%",
        marginTop: "5%",
        justifyContent: "center",
        borderRadius: 5
    },
    arrowstyle: {
        height: 15,
        width: 15,
        tintColor: '#35B257',
        alignSelf: "center"
    },
    Groupimg: {
        height: 160,
        width: 250,
        alignSelf: "center",
        marginTop: "15%",
    },
    logintext: {
        textAlign: "center",
        fontFamily: 'Poppins-SemiBold',
        fontSize: 17,
        marginTop: "5%",
        color: '#000'
    },
    welcometext: {
        marginTop: "2%",
        textAlign: "center",
        marginHorizontal: "5%",
        color: '#8B8B8B',
    },
    textniputview: {
        height: 75,
        width: "85%",
        backgroundColor: '#fff',
        borderRadius: 15,
        marginTop: '5%',
        marginBottom: '15%',
        borderColor: "#CCCBCB", borderWidth: 0.5,
        justifyContent: 'center',
        alignSelf: 'center',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,


    },
    flexdcration: {
        flexDirection: "row"
    },
    Phonetyle: {
        height: 25,
        width: 25, marginLeft: "5%", marginTop: "3%"
    },
    textphone: {
        color: '#000',
        marginLeft: "10%",
        marginBottom: '6%'
    },
    input: {
        marginTop: -15, marginLeft: "6%"
    },
    textniputviewtwo: {
        marginTop: -35
    },
    Shapestyle: {
        height: 19,
        width: 19,
        marginLeft: "5%", marginTop: "5%"
    },
})