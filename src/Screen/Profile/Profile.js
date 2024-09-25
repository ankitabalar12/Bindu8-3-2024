import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { Image } from 'react-native'
import { icons } from '../../Helper/icons'
import { String } from '../../Helper/string'
import { useNavigation } from '@react-navigation/native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import CustomTextInput from '../../Componets/TextInput/CustomTextInput'
import { Dropdown } from 'react-native-element-dropdown';
import { cities } from '../cities'
import { languages } from '../Language'
import { ScrollView } from 'react-native'
import GreenButton from '../../Componets/GreenButton/GreenButton'
import ReactNativeModal from 'react-native-modal'
import { useTheme } from '../../Componets/ThemeContext'


const Profile = () => {
    const navigation = useNavigation();
    const [imageUri, setImageUri] = useState(null);
    const [fullName, setFullName] = useState();
    const [Selectetlocation, setSelectedLoaction] = useState();
    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
    const [modalVisible, setModalVisible] = useState()
    const [is_selectdelete, setIs_SelectDelete] = useState()
    const { theme, themeStyles, themeStylestext,  } = useTheme();

    const goBack = () => {
        navigation.goBack();
    };
    const toggleModal = () => {
        setModalVisible(!modalVisible)
    }
    const Changecity = (value) => {
        setSelectedLoaction(value);
    };
    const ChangeLanguage = (value) => {
        setSelectedLanguage(value);
    };
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
    };
const deleteitem  =(id)=>{
    setIs_SelectDelete(id)
}
    const selectImage = () => {
        Alert.alert('Alert', 'Choose an option', [
            {
                text: 'Back',
                onPress: () => { },
            },
            {
                text: 'Camera',
                onPress: () => openCamera(),
            },
            {
                text: 'Library',
                onPress: () => openLibrary(),
            },
        ]);
    };
    const openCamera = () => {
        const options = {
            mediaType: 'photo',
            saveToPhotos: true,
            includeBase64: false,
        };

        launchCamera(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.log('ImagePicker Error: ', response.errorCode);
            } else {
                setImageUri(response.assets[0].uri);
            }
        });
    };

    const openLibrary = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.log('ImagePicker Error: ', response.errorCode);
            } else {
                setImageUri(response.assets[0].uri);
            }
        });
    };

    return (
        <View style={[styles.container,{ backgroundColor: themeStyles[theme].backgroundColor }]}>
            <ScrollView>
                <View style={styles.flexrowstyle}>
                    <TouchableOpacity onPress={goBack} style={styles.arrowview}>
                        <Image source={icons.arrow} style={styles.arrowstyle}></Image>
                    </TouchableOpacity>
                    <Text style={styles.bidstextstyle}>{String.profile}</Text>
                </View>
                <TouchableOpacity>
                    {imageUri ? (
                        <Image source={{ uri: imageUri }} style={styles.profileimgstyle}></Image>
                    ) : (
                        <Image source={icons.profileimg} style={styles.profileimgstyle}></Image>
                    )

                    }
                </TouchableOpacity>
                <TouchableOpacity onPress={selectImage}>
                    <Image source={icons.solarcamera} style={[styles.solarcamerainmg,{tintColor:themeStyles[theme].iconColor}]}></Image>
                </TouchableOpacity>

                <Text style={[styles.textinputtext,{color: themeStyles[theme].textColor}]}>{String.FullName}</Text>
                <View style={styles.textinputviewpro}>
                    <TextInput
                        placeholder="Full name"
                        placeholderTextColor="#8391A1"
                        value={fullName}
                        onChangeText={(fullName) => setFullName(fullName)}
                        style={styles.texinput}
                    />
                </View>
                <Text style={[styles.textinputtext, styles.textinputtextwo,{color: themeStyles[theme].textColor}]}>{String.ChangeLocation}</Text>
                <View style={styles.dropdownview}>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholder}
                        selectedTextStyle={styles.selectedText}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={cities}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Select item"
                        searchPlaceholder="Search..."
                        value={Selectetlocation}
                        onChange={item => {
                            Changecity(item.value);
                        }} />
                </View>
                <Text style={[styles.textinputtext, styles.textinputtextwo,{color: themeStyles[theme].textColor}]}>{String.Language}</Text>
                <View style={[styles.dropdownview, styles.dropdownviewtwo]}>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholder}
                        selectedTextStyle={styles.selectedText}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={languages}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Select item"
                        searchPlaceholder="Search..."
                        value={selectedLanguage}
                        onChange={item => {
                            ChangeLanguage(item.value);
                        }} />

                </View>
                <Text style={[styles.textinputtext,{color: themeStyles[theme].textColor}]}>{String.Password}</Text>
                <View style={styles.textinputviewpro}>
                    <View style={styles.flexroewpassimfflex}>
                        <TextInput
                            placeholder="Password"
                            placeholderTextColor="#8391A1"
                            value={password}
                            onChangeText={(password) => setPassword(password)}
                            secureTextEntry={!isPasswordVisible}
                            style={styles.texinput}
                        />
                        <TouchableOpacity onPress={togglePasswordVisibility}>
                            <Image source={isPasswordVisible ? icons.show : icons.hidepass} style={styles.hidepass}></Image>
                        </TouchableOpacity>

                    </View>

                </View>
                <Text style={[styles.textinputtext,{color: themeStyles[theme].textColor}]}>{String.ConfirmPassword}</Text>
                <View style={styles.textinputviewpro}>
                    <View style={styles.flexroewpassimfflex}>
                        <TextInput
                            placeholder="ConfirmPassword"
                            placeholderTextColor="#8391A1"
                            value={confirmPassword}
                            secureTextEntry={!isConfirmPasswordVisible}
                            onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
                            style={styles.texinput}
                        />
                        <TouchableOpacity onPress={toggleConfirmPasswordVisibility}>
                            <Image source={isConfirmPasswordVisible ? icons.show : icons.hidepass} style={styles.hidepass}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity onPress={() => {
                    setModalVisible(true)
                }} style={styles.deletaccountview}>
                    <Text style={styles.textdelete}>{String.DeleteAccount}</Text>
                </TouchableOpacity>
                <GreenButton
                    title={String.savechange} />
            </ScrollView>
            <ReactNativeModal
                isVisible={modalVisible}
                onBackdropPress={toggleModal}
                transparent={true}
                backdropColor={'rgba(0, 0, 0, 0.9)'}
                style={{ margin: 0, bottom: 0 }}

            >
                <View style={styles.modelview}>
                    <View style={styles.greebviewdelete}>
                    <View style={styles.triangle} />
                        <Image source={icons.deleteb} style={styles.deleteimg}></Image>
                    </View>
                    <Text style={styles.deleteob}>{String.deleteobject}</Text>
                    <Text style={styles.areyousour}>{String.Areyousure}</Text>
                    <View style={styles.deletebutton}>
                        <TouchableOpacity  onPress={()=>{
                            deleteitem(1);
                            setModalVisible(false)
                        }} style={[styles.deleteviewbutton,{backgroundColor:is_selectdelete === 1 ? '#35B257' : '#fff', borderColor:is_selectdelete === 1 ? "#35B257" : '#ccc'}]}>
                            <Text style={[styles.denitext,{color:is_selectdelete === 1 ? '#fff' : '#000'}]}>{String.deni}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{
                            deleteitem(2);
                            setModalVisible(false)
                        }}  style={[styles.deleteviewbutton,{backgroundColor:is_selectdelete === 2 ? '#35B257' : '#fff',borderColor:is_selectdelete === 2 ? "#35B257" : '#ccc'}]}>
                            <Text style={[styles.denitext,{color:is_selectdelete === 2 ? '#fff' : '#000'}]}>{String.delete}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
              
            </ReactNativeModal>
        </View>
    )
}

export default Profile

