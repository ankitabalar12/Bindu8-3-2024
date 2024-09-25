import React, { useEffect, useRef, useState } from 'react';
import { StatusBar, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView, BackHandler, ToastAndroid, TextInput, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook from React Navigation
import { styles } from './styles';
import { icons } from '../../Helper/icons';
import { String } from '../../Helper/string';
import GreenButton from '../../Componets/GreenButton/GreenButton';

const LoginScreen = () => {
  const navigation = useNavigation(); // Get navigation object
  const [name, setName] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [backPressed, setBackPressed] = useState(0);
  const [loading, setLoading] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const webviewRef = useRef(null);

  const goBack = () => {
    navigation.goBack();
  };
  const logindata = async () => {
    // setLoading(true)
    const newErrors = {};
    if (!PhoneNumber.trim() || PhoneNumber.length !== 10 || isNaN(PhoneNumber)) {
      newErrors.PhoneNumber = 'Please enter a valid 10-digit phone number';
    }

    if (!password) {
      newErrors.password = 'Please enter password';
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      Alert.alert(
        'Invalid Input',
        'Please enter valid phone number and password',
        [{ text: 'OK' }]
      );
      return;
    }
  
    setErrors({});
    // setLoading(false)
    navigation.navigate('Home');
};
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffff" />
      <ScrollView>
        <TouchableOpacity onPress={goBack} style={styles.leftarroeview}>
          <Image source={icons.arrow} style={styles.arrowstyle}></Image>
        </TouchableOpacity>
        <Image source={icons.undrawlogin} style={styles.Groupimg}></Image>
        <Text style={styles.logintext}>{String.login}</Text>
        <Text style={styles.welcometext}>{String.welcomeback}</Text>
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
                secureTextEntry={!isPasswordVisible}
                onChangeText={(password) => setPassword(password)}
                style={styles.input}
              />
            </View>
            <TouchableOpacity  onPress={() => setIsPasswordVisible(!isPasswordVisible)} style={styles.passwodrshow}>
              <Image source={isPasswordVisible ? icons.Eye : icons.closeeyes} style={styles.password}></Image>
              {/* <Image source={icons.closeeyes} style={styles.password}></Image> */}
              
            </TouchableOpacity>

          </View>
        </View>
        {errors.password && <Text style={styles.error}>{errors.password}</Text>} 
        {/* {loading && <ActivityIndicator size="large" color="#006800" />} */}

        <GreenButton
          title={String.login} 
          
          onPress={logindata}/>
        <TouchableOpacity onPress={() => { navigation.navigate('ForgotpassScreen') }}>
          <Text style={styles.forgotpass}>{String.ForgotPassword}</Text>
        </TouchableOpacity>
        <View style={styles.flexdractionrow}>
          <Text style={styles.haveacco}>{String.haveanaccount}</Text>
          <TouchableOpacity onPress={() => { navigation.navigate('SingUp') }}>
            <Text style={styles.haveaccocre}>{String.CreateNow}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;