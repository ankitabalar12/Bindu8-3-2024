import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '../../Componets/ThemeContext';
import { styles } from './styles';
import { Image } from 'react-native';
import { icons } from '../../Helper/icons';
import { String } from '../../Helper/string';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native';

const Uploadimags = () => {
    const { theme, themeStyles, themeStylestext, } = useTheme();
    const navigation = useNavigation();
    const [imageUri, setImageUri] = useState(null);
    const goBack = () => {
        navigation.goBack();
    };
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
        <View style={[styles.container, { backgroundColor: themeStyles[theme].backgroundColor }]}>
            <View style={styles.flexrowstyle}>
                <TouchableOpacity onPress={goBack} style={styles.arrowview}>
                    <Image source={icons.arrow} style={styles.arrowstyle}></Image>
                </TouchableOpacity>
                {/* <Text style={[styles.bidstextstyle,{color: themeStyles[theme].textColor}]}>{String.winninghistory}</Text> */}

            </View>
            <TouchableOpacity>
                {imageUri ? (
                    <Image source={{ uri: imageUri }} style={styles.profileimgstyle2}></Image>
                ) : (
                    <Image source={icons.profileimg} style={styles.profileimgstyle}></Image>
                )

                }
                {/* <Image source={icons.profileimg} style={styles.profileimgstyle}></Image> */}
            </TouchableOpacity>
            <TouchableOpacity onPress={selectImage}>
                <Image source={icons.solarcamera} style={[styles.solarcamerainmg, { tintColor: themeStyles[theme].iconColor }]}></Image>
            </TouchableOpacity>
            <Text style={[styles.bidstextstyle, { color: themeStyles[theme].textColor }]}>UPLOAD IMAGE</Text>
            <Text style={[styles.plztext, { color: themeStyles[theme].textColor }]}>Please provide us your perfect image</Text>
            <View style={[styles.positioview, styles.positioviewtwo]}>
                <View style={styles.bottomend}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Profile') }} style={styles.skiptext}>
                        <Text style={styles.skiptextstyle}>{String.skip}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    // onPress={onPressNext}
                    >
                        <TouchableOpacity onPress={() => { navigation.navigate('Profile') }}>
                            <ImageBackground source={icons.Vector} style={styles.Vectorimg}>
                                <Image style={styles.arrowright} source={icons.rightarrow}></Image>
                            </ImageBackground>
                        </TouchableOpacity>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Uploadimags

