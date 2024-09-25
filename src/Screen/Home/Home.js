import { Dimensions, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { styles } from './styles'
import { Image } from 'react-native'
import { icons } from '../../Helper/icons'
import Swiper from 'react-native-swiper'
import { String } from '../../Helper/string'
import ReactNativeModal from 'react-native-modal'
import { useTheme } from '../../Componets/ThemeContext'
import { Animated } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const { width } = Dimensions.get('window');
const Home = ({ navigation, onSearch, maxRating = 5, onRatingChange, itemId }) => {
  // const { theme, themeStyles } = useTheme();
  const { theme, themeStyles, themeStylestext, updateThemeForAllScreens } = useTheme();
  const currentTheme = themeStyles[theme] || {};
  const [is_Category, setIs_Category] = useState('')
  const [is_list, setIs_List] = useState('')
  const [selectMode, setSelectMode] = useState(true);
  const [modalVisible, setModalVisible] = useState()
  const [modalVisible2, setModalVisible2] = useState()
  const [modalVisible3, setModalVisible3] = useState()
  const [is_bottom, setIs_Bottom] = useState()
  const [query, setQuery] = useState('');
  const viewBackgroundColors = themeStyles[theme]?.viewbackground || [];
  const [rating, setRating] = useState(0);
  const [selectedStars, setSelectedStars] = useState(0);


  const translateX = useRef(new Animated.Value(-width)).current;
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {

    const id = 0;
    selectCategory(id);


    return () => {
      translateX.stopAnimation();
      scale.stopAnimation();
    };
  }, []);
  const selectbottom = (id) => {
    setIs_Bottom(id)
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible)
  }
  const toggleModal3 = () => {
    setModalVisible3(!modalVisible3)
  }

  const handleSearch = (text) => {
    setQuery(text);
    if (typeof onSearch === 'function') {
      onSearch(text);
    } else {
      console.warn('onSearch is not a function');
    }
  };

  const toggleModal2 = () => {
    setModalVisible2(!modalVisible2)
  }
  const selectCategory = (id) => {
    setIs_Category(id)
  }
  const selectlist = (id) => {
    setIs_List(id)
  }
  // useEffect(() => {
  //   const translateXAnimation = Animated.timing(translateX, {
  //     toValue: modalVisible ? 0 : -width,
  //     duration: 300,
  //     useNativeDriver: true,
  //   });

  //   const scaleAnimation = Animated.timing(scale, {
  //     toValue: modalVisible ? 0.8 : 1,
  //     duration: 300,
  //     useNativeDriver: true,
  //   });

  //   Animated.parallel([translateXAnimation, scaleAnimation]).start();

  //   return () => {
  //     translateXAnimation.stop();
  //     scaleAnimation.stop();
  //   };
  // }, [modalVisible, translateX, scale]);


  useEffect(() => {
    const translateXAnimation = Animated.timing(translateX, {
      toValue: modalVisible ? 0 : -width,
      duration: 300,
      useNativeDriver: true,
    });

    const scaleAnimation = Animated.timing(scale, {
      toValue: modalVisible ? 0.8 : 1,
      duration: 300,
      useNativeDriver: true,
    });

    Animated.parallel([translateXAnimation, scaleAnimation]).start();

    return () => {
      translateXAnimation.stop();
      scaleAnimation.stop();
    };
  }, [modalVisible, translateX, scale]);

  const handleRatingPress = (itemId, index) => {
    setSelectedStars(prev => ({
      ...prev,
      [itemId]: index + 1,
    }));
  };
  const currentRating = selectedStars[itemId] || 0;
  return (
    <View style={[styles.container, { backgroundColor: themeStyles[theme].backgroundColor }]}>
      <ScrollView>
        <Animated.View style={[styles.container, { transform: [{ scale }] }]}>
          <ScrollView>
            <View style={styles.flexrowview}>
              <TouchableOpacity onPress={() => {
                setModalVisible(true)
              }} style={styles.menuview}>
                <Image source={icons.menuimg} style={styles.manuimg}></Image>
              </TouchableOpacity>
              <TouchableOpacity style={styles.seachview}>
                <View style={styles.serachflex}>
                  {/* <TextInput
                    style={styles.input}
                    placeholder="Search..."
                    value={query}
                    onChangeText={handleSearch}
                  /> */}
                  <TextInput
                    style={styles.input}
                    placeholder="Search..."
                    value={query}
                    onChangeText={handleSearch}
                  />
                  <TouchableOpacity style={styles.searchiconside}>
                    <Image source={icons.search} style={styles.searchimag}></Image>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => updateThemeForAllScreens(theme === 'light' ? 'dark' : 'light')}>
                <Image source={theme === 'dark' ? icons.darkmoon : icons.sunlight} style={styles.drackmodeimg}></Image>
              </TouchableOpacity>
            </View>
            <View style={styles.mainviewswiper}>
              <View style={styles.swiperrowview}>
                <Swiper
                  loop={false}
                  dot={<View style={styles.dotStyle} />}
                  activeDot={<View style={styles.activeDotStyle} />}
                  paginationStyle={{ height: '2%', alignSelf: "center", marginBottom: -15 }}
                  style={styles.buttonWrapperStyle}
                >
                  <View style={styles.slide1}>
                    <LinearGradient
                      colors={viewBackgroundColors}
                      style={[styles.nomoreview]}>
                      <View style={styles.flexrowswiper}>
                        <View style={styles.rowviewstyletwo}>
                          <Text style={[styles.musicetext, { color: themeStyles[theme].textColor }]}>{String.MusicanNomore}</Text>
                          <Text style={[styles.music, { color: themeStyles[theme].textColor }]}>{String.Music}</Text>
                        </View>
                        <View style={styles.rowviewstyle}>
                          <Image source={icons.headphonesecond} style={styles.heardphoneimag}></Image>
                        </View>
                      </View>
                    </LinearGradient>
                  </View>
                  <View style={styles.slide1}>
                    <LinearGradient
                      colors={viewBackgroundColors}
                      style={[styles.nomoreview]}>
                      <View style={styles.flexrowswiper}>
                        <View style={styles.rowviewstyletwo}>
                          <Text style={[styles.musicetext, { color: themeStyles[theme].textColor }]}>{String.MusicanNomore}</Text>
                          <Text style={[styles.music, { color: themeStyles[theme].textColor }]}>{String.Music}</Text>
                        </View>
                        <View style={styles.rowviewstyle}>
                          <Image source={icons.headphonesecond} style={styles.heardphoneimag}></Image>
                        </View>
                      </View>
                    </LinearGradient>
                  </View>
                  <View style={styles.slide1}>
                    <LinearGradient
                      colors={viewBackgroundColors}
                      style={[styles.nomoreview]}>
                      <View style={styles.flexrowswiper}>
                        <View style={styles.rowviewstyletwo}>
                          <Text style={[styles.musicetext, { color: themeStyles[theme].textColor }]}>{String.MusicanNomore}</Text>
                          <Text style={[styles.music, { color: themeStyles[theme].textColor }]}>{String.Music}</Text>
                        </View>
                        <View style={styles.rowviewstyle}>
                          <Image source={icons.headphonesecond} style={styles.heardphoneimag}></Image>
                        </View>
                      </View>
                    </LinearGradient>
                  </View>
                </Swiper>
              </View>
            </View>
            <Text style={[styles.populartext, { color: themeStyles[theme].textColor }]}>{String.PopularCategory}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <TouchableOpacity onPress={() => { selectCategory(0) }}
                style={[styles.Categoryview, { backgroundColor: is_Category === 0 ? '#35B257' : '#fff' }]}>
                <View style={styles.Categoryviewrow}>
                  <Image source={icons.list} style={[styles.manuimg, { tintColor: is_Category === 0 ? '#fff' : '#000' }]}></Image>
                  <Text style={[styles.headphonetext, { color: is_Category === 0 ? "#fff" : "#000" }]}>{String.Allaccessories}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { selectCategory(1) }}
                style={[styles.Categoryview, styles.Categoryview2, { backgroundColor: is_Category === 1 ? '#35B257' : '#fff' }]}>
                <View style={styles.Categoryviewrow}>
                  <Image source={icons.headphone} style={[styles.manuimg, { tintColor: is_Category === 1 ? '#fff' : '#000' }]}></Image>
                  <Text style={[styles.headphonetext, { color: is_Category === 1 ? "#fff" : "#000" }]}>{String.Headphone}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { selectCategory(2) }}
                style={[styles.Categoryview, styles.Categoryview2, { backgroundColor: is_Category === 2 ? '#35B257' : '#fff' }]}>
                <View style={styles.Categoryviewrow}>
                  <Image source={icons.camera4} style={[styles.manuimg, { tintColor: is_Category === 2 ? '#fff' : '#000' }]}></Image>
                  <Text style={[styles.headphonetext, { color: is_Category === 2 ? "#fff" : "#000" }]}>{String.Camera}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { selectCategory(3) }}
                style={[styles.Categoryview, styles.Categoryview2, { backgroundColor: is_Category === 3 ? '#35B257' : '#fff' }]}>
                <View style={styles.Categoryviewrow}>
                  <Image source={icons.sofas} style={[styles.manuimg, { tintColor: is_Category === 3 ? '#fff' : '#000' }]}></Image>
                  <Text style={[styles.headphonetext, { color: is_Category === 3 ? "#fff" : "#000" }]}>{String.HomeAccessories}</Text>
                </View>
              </TouchableOpacity>

            </ScrollView>
            {is_Category == '0' ? (<View>
              <Text style={[styles.populartext, { color: themeStyles[theme].textColor, marginBottom: -10 }]}>{String.SpecialProducts}</Text>

              <View style={styles.mainviewswiper2}>
                <View style={styles.swiperrowview2}>
                  <Swiper
                    loop={false}
                    dot={<View style={styles.dotStyle} />}
                    activeDot={<View style={styles.activeDotStyle} />}
                    paginationStyle={{ height: '2%', alignSelf: "center", marginBottom: -10 }}
                    style={styles.buttonWrapperStyle}

                  >
                    <View style={styles.slide1}>
                      <View style={styles.productsview}>
                        <TouchableOpacity onPress={() => { navigation.navigate('AllDetails') }} style={styles.swiperview}>
                          <Image source={icons.heardphone} style={styles.headphonesecondimg}></Image>
                          <Text style={styles.jbltext}>{String.JBL}</Text>
                          <Text style={styles.Excellent}>{String.WatcExcellent}</Text>
                          <View style={styles.timerow}>
                            <View>
                              <View style={styles.timeview}>
                                <Text style={styles.timetext}>04</Text>
                              </View>
                              <Text style={styles.hourtext}>Hour</Text>
                            </View>
                            <View>
                              <View style={styles.timeview}>
                                <Text style={styles.timetext}>18</Text>
                              </View>
                              <Text style={styles.hourtext}>Min</Text>
                            </View>
                            <View>
                              <View style={styles.timeview}>
                                <Text style={styles.timetext}>35</Text>
                              </View>
                              <Text style={styles.hourtext}>Sec</Text>
                            </View>
                          </View>
                          <View style={styles.textviewrow}>
                            <Text>{String.USD}</Text>
                            <Text style={styles.USDyext}> {String.USD}</Text>
                          </View>
                          <View style={styles.marbottomview}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('AllDetails') }} style={styles.swiperview}>
                          <Image source={icons.watch} style={styles.watchimg}></Image>
                          <Text style={styles.jbltext}>{String.Apple}</Text>
                          <Text style={styles.Excellent}>{String.CellularSmart}</Text>
                          <View style={styles.timerow}>
                            <View>
                              <View style={styles.timeview}>
                                <Text style={styles.timetext}>04</Text>
                              </View>
                              <Text style={styles.hourtext}>Hour</Text>
                            </View>
                            <View>
                              <View style={styles.timeview}>
                                <Text style={styles.timetext}>18</Text>
                              </View>
                              <Text style={styles.hourtext}>Min</Text>
                            </View>
                            <View>
                              <View style={styles.timeview}>
                                <Text style={styles.timetext}>35</Text>
                              </View>
                              <Text style={styles.hourtext}>Sec</Text>
                            </View>
                          </View>
                          <View style={styles.textviewrow}>
                            <Text>{String.USD}</Text>
                            <Text style={styles.USDyext}> {String.USD}</Text>
                          </View>
                          <View style={styles.marbottomview}/>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View style={styles.slide1}>
                      <View style={styles.productsview}>
                        <TouchableOpacity style={styles.swiperview}>
                          <Image source={icons.heardphone} style={styles.headphonesecondimg}></Image>
                          <Text style={styles.jbltext}>{String.JBL}</Text>
                          <Text style={styles.Excellent}>{String.WatcExcellent}</Text>
                          <View style={styles.timerow}>
                            <View>
                              <View style={styles.timeview}>
                                <Text style={styles.timetext}>04</Text>
                              </View>
                              <Text style={styles.hourtext}>Hour</Text>
                            </View>
                            <View>
                              <View style={styles.timeview}>
                                <Text style={styles.timetext}>18</Text>
                              </View>
                              <Text style={styles.hourtext}>Min</Text>
                            </View>
                            <View>
                              <View style={styles.timeview}>
                                <Text style={styles.timetext}>35</Text>
                              </View>
                              <Text style={styles.hourtext}>Sec</Text>
                            </View>
                          </View>
                          <View style={styles.textviewrow}>
                            <Text>{String.USD}</Text>
                            <Text style={styles.USDyext}> {String.USD}</Text>
                          </View>
                          <View style={styles.marbottomview}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('AllDetails') }} style={styles.swiperview}>
                          <Image source={icons.watch} style={styles.watchimg}></Image>
                          <Text style={styles.jbltext}>{String.Apple}</Text>
                          <Text style={styles.Excellent}>{String.CellularSmart}</Text>
                          <View style={styles.timerow}>
                            <View>
                              <View style={styles.timeview}>
                                <Text style={styles.timetext}>04</Text>
                              </View>
                              <Text style={styles.hourtext}>Hour</Text>
                            </View>
                            <View>
                              <View style={styles.timeview}>
                                <Text style={styles.timetext}>18</Text>
                              </View>
                              <Text style={styles.hourtext}>Min</Text>
                            </View>
                            <View>
                              <View style={styles.timeview}>
                                <Text style={styles.timetext}>35</Text>
                              </View>
                              <Text style={styles.hourtext}>Sec</Text>
                            </View>
                          </View>
                          <View style={styles.textviewrow}>
                            <Text>{String.USD}</Text>
                            <Text style={styles.USDyext}> {String.USD}</Text>
                          </View>
                          <View style={styles.marbottomview}/>
                        </TouchableOpacity>

                      </View>
                    </View>

                  </Swiper>
                </View>
              </View>

              {/* Products */}


              <Text style={[styles.populartext, { color: themeStyles[theme].textColor, marginBottom: -10 }]}>{String.Products}</Text>

              <View style={styles.mainviewswiper2}>
                <View style={styles.swiperrowview2}>
                  <Swiper
                    loop={false}
                    dot={<View style={styles.dotStyle2} />}
                    activeDot={<View style={styles.activeDotStyle2} />}
                    paginationStyle={{ height: '2%', alignSelf: "center", marginBottom: -10 }}
                    style={styles.buttonWrapperStyle}
                  >
                    <View style={styles.slide1}>
                      <View style={styles.productsview}>
                        <TouchableOpacity onPress={() => { navigation.navigate('AllDetails') }} style={styles.swiperview}>
                          <Image source={icons.heardphone} style={styles.headphonesecondimg}></Image>
                          <Text style={styles.jbltext}>{String.JBL}</Text>
                          <Text style={styles.Excellent}>{String.WatcExcellent}</Text>
                          <View style={styles.timerow}>
                            <View>
                              <View style={styles.timeview}>
                                <Text style={styles.timetext}>04</Text>
                              </View>
                              <Text style={styles.hourtext}>Hour</Text>
                            </View>
                            <View>
                              <View style={styles.timeview}>
                                <Text style={styles.timetext}>18</Text>
                              </View>
                              <Text style={styles.hourtext}>Min</Text>
                            </View>
                            <View>
                              <View style={styles.timeview}>
                                <Text style={styles.timetext}>35</Text>
                              </View>
                              <Text style={styles.hourtext}>Sec</Text>
                            </View>
                          </View>
                          <View style={styles.textviewrow}>
                            <Text>{String.USD}</Text>
                            <Text style={styles.USDyext}> {String.USD}</Text>
                          </View>
                          <View style={styles.marbottomview}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('AllDetails') }} style={styles.swiperview}>
                          <Image source={icons.watch} style={styles.watchimg}></Image>
                          <Text style={styles.jbltext}>{String.Apple}</Text>
                          <Text style={styles.Excellent}>{String.CellularSmart}</Text>
                          <View style={styles.timerow}>
                            <View>
                              <View style={styles.timeview}>
                                <Text style={styles.timetext}>04</Text>
                              </View>
                              <Text style={styles.hourtext}>Hour</Text>
                            </View>
                            <View>
                              <View style={styles.timeview}>
                                <Text style={styles.timetext}>18</Text>
                              </View>
                              <Text style={styles.hourtext}>Min</Text>
                            </View>
                            <View>
                              <View style={styles.timeview}>
                                <Text style={styles.timetext}>35</Text>
                              </View>
                              <Text style={styles.hourtext}>Sec</Text>
                            </View>
                          </View>
                          <View style={styles.textviewrow}>
                            <Text>{String.USD}</Text>
                            <Text style={styles.USDyext}> {String.USD}</Text>
                          </View>
                          <View style={styles.marbottomview}/>
                        </TouchableOpacity>
                      </View>
                    </View>

                    <View style={styles.slide1}>
                      <View style={styles.productsview}>
                        <TouchableOpacity onPress={() => { navigation.navigate('AllDetails') }} style={styles.swiperview}>
                          <Image source={icons.heardphone} style={styles.headphonesecondimg}></Image>
                          <Text style={styles.jbltext}>{String.JBL}</Text>
                          <Text style={styles.Excellent}>{String.WatcExcellent}</Text>
                          <View style={styles.timerow}>
                            <View>
                              <View style={styles.timeview}>
                                <Text style={styles.timetext}>04</Text>
                              </View>
                              <Text style={styles.hourtext}>Hour</Text>
                            </View>
                            <View>
                              <View style={styles.timeview}>
                                <Text style={styles.timetext}>18</Text>
                              </View>
                              <Text style={styles.hourtext}>Min</Text>
                            </View>
                            <View>
                              <View style={styles.timeview}>
                                <Text style={styles.timetext}>35</Text>
                              </View>
                              <Text style={styles.hourtext}>Sec</Text>
                            </View>
                          </View>
                          <View style={styles.textviewrow}>
                            <Text>{String.USD}</Text>
                            <Text style={styles.USDyext}> {String.USD}</Text>
                          </View>
                          <View style={styles.marbottomview}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('AllDetails') }} style={styles.swiperview}>
                          <Image source={icons.watch} style={styles.watchimg}></Image>
                          <Text style={styles.jbltext}>{String.Apple}</Text>
                          <Text style={styles.Excellent}>{String.CellularSmart}</Text>
                          <View style={styles.timerow}>
                            <View>
                              <View style={styles.timeview}>
                                <Text style={styles.timetext}>04</Text>
                              </View>
                              <Text style={styles.hourtext}>Hour</Text>
                            </View>
                            <View>
                              <View style={styles.timeview}>
                                <Text style={styles.timetext}>18</Text>
                              </View>
                              <Text style={styles.hourtext}>Min</Text>
                            </View>
                            <View>
                              <View style={styles.timeview}>
                                <Text style={styles.timetext}>35</Text>
                              </View>
                              <Text style={styles.hourtext}>Sec</Text>
                            </View>
                          </View>
                          <View style={styles.textviewrow}>
                            <Text>{String.USD}</Text>
                            <Text style={styles.USDyext}> {String.USD}</Text>
                          </View>
                          <View style={styles.marbottomview}/>
                        </TouchableOpacity>

                      </View>
                    </View>

                  </Swiper>
                </View>
              </View>
            </View>) : null}
            {is_Category == '1' ? (
              <View>
                <View style={[styles.productsview, styles.flexwrapstyle]}>
                  <TouchableOpacity style={styles.swiperview}>
                    <Image source={icons.heardphone} style={styles.headphonesecondimg}></Image>
                    <Text style={styles.jbltext}>{String.JBL}</Text>
                    <Text style={styles.Excellent}>{String.WatcExcellent}</Text>
                    <View style={styles.timerow}>
                      <View>
                        <View style={styles.timeview}>
                          <Text style={styles.timetext}>04</Text>
                        </View>
                        <Text style={styles.hourtext}>Hour</Text>
                      </View>
                      <View>
                        <View style={styles.timeview}>
                          <Text style={styles.timetext}>18</Text>
                        </View>
                        <Text style={styles.hourtext}>Min</Text>
                      </View>
                      <View>
                        <View style={styles.timeview}>
                          <Text style={styles.timetext}>35</Text>
                        </View>
                        <Text style={styles.hourtext}>Sec</Text>
                      </View>
                    </View>
                    <View style={styles.textviewrow}>
                      <Text>{String.USD}</Text>
                      <Text style={styles.USDyext}> {String.USD}</Text>
                    </View>
                    <View style={styles.marbottomview}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.swiperview}>
                    <Image source={icons.heardphone} style={styles.headphonesecondimg}></Image>
                    <Text style={styles.jbltext}>{String.JBL}</Text>
                    <Text style={styles.Excellent}>{String.WatcExcellent}</Text>
                    <View style={styles.timerow}>
                      <View>
                        <View style={styles.timeview}>
                          <Text style={styles.timetext}>04</Text>
                        </View>
                        <Text style={styles.hourtext}>Hour</Text>
                      </View>
                      <View>
                        <View style={styles.timeview}>
                          <Text style={styles.timetext}>18</Text>
                        </View>
                        <Text style={styles.hourtext}>Min</Text>
                      </View>
                      <View>
                        <View style={styles.timeview}>
                          <Text style={styles.timetext}>35</Text>
                        </View>
                        <Text style={styles.hourtext}>Sec</Text>
                      </View>
                    </View>
                    <View style={styles.textviewrow}>
                      <Text>{String.USD}</Text>
                      <Text style={styles.USDyext}> {String.USD}</Text>
                    </View>
                    <View style={styles.marbottomview}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.swiperview}>
                    <Image source={icons.heardphone} style={styles.headphonesecondimg}></Image>
                    <Text style={styles.jbltext}>{String.JBL}</Text>
                    <Text style={styles.Excellent}>{String.WatcExcellent}</Text>
                    <View style={styles.timerow}>
                      <View>
                        <View style={styles.timeview}>
                          <Text style={styles.timetext}>04</Text>
                        </View>
                        <Text style={styles.hourtext}>Hour</Text>
                      </View>
                      <View>
                        <View style={styles.timeview}>
                          <Text style={styles.timetext}>18</Text>
                        </View>
                        <Text style={styles.hourtext}>Min</Text>
                      </View>
                      <View>
                        <View style={styles.timeview}>
                          <Text style={styles.timetext}>35</Text>
                        </View>
                        <Text style={styles.hourtext}>Sec</Text>
                      </View>
                    </View>
                    <View style={styles.textviewrow}>
                      <Text>{String.USD}</Text>
                      <Text style={styles.USDyext}> {String.USD}</Text>
                    </View>
                    <View style={styles.marbottomview}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.swiperview}>
                    <Image source={icons.heardphone} style={styles.headphonesecondimg}></Image>
                    <Text style={styles.jbltext}>{String.JBL}</Text>
                    <Text style={styles.Excellent}>{String.WatcExcellent}</Text>
                    <View style={styles.timerow}>
                      <View>
                        <View style={styles.timeview}>
                          <Text style={styles.timetext}>04</Text>
                        </View>
                        <Text style={styles.hourtext}>Hour</Text>
                      </View>
                      <View>
                        <View style={styles.timeview}>
                          <Text style={styles.timetext}>18</Text>
                        </View>
                        <Text style={styles.hourtext}>Min</Text>
                      </View>
                      <View>
                        <View style={styles.timeview}>
                          <Text style={styles.timetext}>35</Text>
                        </View>
                        <Text style={styles.hourtext}>Sec</Text>
                      </View>
                    </View>
                    <View style={styles.textviewrow}>
                      <Text>{String.USD}</Text>
                      <Text style={styles.USDyext}> {String.USD}</Text>
                    </View>
                    <View style={styles.marbottomview}/>
                  </TouchableOpacity>

                </View>
              </View>
            ) : null}
            {is_Category == '2' ? (
              <View>
                <View style={[styles.productsview, styles.flexwrapstyle]}>
                  <TouchableOpacity style={styles.swiperview}>
                    <Image source={icons.camerarolll} style={styles.headphonesecondimg}></Image>
                    <Text style={styles.jbltext}>{String.JBL}</Text>
                    <Text style={styles.Excellent}>{String.WatcExcellent}</Text>
                    <View style={styles.timerow}>
                      <View>
                        <View style={styles.timeview}>
                          <Text style={styles.timetext}>04</Text>
                        </View>
                        <Text style={styles.hourtext}>Hour</Text>
                      </View>
                      <View>
                        <View style={styles.timeview}>
                          <Text style={styles.timetext}>18</Text>
                        </View>
                        <Text style={styles.hourtext}>Min</Text>
                      </View>
                      <View>
                        <View style={styles.timeview}>
                          <Text style={styles.timetext}>35</Text>
                        </View>
                        <Text style={styles.hourtext}>Sec</Text>
                      </View>
                    </View>
                    <View style={styles.textviewrow}>
                      <Text>{String.USD}</Text>
                      <Text style={styles.USDyext}> {String.USD}</Text>
                    </View>
                    <View style={styles.marbottomview}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.swiperview}>
                    <Image source={icons.cameraapp} style={[styles.headphonesecondimg, styles.headphonesecondimgtwoo]}></Image>
                    <Text style={styles.jbltext}>{String.JBL}</Text>
                    <Text style={styles.Excellent}>{String.WatcExcellent}</Text>
                    <View style={styles.timerow}>
                      <View>
                        <View style={styles.timeview}>
                          <Text style={styles.timetext}>04</Text>
                        </View>
                        <Text style={styles.hourtext}>Hour</Text>
                      </View>
                      <View>
                        <View style={styles.timeview}>
                          <Text style={styles.timetext}>18</Text>
                        </View>
                        <Text style={styles.hourtext}>Min</Text>
                      </View>
                      <View>
                        <View style={styles.timeview}>
                          <Text style={styles.timetext}>35</Text>
                        </View>
                        <Text style={styles.hourtext}>Sec</Text>
                      </View>
                    </View>
                    <View style={styles.textviewrow}>
                      <Text>{String.USD}</Text>
                      <Text style={styles.USDyext}> {String.USD}</Text>
                    </View>
                    <View style={styles.marbottomview}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.swiperview}>
                    <Image source={icons.camerarolll} style={styles.headphonesecondimg}></Image>
                    <Text style={styles.jbltext}>{String.JBL}</Text>
                    <Text style={styles.Excellent}>{String.WatcExcellent}</Text>
                    <View style={styles.timerow}>
                      <View>
                        <View style={styles.timeview}>
                          <Text style={styles.timetext}>04</Text>
                        </View>
                        <Text style={styles.hourtext}>Hour</Text>
                      </View>
                      <View>
                        <View style={styles.timeview}>
                          <Text style={styles.timetext}>18</Text>
                        </View>
                        <Text style={styles.hourtext}>Min</Text>
                      </View>
                      <View>
                        <View style={styles.timeview}>
                          <Text style={styles.timetext}>35</Text>
                        </View>
                        <Text style={styles.hourtext}>Sec</Text>
                      </View>
                    </View>
                    <View style={styles.textviewrow}>
                      <Text>{String.USD}</Text>
                      <Text style={styles.USDyext}> {String.USD}</Text>
                    </View>
                    <View style={styles.marbottomview}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.swiperview}>
                    <Image source={icons.cameraapp} style={[styles.headphonesecondimg, styles.headphonesecondimgtwoo]}></Image>
                    <Text style={styles.jbltext}>{String.JBL}</Text>
                    <Text style={styles.Excellent}>{String.WatcExcellent}</Text>
                    <View style={styles.timerow}>
                      <View>
                        <View style={styles.timeview}>
                          <Text style={styles.timetext}>04</Text>
                        </View>
                        <Text style={styles.hourtext}>Hour</Text>
                      </View>
                      <View>
                        <View style={styles.timeview}>
                          <Text style={styles.timetext}>18</Text>
                        </View>
                        <Text style={styles.hourtext}>Min</Text>
                      </View>
                      <View>
                        <View style={styles.timeview}>
                          <Text style={styles.timetext}>35</Text>
                        </View>
                        <Text style={styles.hourtext}>Sec</Text>
                      </View>
                    </View>
                    <View style={styles.textviewrow}>
                      <Text>{String.USD}</Text>
                      <Text style={styles.USDyext}> {String.USD}</Text>
                    </View>
                    <View style={styles.marbottomview}/>
                  </TouchableOpacity>

                </View>
              </View>
            ) : null}
            {is_Category == '3' ? (
              <View>
                <View style={[styles.productsview, styles.flexwrapstyle]}>
                  <TouchableOpacity style={styles.swiperview}>
                    <Image source={icons.appletv} style={[styles.headphonesecondimg, styles.headphonesecondimgtv]}></Image>
                    <Text style={styles.jbltext}>{String.JBL}</Text>
                    <Text style={styles.Excellent}>{String.WatcExcellent}</Text>
                    <View style={styles.timerow}>
                      <View>
                        <View style={styles.timeview}>
                          <Text style={styles.timetext}>04</Text>
                        </View>
                        <Text style={styles.hourtext}>Hour</Text>
                      </View>
                      <View>
                        <View style={styles.timeview}>
                          <Text style={styles.timetext}>18</Text>
                        </View>
                        <Text style={styles.hourtext}>Min</Text>
                      </View>
                      <View>
                        <View style={styles.timeview}>
                          <Text style={styles.timetext}>35</Text>
                        </View>
                        <Text style={styles.hourtext}>Sec</Text>
                      </View>
                    </View>
                    <View style={styles.textviewrow}>
                      <Text>{String.USD}</Text>
                      <Text style={styles.USDyext}> {String.USD}</Text>
                    </View>
                    <View style={styles.marbottomview}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.swiperview}>
                    <Image source={icons.tv} style={[styles.headphonesecondimg, styles.headphonesecondimgtyset]}></Image>
                    <Text style={styles.jbltext}>{String.JBL}</Text>
                    <Text style={styles.Excellent}>{String.WatcExcellent}</Text>
                    <View style={styles.timerow}>
                      <View>
                        <View style={styles.timeview}>
                          <Text style={styles.timetext}>04</Text>
                        </View>
                        <Text style={styles.hourtext}>Hour</Text>
                      </View>
                      <View>
                        <View style={styles.timeview}>
                          <Text style={styles.timetext}>18</Text>
                        </View>
                        <Text style={styles.hourtext}>Min</Text>
                      </View>
                      <View>
                        <View style={styles.timeview}>
                          <Text style={styles.timetext}>35</Text>
                        </View>
                        <Text style={styles.hourtext}>Sec</Text>
                      </View>
                    </View>
                    <View style={styles.textviewrow}>
                      <Text>{String.USD}</Text>
                      <Text style={styles.USDyext}> {String.USD}</Text>
                    </View>
                    <View style={styles.marbottomview}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.swiperview}>
                    <Image source={icons.sound} style={[styles.headphonesecondimg, styles.headphonesecondimgtysound]}></Image>
                    <Text style={styles.jbltext}>{String.JBL}</Text>
                    <Text style={styles.Excellent}>{String.WatcExcellent}</Text>
                    <View style={styles.timerow}>
                      <View>
                        <View style={styles.timeview}>
                          <Text style={styles.timetext}>04</Text>
                        </View>
                        <Text style={styles.hourtext}>Hour</Text>
                      </View>
                      <View>
                        <View style={styles.timeview}>
                          <Text style={styles.timetext}>18</Text>
                        </View>
                        <Text style={styles.hourtext}>Min</Text>
                      </View>
                      <View>
                        <View style={styles.timeview}>
                          <Text style={styles.timetext}>35</Text>
                        </View>
                        <Text style={styles.hourtext}>Sec</Text>
                      </View>
                    </View>
                    <View style={styles.textviewrow}>
                      <Text>{String.USD}</Text>
                      <Text style={styles.USDyext}> {String.USD}</Text>
                    </View>
                    <View style={styles.marbottomview}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.swiperview}>
                    <Image source={icons.appletv} style={[styles.headphonesecondimg, styles.headphonesecondimgtv]}></Image>
                    <Text style={styles.jbltext}>{String.JBL}</Text>
                    <Text style={styles.Excellent}>{String.WatcExcellent}</Text>
                    <View style={styles.timerow}>
                      <View>
                        <View style={styles.timeview}>
                          <Text style={styles.timetext}>04</Text>
                        </View>
                        <Text style={styles.hourtext}>Hour</Text>
                      </View>
                      <View>
                        <View style={styles.timeview}>
                          <Text style={styles.timetext}>18</Text>
                        </View>
                        <Text style={styles.hourtext}>Min</Text>
                      </View>
                      <View>
                        <View style={styles.timeview}>
                          <Text style={styles.timetext}>35</Text>
                        </View>
                        <Text style={styles.hourtext}>Sec</Text>
                      </View>
                    </View>
                    <View style={styles.textviewrow}>
                      <Text>{String.USD}</Text>
                      <Text style={styles.USDyext}> {String.USD}</Text>
                    </View>
                    <View style={styles.marbottomview}/>
                  </TouchableOpacity>

                </View>
              </View>
            ) : null}
          </ScrollView>

          <ReactNativeModal
            isVisible={modalVisible}
            onBackdropPress={toggleModal}
            transparent={true}
            backdropColor={'#fff'}
            animationIn="slideInLeft"
            animationOut="slideOutLeft"
            style={{ margin: 0, bottom: 0 }}
            backdropOpacity={0}
          >
            <Animated.View style={styles.backcoloeview}>
              <View style={styles.flexdractionrow}>
                <View style={styles.profileview}>
                  <TouchableOpacity onPress={() => {
                    setModalVisible(false)
                    navigation.navigate('Uploadimags');

                  }}>
                    <Image source={icons.Rectangle} style={styles.profieimges}></Image>
                  </TouchableOpacity>
                  <View style={styles.nameflexrow}>
                    <Text style={styles.nametext}>John Smith</Text>
                    <Image source={icons.Edit2} style={styles.Editimges}></Image>
                  </View>
                  <Text style={styles.nametext}>johnsmith@yahoo.com</Text>
                  <Text style={styles.dotsline}></Text>
                  <TouchableOpacity onPress={() => {
                    selectlist(0)
                    navigation.navigate('Home');
                    setModalVisible(false)
                  }} style={[styles.selcetview, { backgroundColor: is_list === 0 ? '#BABABA' : null }]}>
                    <View style={styles.flewrowselcet}>
                      <Image source={icons.firrhome} style={styles.homeimges}></Image>
                      <Text style={styles.hometext}>{String.home}</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {
                    selectlist(1);
                    navigation.navigate('Transactions');
                    setModalVisible(false)
                  }} style={[styles.selcetview, styles.selcetviewtwo, { backgroundColor: is_list === 1 ? '#BABABA' : null }]}>
                    <View style={styles.flewrowselcet}>
                      <Image source={icons.dollarcircle} style={styles.homeimges}></Image>
                      <Text style={styles.hometext}>{String.Transactions}</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {
                    selectlist(2);
                    navigation.navigate('Contactus');
                    setModalVisible(false)
                  }} style={[styles.selcetview, styles.selcetviewtwo, { backgroundColor: is_list === 2 ? '#BABABA' : null }]}>
                    <View style={styles.flewrowselcet}>
                      <Image source={icons.infolight2} style={styles.homeimges}></Image>
                      <Text style={styles.hometext}>{String.AboutUs}</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {
                    selectlist(3)
                  }} style={[styles.selcetview, styles.selcetviewtwo, { backgroundColor: is_list === 3 ? '#BABABA' : null }]}>
                    <View style={styles.flewrowselcet}>
                      <Image source={icons.share2} style={styles.homeimges}></Image>
                      <Text style={styles.hometext}>{String.ShareApp}</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {
                    setModalVisible3(true)
                    selectlist(4)
                  }} style={[styles.selcetview, styles.selcetviewtwo, { backgroundColor: is_list === 4 ? '#BABABA' : null }]}>
                    <View style={styles.flewrowselcet}>
                      <Image source={icons.starratin} style={styles.homeimges}></Image>
                      <Text style={styles.hometext}>{String.RateApp}</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {
                    selectlist(5)
                    setModalVisible2(true)
                  }} style={[styles.selcetview, styles.selcetviewthree, { backgroundColor: is_list === 5 ? '#BABABA' : null }]}>
                    <View style={styles.flewrowselcet}>
                      <Image source={icons.languagesquare2} style={[styles.homeimges, styles.homeimgestwo]}></Image>
                      <Text style={styles.hometext}>{String.Languages}</Text>
                      <TouchableOpacity style={styles.dowmstyle}>
                        <Image source={icons.down} style={styles.downimg}></Image>

                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.screenview}>
                  <TouchableOpacity onPress={() => {
                    setModalVisible(false)
                  }} style={styles.closeiconview}>
                    <Image source={icons.closemodelicon} style={styles.closeimges}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {
                    setModalVisible(false)
                    navigation.navigate('Home');
                  }}>
                    <View
                      style={[styles.witheview,]}>


                      <View style={[styles.screenview, { height: "95%", width: "90%", borderRadius: 50 }]}>

                        <View style={[styles.flexrowview, styles.flexrowviewtwo]}>
                          <TouchableOpacity onPress={() => {
                            setModalVisible(true)
                          }} style={[styles.menuview, styles.menuviewtwo]}>

                            <Image source={icons.menuimg} style={[styles.manuimg, styles.manuimgtwo]}></Image>
                          </TouchableOpacity>
                          <TouchableOpacity style={[styles.seachview, styles.seachviewtwo]}>
                            <TouchableOpacity style={styles.searchiconside}>
                              {/* <Image source={icons.search} style={styles.searchimag}></Image> */}
                            </TouchableOpacity>
                          </TouchableOpacity>
                          {/* <TouchableOpacity onPress={() => updateThemeForAllScreens(theme === 'light' ? 'dark' : 'light')}>
                       <Image source={theme === 'dark' ? icons.drackmode : icons.brightness} style={styles.drackmodeimg}></Image>
            
                        </TouchableOpacity> */}
                        </View>
                        <ScrollView>
                          <View style={[styles.mainviewswiper, styles.two]}>
                            <View style={[styles.swiperrowview, styles.twotwo]}>
                              <Swiper
                                loop={false}
                                dot={<View style={styles.dotStyle} />}
                                activeDot={<View style={styles.activeDotStyle} />}
                                paginationStyle={{ height: '3%', alignSelf: "center", marginBottom: -10 }}
                                style={styles.buttonWrapperStyle}
                              >
                                <View style={styles.slide1}>
                                  <LinearGradient
                                    colors={viewBackgroundColors}
                                    style={[styles.nomoreview]}>

                                    <View style={styles.flexrowswiper}>
                                      <View style={styles.rowviewstyletwo}>
                                        <Text style={[styles.musicetext, styles.musicetextghg, { color: themeStyles[theme].textColor }]}>{String.MusicanNomore}</Text>
                                        <Text style={[styles.music, styles.musicetextghg, { color: themeStyles[theme].textColor }]}>{String.Music}</Text>
                                      </View>
                                      <View style={styles.rowviewstyle}>
                                        <Image source={icons.headphonesecond} style={[styles.heardphoneimag, styles.heardphoneimaggdg]}></Image>
                                      </View>
                                    </View>
                                  </LinearGradient>
                                </View>
                                <View style={styles.slide1}>
                                  <LinearGradient
                                    colors={viewBackgroundColors}
                                    style={[styles.nomoreview]}>
                                    <View style={styles.flexrowswiper}>
                                      <View style={styles.rowviewstyletwo}>
                                        <Text style={[styles.musicetext, styles.musicetextghg, { color: themeStyles[theme].textColor }]}>{String.MusicanNomore}</Text>
                                        <Text style={[styles.music, styles.musicetextghg, { color: themeStyles[theme].textColor }]}>{String.Music}</Text>
                                      </View>
                                      <View style={styles.rowviewstyle}>
                                        <Image source={icons.headphonesecond} style={[styles.heardphoneimag, styles.heardphoneimaggdg]}></Image>
                                      </View>
                                    </View>
                                  </LinearGradient>

                                </View>
                                <View style={styles.slide1}>
                                  <LinearGradient
                                    colors={viewBackgroundColors}
                                    style={[styles.nomoreview]}>
                                    <View style={styles.flexrowswiper}>
                                      <View style={styles.rowviewstyletwo}>
                                        <Text style={[styles.musicetext, styles.musicetextghg, { color: themeStyles[theme].textColor }]}>{String.MusicanNomore}</Text>
                                        <Text style={[styles.music, styles.musicetextghg, { color: themeStyles[theme].textColor }]}>{String.Music}</Text>
                                      </View>
                                      <View style={styles.rowviewstyle}>
                                        <Image source={icons.headphonesecond} style={[styles.heardphoneimag, styles.heardphoneimaggdg]}></Image>
                                      </View>
                                    </View>
                                  </LinearGradient>

                                </View>
                              </Swiper>
                            </View>
                          </View>
                          <Text style={[styles.populartext, { color: themeStyles[theme].textColor }]}>{String.PopularCategory}</Text>
                          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity onPress={() => { selectCategory(0) }}
                              style={[styles.Categoryview, { backgroundColor: is_Category === 0 ? '#35B257' : '#fff' }]}>
                              <View style={styles.Categoryviewrow}>
                                <Image source={icons.list} style={[styles.manuimg, { tintColor: is_Category === 0 ? '#fff' : '#000' }]}></Image>
                                <Text style={[styles.headphonetext, { color: is_Category === 0 ? "#fff" : "#000" }]}>{String.Allaccessories}</Text>
                              </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { selectCategory(1) }}
                              style={[styles.Categoryview, styles.Categoryview2, { backgroundColor: is_Category === 1 ? '#35B257' : '#fff' }]}>
                              <View style={styles.Categoryviewrow}>
                                <Image source={icons.headphone} style={[styles.manuimg, { tintColor: is_Category === 1 ? '#fff' : '#000' }]}></Image>
                                <Text style={[styles.headphonetext, { color: is_Category === 1 ? "#fff" : "#000" }]}>{String.Headphone}</Text>
                              </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { selectCategory(2) }}
                              style={[styles.Categoryview, styles.Categoryview2, { backgroundColor: is_Category === 2 ? '#35B257' : '#fff' }]}>
                              <View style={styles.Categoryviewrow}>
                                <Image source={icons.camera} style={[styles.manuimg, { tintColor: is_Category === 2 ? '#fff' : '#000' }]}></Image>
                                <Text style={[styles.headphonetext, { color: is_Category === 2 ? "#fff" : "#000" }]}>{String.Camera}</Text>
                              </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { selectCategory(3) }}
                              style={[styles.Categoryview, styles.Categoryview2, { backgroundColor: is_Category === 3 ? '#35B257' : '#fff' }]}>
                              <View style={styles.Categoryviewrow}>
                                <Image source={icons.Frame} style={[styles.manuimg, { tintColor: is_Category === 3 ? '#fff' : '#000' }]}></Image>
                                <Text style={[styles.headphonetext, { color: is_Category === 3 ? "#fff" : "#000" }]}>{String.HomeAccessories}</Text>
                              </View>
                            </TouchableOpacity>

                          </ScrollView>
                          {/* <View style={{marginBottom:-20}}/> */}
                          {is_Category == '0' ? (<View>
                            <Text style={[styles.populartext, { color: "#000", }]}>{String.SpecialProducts}</Text>

                            <View style={[styles.mainviewswiper2, { marginTop: -10 }]}>
                              <View style={styles.swiperrowview2}>
                                <Swiper
                                  loop={false}
                                  dot={<View style={styles.dotStyle} />}
                                  activeDot={<View style={styles.activeDotStyle} />}
                                  paginationStyle={{ height: '2%', alignSelf: "center", marginBottom: -10 }}
                                  style={styles.buttonWrapperStyle}
                                // ref={(ref) => {
                                //     swiperRef.current = ref;
                                // }}
                                // showsPagination={false}
                                >
                                  <View style={styles.slide1}>
                                    <View style={styles.productsview}>
                                      <TouchableOpacity onPress={() => { navigation.navigate('AllDetails') }} style={styles.swiperview}>
                                        <Image source={icons.heardphone} style={styles.headphonesecondimg}></Image>
                                        <Text style={styles.jbltext}>{String.JBL}</Text>
                                        <Text style={styles.Excellent}>{String.WatcExcellent}</Text>
                                        <View style={styles.timerow}>
                                          <View>
                                            <View style={styles.timeview}>
                                              <Text style={styles.timetext}>04</Text>
                                            </View>
                                            <Text style={styles.hourtext}>Hour</Text>
                                          </View>
                                          <View>
                                            <View style={styles.timeview}>
                                              <Text style={styles.timetext}>18</Text>
                                            </View>
                                            <Text style={styles.hourtext}>Min</Text>
                                          </View>
                                          <View>
                                            <View style={styles.timeview}>
                                              <Text style={styles.timetext}>35</Text>
                                            </View>
                                            <Text style={styles.hourtext}>Sec</Text>
                                          </View>
                                        </View>
                                        <View style={styles.textviewrow}>
                                          <Text>{String.USD}</Text>
                                          <Text style={styles.USDyext}> {String.USD}</Text>
                                        </View>
                                      </TouchableOpacity>
                                      <TouchableOpacity style={styles.swiperview}>
                                        <Image source={icons.watch} style={styles.watchimg}></Image>
                                        <Text style={styles.jbltext}>{String.Apple}</Text>
                                        <Text style={styles.Excellent}>{String.CellularSmart}</Text>
                                        <View style={styles.timerow}>
                                          <View>
                                            <View style={styles.timeview}>
                                              <Text style={styles.timetext}>04</Text>
                                            </View>
                                            <Text style={styles.hourtext}>Hour</Text>
                                          </View>
                                          <View>
                                            <View style={styles.timeview}>
                                              <Text style={styles.timetext}>18</Text>
                                            </View>
                                            <Text style={styles.hourtext}>Min</Text>
                                          </View>
                                          <View>
                                            <View style={styles.timeview}>
                                              <Text style={styles.timetext}>35</Text>
                                            </View>
                                            <Text style={styles.hourtext}>Sec</Text>
                                          </View>
                                        </View>
                                        <View style={styles.textviewrow}>
                                          <Text>{String.USD}</Text>
                                          <Text style={styles.USDyext}> {String.USD}</Text>
                                        </View>
                                      </TouchableOpacity>
                                    </View>
                                  </View>
                                  <View style={styles.slide1}>
                                    <View style={styles.productsview}>
                                      <TouchableOpacity style={styles.swiperview}>
                                        <Image source={icons.heardphone} style={styles.headphonesecondimg}></Image>
                                        <Text style={styles.jbltext}>{String.JBL}</Text>
                                        <Text style={styles.Excellent}>{String.WatcExcellent}</Text>
                                        <View style={styles.timerow}>
                                          <View>
                                            <View style={styles.timeview}>
                                              <Text style={styles.timetext}>04</Text>
                                            </View>
                                            <Text style={styles.hourtext}>Hour</Text>
                                          </View>
                                          <View>
                                            <View style={styles.timeview}>
                                              <Text style={styles.timetext}>18</Text>
                                            </View>
                                            <Text style={styles.hourtext}>Min</Text>
                                          </View>
                                          <View>
                                            <View style={styles.timeview}>
                                              <Text style={styles.timetext}>35</Text>
                                            </View>
                                            <Text style={styles.hourtext}>Sec</Text>
                                          </View>
                                        </View>
                                        <View style={styles.textviewrow}>
                                          <Text>{String.USD}</Text>
                                          <Text style={styles.USDyext}> {String.USD}</Text>
                                        </View>
                                      </TouchableOpacity>
                                      <TouchableOpacity style={styles.swiperview}>
                                        <Image source={icons.watch} style={styles.watchimg}></Image>
                                        <Text style={styles.jbltext}>{String.Apple}</Text>
                                        <Text style={styles.Excellent}>{String.CellularSmart}</Text>
                                        <View style={styles.timerow}>
                                          <View>
                                            <View style={styles.timeview}>
                                              <Text style={styles.timetext}>04</Text>
                                            </View>
                                            <Text style={styles.hourtext}>Hour</Text>
                                          </View>
                                          <View>
                                            <View style={styles.timeview}>
                                              <Text style={styles.timetext}>18</Text>
                                            </View>
                                            <Text style={styles.hourtext}>Min</Text>
                                          </View>
                                          <View>
                                            <View style={styles.timeview}>
                                              <Text style={styles.timetext}>35</Text>
                                            </View>
                                            <Text style={styles.hourtext}>Sec</Text>
                                          </View>
                                        </View>
                                        <View style={styles.textviewrow}>
                                          <Text>{String.USD}</Text>
                                          <Text style={styles.USDyext}> {String.USD}</Text>
                                        </View>
                                      </TouchableOpacity>

                                    </View>
                                  </View>

                                </Swiper>
                              </View>
                            </View>

                            {/* Products */}


                            <Text style={[styles.populartext, { color: "#000" }]}>{String.Products}</Text>

                            <View style={styles.mainviewswiper2}>
                              <View style={styles.swiperrowview2}>
                                <Swiper
                                  loop={false}
                                  dot={<View style={styles.dotStyle2} />}
                                  activeDot={<View style={styles.activeDotStyle2} />}
                                  paginationStyle={{ height: '2%', alignSelf: "center", marginBottom: -10 }}
                                  style={styles.buttonWrapperStyle}
                                // ref={(ref) => {
                                //     swiperRef.current = ref;
                                // }}
                                // showsPagination={false}
                                >
                                  <View style={styles.slide1}>
                                    <View style={styles.productsview}>
                                      <TouchableOpacity style={styles.swiperview}>
                                        <Image source={icons.heardphone} style={styles.headphonesecondimg}></Image>
                                        <Text style={styles.jbltext}>{String.JBL}</Text>
                                        <Text style={styles.Excellent}>{String.WatcExcellent}</Text>
                                        <View style={styles.timerow}>
                                          <View>
                                            <View style={styles.timeview}>
                                              <Text style={styles.timetext}>04</Text>
                                            </View>
                                            <Text style={styles.hourtext}>Hour</Text>
                                          </View>
                                          <View>
                                            <View style={styles.timeview}>
                                              <Text style={styles.timetext}>18</Text>
                                            </View>
                                            <Text style={styles.hourtext}>Min</Text>
                                          </View>
                                          <View>
                                            <View style={styles.timeview}>
                                              <Text style={styles.timetext}>35</Text>
                                            </View>
                                            <Text style={styles.hourtext}>Sec</Text>
                                          </View>
                                        </View>
                                        <View style={styles.textviewrow}>
                                          <Text>{String.USD}</Text>
                                          <Text style={styles.USDyext}> {String.USD}</Text>
                                        </View>
                                      </TouchableOpacity>
                                      <TouchableOpacity style={styles.swiperview}>
                                        <Image source={icons.watch} style={styles.watchimg}></Image>
                                        <Text style={styles.jbltext}>{String.Apple}</Text>
                                        <Text style={styles.Excellent}>{String.CellularSmart}</Text>
                                        <View style={styles.timerow}>
                                          <View>
                                            <View style={styles.timeview}>
                                              <Text style={styles.timetext}>04</Text>
                                            </View>
                                            <Text style={styles.hourtext}>Hour</Text>
                                          </View>
                                          <View>
                                            <View style={styles.timeview}>
                                              <Text style={styles.timetext}>18</Text>
                                            </View>
                                            <Text style={styles.hourtext}>Min</Text>
                                          </View>
                                          <View>
                                            <View style={styles.timeview}>
                                              <Text style={styles.timetext}>35</Text>
                                            </View>
                                            <Text style={styles.hourtext}>Sec</Text>
                                          </View>
                                        </View>
                                        <View style={styles.textviewrow}>
                                          <Text>{String.USD}</Text>
                                          <Text style={styles.USDyext}> {String.USD}</Text>
                                        </View>
                                      </TouchableOpacity>
                                    </View>
                                  </View>

                                  <View style={styles.slide1}>
                                    <View style={styles.productsview}>
                                      <TouchableOpacity style={styles.swiperview}>
                                        <Image source={icons.heardphone} style={styles.headphonesecondimg}></Image>
                                        <Text style={styles.jbltext}>{String.JBL}</Text>
                                        <Text style={styles.Excellent}>{String.WatcExcellent}</Text>
                                        <View style={styles.timerow}>
                                          <View>
                                            <View style={styles.timeview}>
                                              <Text style={styles.timetext}>04</Text>
                                            </View>
                                            <Text style={styles.hourtext}>Hour</Text>
                                          </View>
                                          <View>
                                            <View style={styles.timeview}>
                                              <Text style={styles.timetext}>18</Text>
                                            </View>
                                            <Text style={styles.hourtext}>Min</Text>
                                          </View>
                                          <View>
                                            <View style={styles.timeview}>
                                              <Text style={styles.timetext}>35</Text>
                                            </View>
                                            <Text style={styles.hourtext}>Sec</Text>
                                          </View>
                                        </View>
                                        <View style={styles.textviewrow}>
                                          <Text>{String.USD}</Text>
                                          <Text style={styles.USDyext}> {String.USD}</Text>
                                        </View>
                                      </TouchableOpacity>
                                      <TouchableOpacity style={styles.swiperview}>
                                        <Image source={icons.watch} style={styles.watchimg}></Image>
                                        <Text style={styles.jbltext}>{String.Apple}</Text>
                                        <Text style={styles.Excellent}>{String.CellularSmart}</Text>
                                        <View style={styles.timerow}>
                                          <View>
                                            <View style={styles.timeview}>
                                              <Text style={styles.timetext}>04</Text>
                                            </View>
                                            <Text style={styles.hourtext}>Hour</Text>
                                          </View>
                                          <View>
                                            <View style={styles.timeview}>
                                              <Text style={styles.timetext}>18</Text>
                                            </View>
                                            <Text style={styles.hourtext}>Min</Text>
                                          </View>
                                          <View>
                                            <View style={styles.timeview}>
                                              <Text style={styles.timetext}>35</Text>
                                            </View>
                                            <Text style={styles.hourtext}>Sec</Text>
                                          </View>
                                        </View>
                                        <View style={styles.textviewrow}>
                                          <Text>{String.USD}</Text>
                                          <Text style={styles.USDyext}> {String.USD}</Text>
                                        </View>
                                      </TouchableOpacity>

                                    </View>
                                  </View>

                                </Swiper>
                              </View>
                            </View>
                          </View>) : null}

                        </ScrollView>
                        <View style={[styles.bottombarstyle]}>

                          <View style={styles.flexdract}>
                            <View onPress={() => {
                              {
                                selectbottom(1);

                              }
                            }} style={styles.maricon}>
                              <Image source={icons.homwtwo} style={[styles.imgbottom,
                              {
                                tintColor: '#006800',
                                //  tintColor:is_bottom === 1 ? '#006800' : 'null'
                              }]}></Image>
                            </View>

                            <View onPress={() => {
                              {
                                selectbottom(2);

                              }
                            }}>
                              <Image source={icons.sendone} style={[styles.imgbottom,
                                // {tintColor:is_bottom === 2 ? '#006800' : '#838383'}
                              ]}></Image>
                            </View>
                            <View onPress={() => {
                              {
                                selectbottom(3);

                              }
                            }}>
                              <Image source={icons.liketwo} style={[styles.imgbottom,
                                // {tintColor:is_bottom === 3 ? '#006800' : '#838383'}
                              ]}></Image>
                            </View>
                          </View>
                        </View>
                      </View>

                    </View>
                  </TouchableOpacity>

                </View>
              </View>
              <ImageBackground source={icons.logoutimg} style={styles.loginimgstyle}>
                <TouchableOpacity onPress={() => { navigation.navigate('Login') }} style={styles.bacimagesflexrow}>
                  <Image source={icons.Logout2} style={styles.Logout}></Image>
                  <Text style={styles.logouttext}>{String.logout}</Text>
                </TouchableOpacity>
              </ImageBackground>
            </Animated.View>
          </ReactNativeModal>
        </Animated.View>
        <ReactNativeModal
          isVisible={modalVisible2}
          onBackdropPress={toggleModal2}
          transparent={true}
          backdropColor={'rgba(0, 0, 0, 0.9)'}
          style={{ margin: 0, bottom: 0 }}

        >
          <View style={styles.modelview}>
            <View style={styles.triangle} />
            <TouchableOpacity onPress={() => { setModalVisible2(false) }}>
              <View style={styles.slectelang}>
                <View style={styles.dostview}></View>
                <Text style={styles.engilishtext}>English</Text>
              </View>
            </TouchableOpacity >
            <View style={styles.englshview}></View>
            <TouchableOpacity onPress={() => { setModalVisible2(false) }}>
              <View style={styles.slectelang}>
                <View style={styles.dostview}></View>
                <Text style={styles.engilishtext}>India</Text>
              </View>
            </TouchableOpacity >
            <View style={styles.englshview}></View>
            <TouchableOpacity onPress={() => { setModalVisible2(false) }}>
              <View style={styles.slectelang}>
                <View style={styles.dostview}></View>
                <Text style={styles.engilishtext}>Arabic</Text>
              </View>
            </TouchableOpacity>
            {/* <View style={styles.englshview}></View> */}
          </View>
          {/* <View style={styles.triangle} /> */}
        </ReactNativeModal>
        <View style={styles.marbott} />
        <ReactNativeModal
          isVisible={modalVisible3}
          onBackdropPress={toggleModal3}
          transparent={true}
          backdropColor={'rgba(0, 0, 0, 0.8)'}
          style={{ margin: 0, bottom: 0 }}
          backdropOpacity={0.5}
        >
          <View style={styles.ratingmodel}>
            <Text style={styles.rateinftext}>Rating</Text>
            <View style={styles.rateinrowflex}>
              {[...Array(5).keys()].map(index => (
                <TouchableOpacity
                  key={index}
                  style={styles.margstar}
                  onPress={() => handleRatingPress(itemId, index)}
                >
                  <Image
                    source={index < currentRating ? icons.starrating : icons.star}
                    style={[styles.selectedStar, index < currentRating && styles.startwo]}
                  />
                </TouchableOpacity>
              ))}
            </View>
            <Text style={styles.ratingText}>Current Rating: {currentRating}/5</Text>
          </View>
        </ReactNativeModal>
      </ScrollView>
    </View>
  )
}

export default Home

