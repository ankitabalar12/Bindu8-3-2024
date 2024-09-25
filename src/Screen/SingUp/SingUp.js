import React, { useEffect, useRef, useState } from 'react';
import { StatusBar, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView, BackHandler, ToastAndroid, TextInput, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook from React Navigation
import { styles } from './styles';
import { icons } from '../../Helper/icons';
import { String } from '../../Helper/string';
import GreenButton from '../../Componets/GreenButton/GreenButton';

const SingUp = () => {
    const navigation = useNavigation(); // Get navigation object
    const [Confirmpassword, setConfirmpassword] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [backPressed, setBackPressed] = useState(0);
    const webviewRef = useRef(null);
    const [loading, setLoading] = useState(false)
    const [isPasswordshow, setIsPasswordshow] = useState(false);
    const [isPasswordshow2, setIsPasswordshow2] = useState(false);


    const goBack = () => {
        navigation.goBack();
    };
    const signupdata = async () => {
        setLoading(true)
        const newErrors = {};
        if (!PhoneNumber.trim() || PhoneNumber.length !== 10 || isNaN(PhoneNumber)) {
            newErrors.PhoneNumber = 'Please enter a valid 10-digit phone number';
        }

        if (!password) {
            newErrors.password = 'Please enter password';
        }
        if (!Confirmpassword) {
            newErrors.Confirmpassword = 'Please enter Confirm password';
        }
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
           
            return;
        }
        setErrors({});
        navigation.navigate('IdandPasspot');
        setLoading(false)
    };
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#ffff" />
            <ScrollView>
                <TouchableOpacity onPress={goBack} style={styles.leftarroeview}>
                    <Image source={icons.arrow} style={styles.arrowstyle}></Image>
                </TouchableOpacity>
                <Image source={icons.undrawaccounte} style={styles.Groupimg}></Image>
                <Text style={styles.logintext}>{String.createaccount}</Text>
                <Text style={styles.welcometext}>{String.enteryoutinfo}</Text>
                <View style={styles.textniputview}>
                    <View style={styles.flexdcration}>
                        <Image source={icons.Phone} style={styles.Phonetyle}></Image>
                        <View>
                            <Text style={styles.textphone}>{String.PhoneNumber}</Text>
                            <TextInput
                                placeholder=" Your phone number"
                                placeholderTextColor="#8391A1"
                                value={PhoneNumber}
                                maxLength={10}
                                 keyboardType="numeric"
                                onChangeText={(PhoneNumber) => setPhoneNumber(PhoneNumber)}
                                style={styles.input}
                            />
                        </View>
                    </View>
                </View>
                {errors.PhoneNumber && <Text style={styles.error}>{errors.PhoneNumber}</Text>}

                <View style={[styles.textniputview, styles.textniputviewtwo]}>
                    <View style={styles.flexdcration}>
                        <Image source={icons.Shape} style={styles.Shapestyle}></Image>
                        <View>
                            <Text style={styles.textphone}>{String.password}</Text>
                            <TextInput
                                placeholder="Enter your password"
                                placeholderTextColor="#8391A1"
                                value={password}
                                // secureTextEntry={true}
                                secureTextEntry={!isPasswordshow}
                                onChangeText={(password) => setPassword(password)}
                                style={styles.input2}
                            />
                        </View>
                        <TouchableOpacity onPress={() => setIsPasswordshow(!isPasswordshow)} style={styles.passwodrshow}>
                            <Image source={isPasswordshow ? icons.Eye : icons.closeeyes} style={styles.password}></Image>
                        </TouchableOpacity>

                    </View>
                </View>
                {errors.password && <Text style={styles.error}>{errors.password}</Text>}

                <View style={[styles.textniputview, styles.textniputviewtwo]}>
                    <View style={styles.flexdcration}>
                        <Image source={icons.Shape} style={styles.Shapestyle}></Image>
                        <View>
                            <Text style={styles.textphone}>{String.ConfirmPassword}</Text>
                            <TextInput
                                placeholder="Enter your Confirm"
                                placeholderTextColor="#8391A1"
                                value={Confirmpassword}
                                secureTextEntry={!isPasswordshow2}
                                // secureTextEntry={true}
                                onChangeText={(Confirmpassword) => setConfirmpassword(Confirmpassword)}
                                style={styles.input2}
                            />
                        </View>
                        <TouchableOpacity onPress={() => setIsPasswordshow2(!isPasswordshow2)} style={styles.passwodrshow}>
                            <Image source={isPasswordshow2 ? icons.Eye : icons.closeeyes} style={styles.password}></Image>
                        </TouchableOpacity>

                    </View>
                </View>
                {errors.Confirmpassword && <Text style={styles.error}>{errors.Confirmpassword}</Text>}
                {/* {loading && <ActivityIndicator size="large" color="#006800" />} */}

                <GreenButton
                    title={String.Next}
                    onPress={signupdata} />
<View style={styles.marginbottom}></View>
            </ScrollView>
        </View>
    );
};

export default SingUp;