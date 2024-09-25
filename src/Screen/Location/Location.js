import { FlatList, Image, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { styles } from './styles';
import { String } from '../../Helper/string';
import { icons } from '../../Helper/icons';
import { Province } from '../Province';
import { allcityes } from '../allcityes';
import { District } from '../District';
import GreenButton from '../../Componets/GreenButton/GreenButton';

const Location = () => {
    const [mapReady, setMapReady] = useState(false);
    const mapRef = useRef(null);

    const initialRegion = {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    useEffect(() => {
        if (mapReady) {
            mapRef.current.animateToRegion(initialRegion, 1000);
        }
    }, [mapReady]);

    const handleMapLayout = () => {
        setMapReady(true);
    };

    const [showCountryList, setShowCountryList] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(Province[0]);
    const [showCityList, setShowCityList] = useState(false);
    const [selectedCity, setSelectedCity] = useState(allcityes[0]);
    const [selecteddest, setSelectedStri] = useState(allcityes[0]);
    const [showdestList, setShowDtsList] = useState(false);
    const [is_focused, setIs_Focused] = useState(false);
    const [focusedItem, setFocusedItem] = useState(null);
    const [address, setAddress] = useState(null);

    const SelectProvince = (id) => {
        setIs_Focused(id);
    };

    const handlePress = (item) => {
        setSelectedCountry(item);
        setShowCountryList(false);
        SelectProvince();
        setFocusedItem(item);
    };

    const handlePress2 = (item) => {
        setSelectedCity(item);
        setShowCityList(false);
        SelectProvince();
        setFocusedItem(item);
    };
    const handlePress3 = (item) => {
        setSelectedStri(item);
        setShowDtsList(false);
        SelectProvince();
        setFocusedItem(item);
    };
    const renderCountryItem = ({ item }) => {
        const isFocused = focusedItem === item;

        return (
            <View>
                <TouchableOpacity
                    style={[styles.countryItem, isFocused && styles.focused]}
                    onPress={() => handlePress(item)}
                >
                    <Image source={item.image} style={styles.fageimg} />
                    <Text style={[styles.textstyle, { color: isFocused ? '#35B257' : '#000' }]}>{item.label}</Text>
                </TouchableOpacity>
                <View style={[styles.lineview2, { backgroundColor: isFocused ? '#35B257' : '#000' }]}></View>
            </View>
        );
    };

    const renderCountryItem2 = ({ item }) => {
        const isFocused = focusedItem === item;

        return (
            <View>
                <TouchableOpacity
                    style={[styles.countryItem, styles.countryItemtwo, isFocused && styles.focused]}
                    onPress={() => handlePress2(item)}
                >
                    <View style={styles.dotsview}></View>
                    <Text style={[styles.textstyle, { color: isFocused ? '#35B257' : '#000' }]}>{item.label}</Text>
                </TouchableOpacity>
                <View style={[styles.lineview2, { backgroundColor: isFocused ? '#35B257' : '#000' }]}></View>
            </View>
        );
    };
    const renderCountryItem3 = ({ item }) => {
        const isFocused = focusedItem === item;

        return (
            <View>
                <TouchableOpacity
                    style={[styles.countryItem, styles.countryItemtwo, isFocused && styles.focused]}
                    onPress={() => handlePress3(item)}
                >
                    <View style={styles.dotsview}></View>
                    <Text style={[styles.textstyle, { color: isFocused ? '#35B257' : '#000' }]}>{item.label}</Text>
                </TouchableOpacity>
                <View style={[styles.lineview2, { backgroundColor: isFocused ? '#35B257' : '#000' }]}></View>
            </View>
        );
    };
    return (
        <View style={styles.container}>
            <View style={styles.mapview}>
                <MapView
                    ref={mapRef}
                    style={styles.map}
                    initialRegion={initialRegion}
                    onLayout={handleMapLayout}
                >
                    <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} />
                </MapView>
            </View>
            <View style={styles.selectedlocationview}>
                <ScrollView>
                    <Text style={styles.SelectLocationtext}>{String.SelectLocation}</Text>
                    <Text style={styles.YourLocationtext}>{String.YourLocation}</Text>
                    <TextInput
                placeholder="Enter Your Address"
                placeholderTextColor="#8391A1"
                value={address}
                onChangeText={(address) => setAddress(address)}
                style={styles.input}
              />
                    {/* <Text style={styles.YourLocationtextwo}>{String.AnaIllinois}</Text> */}
                    <View style={styles.lineview}></View>
                    <Text style={styles.sveastext}>{String.SaveAs}</Text>

                    <TouchableOpacity onPress={() => setShowCountryList(true)} style={styles.mainview}>
                        <Image source={icons.loc} style={styles.mapstyleimages}></Image>

                        {selectedCountry ? (
                            <Text style={styles.SelectProvincetxt}>{selectedCountry.label}</Text>
                        ) : (
                            <Text style={styles.SelectProvincetxt}>{String.SelectProvince}</Text>
                        )}

                        <TouchableOpacity onPress={() => setShowCountryList(true)} style={styles.arroestyle}>
                            <Image source={icons.arrowright} style={styles.downarrow}></Image>
                        </TouchableOpacity>
                    </TouchableOpacity>

                    <Modal visible={showCountryList} animationType="slide" transparent={true}>
                        <View style={styles.modalView}>
                            <TouchableWithoutFeedback onPress={() => setShowCountryList(false)}>
                                <View style={styles.modalBackground} />
                            </TouchableWithoutFeedback>
                            <FlatList
                                data={Province}
                                renderItem={renderCountryItem}
                                keyExtractor={(item, index) => index.toString()}
                                style={styles.countryList}
                            />
                        </View>
                    </Modal>

                    <View style={styles.flexrowviewbox}>
                        <TouchableOpacity onPress={() => setShowCityList(true)} style={styles.boxbuttonview}>
                            <View style={styles.selectrowview}>
                                <Image source={icons.building} style={styles.cityimg}></Image>
                                {selectedCity ? (
                                    <Text style={styles.SelectProvincetxt}>{selectedCity.label}</Text>
                                ) : (
                                    <Text style={styles.SelectProvincetxt}>{String.city}</Text>
                                )}
                                <TouchableOpacity onPress={() => setShowCityList(true)} style={styles.arroestyle}>
                                    <Image source={icons.arrowright} style={styles.downarrow}></Image>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.boxbuttonview}>
                            <TouchableOpacity onPress={() => setShowDtsList(true)} style={styles.selectrowview}>
                                <Image source={icons.places} style={styles.cityimg}></Image>
                                {selecteddest ? (
                                    <Text style={styles.SelectProvincetxt}>{selecteddest.label}</Text>
                                ) : (
                                    <Text style={styles.SelectProvincetxt}>{String.District}</Text>
                                )}
                                <TouchableOpacity onPress={() => setShowDtsList(true)} style={styles.arroestyle}>
                                    <Image source={icons.arrowright} style={styles.downarrow}></Image>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <GreenButton title={String.SAVEADDRESS} loctionbutton={styles.loctionbutton} />
                <View style={styles.locationmapviewmar}></View>
                </ScrollView>
                <View style={styles.marto}></View>
            </View>

            <Modal visible={showCityList} animationType="slide" transparent={true}>
                <View style={styles.modalView2}>
                    <TouchableWithoutFeedback onPress={() => setShowCityList(false)}>
                        <View style={styles.modalBackground} />
                    </TouchableWithoutFeedback>
                    <FlatList
                        data={allcityes}
                        renderItem={renderCountryItem2}
                        keyExtractor={(item, index) => index.toString()}
                        style={styles.countryList}
                    />
                </View>
            </Modal>
            <Modal visible={showdestList} animationType="slide" transparent={true}>
                <View style={styles.modalView2}>
                    <TouchableWithoutFeedback onPress={() => setShowDtsList(false)}>
                        <View style={styles.modalBackground} />
                    </TouchableWithoutFeedback>
                    <FlatList
                        data={District}
                        renderItem={renderCountryItem3}
                        keyExtractor={(item, index) => index.toString()}
                        style={styles.countryList}
                    />
                </View>
            </Modal>
        </View>
    );
};

export default Location;
