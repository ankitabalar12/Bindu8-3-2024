
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';

const CustomTextInput = ({ styviewmar,textAlignVertical,placeholder, maxLength,styleview,styleviewdescrip,onChangeText,value, secureTextEntry,placeholderTextColor,textviewstyle ,
    Profileviewstyle,textinputviewto,addtextviewstyle,drescriviewstyle,busniessviewstyle,keyboardType,stylesprofileview}) => {
    //    const[selecttext, setSelexteTexe] = useState('') 
    //     const selcttextinput =(id)=>{
    //         setSelexteTexe(id)
    //     }
 return (
        <View style={styles.inputContainer}>
            <View style={[styles.textinputview,styviewmar,stylesprofileview,styleviewdescrip,styleview,textviewstyle,busniessviewstyle,Profileviewstyle,textinputviewto,addtextviewstyle, drescriviewstyle]}>
             
                    <TextInput
                        placeholder={placeholder}
                        value={value}
                        placeholderTextColor={placeholderTextColor}
                        onChangeText={onChangeText}
                        keyboardType={keyboardType}
                        secureTextEntry={secureTextEntry}
                        maxLength={maxLength}
                        style={styles.input}
                        textAlignVertical={textAlignVertical}
                    />
                   
                </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 10,
    },
    textinputview: {
        height: 50,
        width: '85%',
        backgroundColor: '#fff',
        borderRadius: 15,
        // marginTop: 20,
       borderColor:"#CCCBCB", borderWidth:0.5,
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
    input:{
        marginLeft:"5%",
        marginTop:"2%"
    }
});

export default CustomTextInput;
