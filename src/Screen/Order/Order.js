import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { String } from '../../Helper/string';
import { Image } from 'react-native';
import { icons } from '../../Helper/icons';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { useTheme } from '../../Componets/ThemeContext';

const Order = () => {
    const navigation = useNavigation();
    const { theme, themeStyles } = useTheme();

    const goBack = () => {
        navigation.goBack();
    };
    const price = 22.0;
    const discount = 0.0;
    const auction = 0.22;
    const delivery = 1.0;
    const total = price + discount + auction + delivery;
    return (
        <View style={[styles.container,{ backgroundColor: themeStyles[theme].backgroundColor }]}>
            <ScrollView>
                <View style={styles.flexrowstyle}>
                    <TouchableOpacity onPress={goBack} style={styles.arrowview}>
                        <Image source={icons.arrow} style={styles.arrowstyle}></Image>
                    </TouchableOpacity>
                    <Text style={[styles.bidstextstyle,{color: themeStyles[theme].textColor}]}>{String.Order}</Text>
                </View>
                <View style={styles.orderview}>
                    <View style={styles.flexpricrow}>
                        <Text style={styles.pricetext}>{String.price}</Text>
                        <Text style={styles.pricenumber}>$ {price.toFixed(2)}</Text>
                    </View>
                    <View style={styles.borderline}></View>
                    <View style={[styles.flexpricrow, styles.flexpricrow2]}>
                        <Text style={styles.pricetext}>{String.discount}</Text>
                        <Text style={styles.pricenumber}>$ {discount.toFixed(2)}</Text>
                    </View>
                    <View style={styles.borderline}></View>
                    <View style={[styles.flexpricrow, styles.flexpricrow2]}>
                        <Text style={styles.pricetext}>{String.auction}</Text>
                        <Text style={styles.pricenumber}>$ {auction.toFixed(2)}</Text>
                    </View>
                    <View style={styles.borderline}></View>
                    <View style={[styles.flexpricrow, styles.flexpricrow2]}>
                        <Text style={styles.pricetext}>{String.Delivery}</Text>
                        <Text style={styles.pricenumber}>$ {delivery.toFixed(2)}</Text>
                    </View>
                    <View style={styles.borderline}></View>
                    <View style={[styles.flexpricrow, styles.flexpricrow2]}>
                        <Text style={styles.pricetext}>{String.TotalPri}</Text>
                        <Text style={styles.pricenumber}>{total.toFixed(2)} USD</Text>
                    </View>
                    <View style={styles.borderline}></View>
                    <View style={[styles.flexpricrow, styles.flexpricrow3]}>
                        <Text style={styles.pricetexttotal}>{String.Totalpay}</Text>
                        <Text style={styles.pricetexttotal}>{total.toFixed(2)} USD</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => { navigation.navigate('Contactus') }} style={styles.massview}>
                    <View style={styles.flexdractionrow}>
                        <View style={styles.imgesviewmass}>
                          <Image source={icons.PhotoMenu}style={styles.imagesstyle}></Image> 
                        </View>
                        <View>
                        <Text style={styles.MassagerNecktext}>{String.MassagerNeck}</Text>
                        <Text style={styles.shiatsumassagetrxt}>{String.shiatsumassage}</Text>
                        <Text style={styles.USDtrxt}>$5.0 USD</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.massview,styles.massview2]}>
                    <View style={styles.flexdractionrow}>
                        <View style={styles.imgesviewmass}>
                          <Image source={icons.PhotoMenu}style={styles.imagesstyle}></Image> 
                        </View>
                        <View>
                        <Text style={styles.MassagerNecktext}>{String.MassagerNeck}</Text>
                        <Text style={styles.shiatsumassagetrxt}>{String.shiatsumassage}</Text>
                        <Text style={styles.USDtrxt}>$5.0 USD</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.massview,styles.massview2]}>
                    <View style={styles.flexdractionrow}>
                        <View style={styles.imgesviewmass}>
                          <Image source={icons.PhotoMenu}style={styles.imagesstyle}></Image> 
                        </View>
                        <View>
                        <Text style={styles.MassagerNecktext}>{String.MassagerNeck}</Text>
                        <Text style={styles.shiatsumassagetrxt}>{String.shiatsumassage}</Text>
                        <Text style={styles.USDtrxt}>$5.0 USD</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.massview,styles.massview2]}>
                    <View style={styles.flexdractionrow}>
                        <View style={styles.imgesviewmass}>
                          <Image source={icons.PhotoMenu}style={styles.imagesstyle}></Image> 
                        </View>
                        <View>
                        <Text style={styles.MassagerNecktext}>{String.MassagerNeck}</Text>
                        <Text style={styles.shiatsumassagetrxt}>{String.shiatsumassage}</Text>
                        <Text style={styles.USDtrxt}>$5.0 USD</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.marginbottom}/>
               </ScrollView>
        </View>
    )
}

export default Order

