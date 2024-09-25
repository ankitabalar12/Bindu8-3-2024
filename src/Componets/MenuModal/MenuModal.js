import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ReactNativeModal from 'react-native-modal'
import { Image } from 'react-native'
import { icons } from '../../Helper/icons'



const MenuModal = ({ isVisible,
    backdropColor,
    backdropOpacity,
    onBackdropPress,
    supportedOrientations,
    transparent,
    swipeDirection,
    title,
    style,
    modalestyle
}) => {
    const [modalVisible, setModalVisible] = useState()


    //   useEffect(() => {
    //     const myfilterpropertyDate = async () => {
    //       const userdata = await AsyncStorage.getItem('logindata');
    //       const finaluserdata = JSON.parse(userdata);
    //       };
    //     //  navigation.addListener('focus', () => {
    //     myfilterpropertyDate();

    //     // })
    //   }, [])

    return (
        <View>
            <ReactNativeModal
                isVisible={isVisible}
                backdropColor={backdropColor}
                backdropOpacity={backdropOpacity}
                onBackdropPress={onBackdropPress}
                supportedOrientations={supportedOrientations}
                swipeDirection={swipeDirection}
                style={style}
                transparent={transparent}
                onSwipeComplete={() => setModalVisible(false)}
                onRequestClose={() => {
                    setModalVisible(false)
                }}>
                <View style={styles.backcoloeview}>
                    <View style={styles.flexdractionrow}>
                        <TouchableOpacity>
                            <Image source={icons.Rectangle} style={styles.profieimges}></Image>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            setModalVisible(false)
                        }} style={styles.closeiconview}>
                            <Image source={icons.closemodelicon} style={styles.closeimges}></Image>
                        </TouchableOpacity>

                    </View>
                </View>
            </ReactNativeModal>
        </View>
    )
}

export default MenuModal

const styles = StyleSheet.create({
    backcoloeview: {
        height: '100%',
        width: "100%",
        // backgroundColor: "rgba(255, 255, 255, 0.5)",
        backgroundColor: "#000",
        // justifyContent: "center",
        //  marginTop:"7%"
    },
    martopview: {
        marginTop: '6%'
    },
    //   mainview: {
    //     height: 40,
    //     width: "85%",
    //     backgroundColor: "#000",
    //     borderColor: "#BFBFBF",
    //     borderWidth: 1,
    //     alignSelf: "center",
    //     justifyContent: "center",
    //     borderRadius: 27,
    //     marginTop: "5%",
    //     shadowOffset: {
    //       width: 0,
    //       height: 1,
    //     },
    //     shadowOpacity: 0.25,
    //     shadowRadius: 3.84,
    //     elevation: 5,
    //   },

    flexdractionrow: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginHorizontal: "5%",
        marginTop: "5%"
    },
    profieimges: {
        height: 70,
        width: 70
    },
    closeimges: {
        height: 7,
        width: 7,
        tintColor: "#fff",
        alignSelf: "center"
    },
    closeiconview: {
        height: 25,
        width: 25,
        borderRadius: 20, borderColor: "#fff",
        borderWidth: 2,
        justifyContent: 'center'
    }
})