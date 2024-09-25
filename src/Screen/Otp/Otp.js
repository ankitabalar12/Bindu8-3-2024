import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'react-native'
import { icons } from '../../Helper/icons'
import { useNavigation } from '@react-navigation/native'
import { Image } from 'react-native'
import { String } from '../../Helper/string'
import { styles } from './styles'
import OTPTextInput from 'react-native-otp-textinput';
import GreenButton from '../../Componets/GreenButton/GreenButton'
import { ActivityIndicator } from 'react-native'

const Otp = () => {
    const navigation = useNavigation();
    const [otp, setOtp] = useState('')
    const [loading, setLoading] = useState(false)
    const [timer, setTimer] = useState(120); // initial timer value in seconds
    const [isResendDisabled, setIsResendDisabled] = useState(false);
    const goBack = () => {
        navigation.goBack();
    };
    const handleOTPChange = (code) => {
        setOtp(code);
    };
    const handleResendOTP = () => {
        // Implement your OTP resend logic here
        console.log('OTP resend requested');
    
        // Optionally, reset the timer and disable the resend button for a specific duration
        setTimer(120); // reset the timer
        setIsResendDisabled(true);
        setTimeout(() => setIsResendDisabled(false), 120000); // re-enable after 120 seconds
      };
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#ffff" />
            <ScrollView>
                <TouchableOpacity onPress={goBack} style={styles.leftarroeview}>
                    <Image source={icons.arrow} style={styles.arrowstyle}></Image>
                </TouchableOpacity>
                <Image source={icons.undrawationresvpt} style={styles.idpassimg}></Image>
                <Text style={styles.logintext}>{String.Verification}</Text>
                <View style={styles.flexdractionrowtext}>
                    <Text>{String.EnterOTp}</Text>
                    <Text style={styles.numberstyel}>+91-8976500001</Text>

                </View>
                <OTPTextInput
                    containerStyle={[styles.otpContainer]}
                    textInputStyle={[styles.otpInput, { color: '#000' }]}
                    handleTextChange={(code) => handleOTPChange(code)}
                    inputCount={4}
                    inactiveInputStyle={styles.otpInput2}
                    keyboardType="numeric"
                />
                <Text style={styles.otptime}>{`00:${timer} Sec`}</Text>
                <TouchableOpacity onPress={handleResendOTP}>
                    <Text style={styles.recevicode}>Don’t receive code ? <Text style={[styles.resendmsg,isResendDisabled && styles.disabledText]}>Re-send</Text></Text>
                </TouchableOpacity>

                {loading && <ActivityIndicator size="large" color="#006800" />}

                <GreenButton
                    title={String.Submit}
                    onPress={() => { navigation.navigate('Home') }}
                />
                <View style={styles.flrxrowtext}>
                    <Text style={styles.gobacktext}>{String.Goback}</Text>
                    <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
                        <Text style={[styles.PressHeretext]}>{String.PressHere}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default Otp

