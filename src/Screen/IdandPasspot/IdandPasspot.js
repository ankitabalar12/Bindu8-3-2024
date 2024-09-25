import { ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { String } from '../../Helper/string'
import { icons } from '../../Helper/icons'
import ReactNativeModal from 'react-native-modal'

import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from './styles'
import { ActivityIndicator } from 'react-native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'

const IdandPasspot = () => {
  const navigation = useNavigation();
  const [is_select, setIs_Select] = useState()
  const [modalVisible, setModalVisible] = useState()
  const [modalVisible2, setModalVisible2] = useState()
  const [is_selectbutton, setIs_Selectbutton] = useState()
  const [loading, setLoading] = useState(false)
  const [modalVisible3, setModalVisible3] = useState()
  const [imageUri, setImageUri] = useState(null);
  const [isArrowVisible, setArrowVisible] = useState(true);
  const [isCameraOpened, setCameraOpened] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible)
  }
  const toggleModal2 = () => {
    setModalVisible2(!modalVisible2)
  }
  const toggleModal3 = () => {
    setModalVisible3(!modalVisible3)
  }
  const goBack = () => {
    navigation.goBack();
  };
  const selcetbutton = (id) => {
    setIs_Select(id)
  }
  const selcetediteandsubmit = (id) => {
    setIs_Selectbutton(id)
  }
  const toggleArrowVisibility = () => {
    setCameraOpened(!isCameraOpened);
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
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffff" />
      <ScrollView>
        <TouchableOpacity onPress={goBack} style={styles.leftarroeview}>
          <Image source={icons.arrow} style={styles.arrowstyle}></Image>
        </TouchableOpacity>
        {!isCameraOpened ? (
          <>
            <Image source={icons.undrawationresvpt} style={styles.idpassimg}></Image>


            <View style={styles.dwonarrowflex}>
              <Text style={styles.logintext}>{String.IDPASSPORT}</Text>
              {isArrowVisible && (
                <TouchableOpacity onPress={() => {
                  setModalVisible3(true)
                }} style={styles.martopstyle}>
                  <Image source={icons.down} style={styles.downstyle}></Image>
                </TouchableOpacity>
              )}

            </View>
            <Text style={styles.welcometext}>{String.Pleaseprovide}</Text>
            {/* <ImageBackground source={icons.Groupback} style={styles.Groupbackimg}>
              <Image source={icons.card} style={styles.cardstyle}></Image>
            </ImageBackground> */}
            <Image source={icons.card2} style={styles.Groupbackimg}></Image>

          </>
        ) : (
          <>
            <Text style={styles.logintext}>{String.IDPASSPORT}</Text>
            <Text style={styles.welcometext}>{String.Pleaseprovide}</Text>
            {imageUri ? (
              <Image source={{ uri: imageUri }} style={styles.profileimgstyletwo}></Image>
            ) : (
              <Image source={icons.profileimg} style={styles.profileimgstyle}></Image>)

            }
          </>
        )}



        {!isCameraOpened && (
          <View style={styles.flexdraction}>
            <TouchableOpacity onPress={() => {
              selcetbutton(1);
              goBack()


            }} style={[is_select === 1 ? styles.alltextstyleback : styles.alltextstylwithe]}>
              <Text style={[styles.alltextstyle, { color: is_select === 1 ? "#fff" : '#35B257' }]}>{String.Previous}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              selcetbutton(2);
              navigation.navigate('UpdateApp')
            }} style={[is_select === 2 ? styles.alltextstyleback : styles.alltextstylwithe]}>
              <Text style={[styles.alltextstyle, { color: is_select === 2 ? "#fff" : '#35B257' }]}>{String.skip}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
              selcetbutton(3);
              setModalVisible(true)
              setArrowVisible(false)
            }} style={[is_select === 3 ? styles.alltextstyleback : styles.alltextstylwithe]}>
              <Text style={[styles.alltextstyle, { color: is_select === 3 ? "#fff" : '#35B257' }]}>{String.Next}</Text>
            </TouchableOpacity>


          </View>
        )}

        {loading && <ActivityIndicator size="large" color="#006800" />}

        <View style={styles.flrxrowtext}>
          <Text style={styles.gobacktext}>{String.Goback}</Text>
          <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
            <Text style={[styles.PressHeretext]}>{String.PressHere}</Text>
          </TouchableOpacity>
        </View>
        <ReactNativeModal
          isVisible={modalVisible}
          onBackdropPress={toggleModal}
          transparent={true}
          backdropColor={'rgba(0, 0, 0, 0.5)'}
          style={{ margin: 0, bottom: 0 }}
          backdropOpacity={0}>
          <View style={styles.modalviewmain}>
            <View style={styles.modalview}>
              <Text style={styles.fromtext}>{String.Fromwhere}</Text>
              <View style={styles.imagesflex}>
                <TouchableOpacity onPress={() => {
                  toggleArrowVisibility()
                  openCamera();

                }}>
                  <Image source={icons.camerapic} style={styles.imagestyles}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                  toggleArrowVisibility();
                  openLibrary()
                }}>
                  {/* <ImageBackground source={icons.Rec} style={styles.imagestylestwo}> */}
                    <Image source={icons.gallaryimg} style={styles.Groupbackimg2}></Image>
                  {/* </ImageBackground> */}
                </TouchableOpacity>
              </View>
              <View style={styles.positionback}>
                <View style={styles.backimgbottom}>
                  <TouchableOpacity onPress={() => {
                    setModalVisible(false);
                    setArrowVisible(true)

                  }} >
                    <Text style={styles.textbotom}>{String.Previous}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {
                    setModalVisible(false);
                    setModalVisible2(true)
                  }}>
                    <ImageBackground source={icons.Vector} style={styles.Vectorimgtwo}>
                      <TouchableOpacity onPress={() => {
                        setModalVisible(false);
                        setModalVisible2(true)
                      }}>
                        <Image style={styles.arrowright} source={icons.rightarrow}></Image>
                      </TouchableOpacity>
                    </ImageBackground>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ReactNativeModal>
        <ReactNativeModal
          isVisible={modalVisible2}
          onBackdropPress={toggleModal2}
          transparent={true}
          backdropColor={'rgba(0, 0, 0, 0.5)'}
          style={{ margin: 0, bottom: 0 }}
          backdropOpacity={0}>
          <View style={styles.modalviewmain}>
            <View style={styles.modalview}>
              <Text style={styles.fromtext}>{String.Wewill}</Text>
              <View style={styles.imagesflex}>
              </View>
              <View style={styles.backimgbottomtwo}>
                <TouchableOpacity onPress={() => {
                  selcetediteandsubmit(1)
                  setModalVisible2(false)
                  setModalVisible(true)
                }} style={[styles.editebutton, {
                  backgroundColor: is_selectbutton === 1 ? '#35B257' : '#2A2F3B',
                  borderColor: is_selectbutton === 1 ? "#35B257" : '#fff'
                }]}>
                  <Text style={styles.textstylebutton}>{String.Edit}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                  selcetediteandsubmit(2);
                  setModalVisible2(false)
                  navigation.navigate('Otp')
                }} style={[styles.editebutton, {
                  backgroundColor: is_selectbutton === 2 ? '#35B257' : '#2A2F3B',
                  borderColor: is_selectbutton === 2 ? "#35B257" : '#fff'
                }]}>
                  <Text style={styles.textstylebuttontwo}>{String.Submit}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ReactNativeModal>
        <ReactNativeModal
          isVisible={modalVisible3}
          onBackdropPress={toggleModal3}
          transparent={true}
          backdropColor={'rgba(0, 0, 0, 0.9)'}
          style={{ margin: 0, bottom: 0 }}

        >
          <View style={styles.modelview}>
          <View style={styles.triangle} />
            <TouchableOpacity onPress={() => {
                setModalVisible3(false)
                  }}>
              <View style={styles.slectelang}>
                <View style={styles.dostview}></View>
                <Text style={styles.engilishtext}>Id card</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.englshview}></View>
            <TouchableOpacity onPress={() => {
                setModalVisible3(false)
                  }}>
              <View style={styles.slectelang}>
                <View style={styles.dostview}></View>
                <Text style={styles.engilishtext}>Passport</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.englshview}></View>
            <TouchableOpacity onPress={() => {
                setModalVisible3(false)
                  }}>
              <View style={styles.slectelang}>
                <View style={styles.dostview}></View>
                <Text style={styles.engilishtext}>Driver license</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.englshview}></View>
            <TouchableOpacity onPress={() => {
                setModalVisible3(false)
                  }}>
              <View style={styles.slectelang}>
                <View style={styles.dostview}></View>
                <Text style={styles.engilishtext}>Others</Text>
              </View>
            </TouchableOpacity>

            {/* <View style={styles.englshview}></View> */}
          </View>
          {/* <View style={styles.triangle} /> */}
        </ReactNativeModal>


      </ScrollView>


    </View>
  )
}

export default IdandPasspot

