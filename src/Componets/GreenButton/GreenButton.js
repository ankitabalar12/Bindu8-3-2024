import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const GreenButton = ({ title,onPress,updateapp ,loctionbutton}) => {

    return (
        <TouchableOpacity onPress={onPress} style={[styles.greenviewstyles,updateapp,loctionbutton]}>
            <Text style={styles.textstyle}>{title}</Text>
        </TouchableOpacity>
    )
}

export default GreenButton

const styles = StyleSheet.create({
    greenviewstyles: {
        height: 50,
        width: "85%",
        backgroundColor: "#35B257",

        justifyContent: "center",
        alignSelf: "center",
         borderRadius: 5, marginTop:'10%'
    },
    textstyle: {
        color: '#fff',
        fontFamily: 'Poppins-SemiBold',
        textAlign: "center"
    }
})