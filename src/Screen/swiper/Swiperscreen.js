import { Image, ImageBackground, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { styles } from './styles'
import Swiper from 'react-native-swiper';
import { String } from '../../Helper/string';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { icons } from '../../Helper/icons';
import CustomTextInput from '../../Componets/TextInput/CustomTextInput';
import LinearGradient from 'react-native-linear-gradient';

const Swiperscreen = () => {
    const navigation = useNavigation();
    const [hindi, setHindi] = useState()
    const [english, setEnglish] = useState()
    const [urdu, setUrdu] = useState()
    const [is_slectedLanguage, setIs_SelectedLanguage] = useState()
    const swiperRef = useRef(null);
    const goBack = () => {
        navigation.goBack();
    };
    const selctedLanguages = (id) => {
        setIs_SelectedLanguage(id)
    }
    const onPressNext = () => {
        if (swiperRef.current) {
            const currentIndex = swiperRef.current.state.index;
            const totalSlides = swiperRef.current.state.total;

            if (currentIndex === totalSlides - 1) {
                swiperRef.current.scrollBy(-currentIndex, true);
            } else {
                swiperRef.current.scrollBy(1);
            }
        }
    };
    return (
        <LinearGradient
      colors={[
        '#c4edcf',
        '#c4edcf',
        '#c4edcf',
        '#c4edcf',
        '#d8f3df',
        '#ebf9ef',
        '#ebf9ef',
        '#ebf9ef',
        '#ebf9ef',
        '#ebf9ef',
        '#ebf9ef',
        '#ebf9ef',
        '#ebf9ef',
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff',

      ]}
      style={styles.container}
    >
        {/* <View style={styles.container}> */}
            <Swiper
                loop={false}
                dot={<View style={styles.dotStyle} />}
                activeDot={<View style={styles.activeDotStyle} />}
                paginationStyle={{ height: "1%", alignSelf: "center" }}
                style={styles.buttonWrapperStyle}
                ref={(ref) => {
                    swiperRef.current = ref;
                }}
            // showsPagination={false}
            >
                <View style={styles.slide}>
                    <TouchableOpacity onPress={goBack} style={styles.leftarroeview}>
                        <Image source={icons.arrow} style={styles.arrowstyle}></Image>
                    </TouchableOpacity>
                   <Image source={icons.helloew} style={styles.Groupimg}></Image>
                  <Text style={styles.selectlantext}>{String.selectlanguage}</Text>
                    <Text style={styles.pleasetext}>{String.please}</Text>
                    {/* <CustomTextInput
                        placeholder="Hindi"
                        placeholderTextColor="#8391A1"
                        value={hindi}
                        onChangeText={(hindi) => setHindi(hindi)}
                    />
                    <CustomTextInput
                        placeholder="English"
                        placeholderTextColor="#8391A1"
                        value={english}
                        onChangeText={(english) => setEnglish(english)}
                    />
                    <CustomTextInput
                        placeholder="Urdu"
                        placeholderTextColor="#8391A1"
                        value={urdu}
                        onChangeText={(urdu) => setUrdu(urdu)}
                    /> */}
                    <TouchableOpacity onPress={() => {
                        selctedLanguages(1)
                    }} style={[styles.textinputview, { backgroundColor: is_slectedLanguage === 1 ? '#E6F2EA' : '#fff' }]}>
                        <Text style={styles.languageselect}>Hindi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        selctedLanguages(2)
                    }} style={[styles.textinputview, styles.selectlang, { backgroundColor: is_slectedLanguage === 2 ? '#E6F2EA' : '#fff' }]}>
                        <Text style={styles.languageselect}>English</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        selctedLanguages(3)
                    }} style={[styles.textinputview, styles.selectlang, { backgroundColor: is_slectedLanguage === 3 ? '#E6F2EA' : '#fff' }]}>
                        <Text style={styles.languageselect}>Urdu</Text>
                    </TouchableOpacity>
                    {/* <Image source={icons.rightarrow} style={styles.rightarrow}> </Image> */}
                    <View style={styles.positioview}>
                    {/* <View style={[styles.positionbottomview,{height:100, width:'100%', backgroundColor:'yellow'}]}> */}
                        <TouchableOpacity onPress={onPressNext}>
                            <ImageBackground source={icons.Vector} style={styles.Vectorimg}>
                                <Image style={styles.arrowright} source={icons.rightarrow}></Image>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                    </View>
                {/* </View> */}

                <View style={styles.slide}>

                    <TouchableOpacity onPress={goBack} style={styles.leftarroeview}>
                        <Image source={icons.arrow} style={styles.arrowstyle}></Image>
                    </TouchableOpacity>
                    <Text style={[styles.selectlantext, styles.selectlantextwo]}>{String.Sellingpro}</Text>
                    <Text style={[styles.pleasetext, styles.pleasetext]}>{String.welcometothe}</Text>
                    <Image source={icons.Illustrationigm} style={styles.Groupimg}></Image>
                    <View style={styles.flexrowtext}>
                     
                          <View style={[styles.positioview,
                            // styles.positioviewtwo
                            ]}>
                                    <View style={[styles.positionbottomviewtwo,]}>
                            <View style={styles.bottomend}>
                                <TouchableOpacity onPress={() => { navigation.navigate('Login') }} style={styles.skiptext}>
                                    <Text style={[styles.skiptextstyle]}>{String.skip}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={onPressNext}>
                                    <ImageBackground source={icons.Vector} style={[styles.Vectorimg,styles.Vectorimgtwodasd]}>
                                        <Image style={styles.arrowright} source={icons.rightarrow}></Image>
                                    </ImageBackground>
                                </TouchableOpacity>
                                    </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.slide}>
                    <TouchableOpacity onPress={goBack} style={styles.leftarroeview}>
                        <Image source={icons.arrow} style={styles.arrowstyle}></Image>
                    </TouchableOpacity>
                    <Text style={[styles.selectlantext, styles.selectlantextwo]}>{String.suitableprices}</Text>
                    <Text style={[styles.pleasetext, styles.selectlantexthree]}>{String.hereineasy}</Text>
                    <Image source={icons.informationimgs} style={styles.sutaibleprimg}></Image>
                    <View style={[styles.flexrowtext, styles.flexrowtextwo]}>
                       
                    <View style={[styles.positioview,
                        // styles.positioviewtwo
                        ]}>
                    <View style={[styles.positionbottomview,]}>
                            <View style={styles.bottomend}>
                                <TouchableOpacity onPress={() => { navigation.navigate('Login') }} style={styles.skiptext}>
                                    <Text style={styles.skiptextstyle}>{String.skip}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={onPressNext}>
                                    <ImageBackground source={icons.Vector} style={[styles.Vectorimg]}>
                                        <Image style={styles.arrowright} source={icons.rightarrow}></Image>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                            </View>
                        </View>
                    </View>

                </View>
                <View style={styles.slide3}>
                    <TouchableOpacity onPress={goBack} style={styles.leftarroeview}>
                        <Image source={icons.arrow} style={styles.arrowstyle}></Image>
                    </TouchableOpacity>
                    <Text style={[styles.selectlantext, styles.selectlantextwo,styles.selectlantextwo]}>{String.delivery}</Text>
                    <Text style={styles.pleasetext}>{String.weare}</Text>
                    <Image source={icons.delivery2} style={styles.Groupimg}></Image>
                    <View style={[styles.flexrowtext, styles.flexrowtextwo]}>
                        
                    <View style={[styles.positioview,styles.positioviewtwo,styles.positioviewthree]}>
                            <View style={styles.bottomend}>
                                <TouchableOpacity onPress={() => { navigation.navigate('Login') }} style={styles.skiptext}>
                                    <Text style={styles.skiptextstyle}>{String.skip}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                // onPress={onPressNext}
                                onPress={() => { navigation.navigate('Login') }}
                                >
                                    <ImageBackground source={icons.Vector} style={styles.Vectorimg}>
                                        <Image style={styles.arrowright} source={icons.rightarrow}></Image>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </View>
            </Swiper>
        {/* </View> */}
        </LinearGradient>
    )
}

export default Swiperscreen

