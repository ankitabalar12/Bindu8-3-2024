import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';
import { icons } from '../../Helper/icons';
import { Image } from 'react-native';
import { String } from '../../Helper/string';
import { ImageBackground } from 'react-native';
import { useTheme } from '../../Componets/ThemeContext';

const AllDetails = () => {
    const navigation = useNavigation();
    const [is_selectimg, setIs_SelectImg] = useState('')
    const [count, setCount] = useState(0);
    const [expanded, setExpanded] = useState(false);
    const [is_action, setIs_Action] = useState();
    const [is_releted, setIs_Releted] = useState();
    const { theme, themeStyles, themeStylestext, updateThemeForAllScreens } = useTheme();
    useEffect(() => {
        const id = 1;
        setIs_SelectImg(id);
    }, []);
    const goBack = () => {
        navigation.goBack();
    };
    const selectimg = (id) => {
        setIs_SelectImg(id)
    };
    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };
    const toggleExpanded = () => {
        setExpanded(!expanded);
    };
    const toggleaction = (id) => {
        setIs_Action(id);
    };
    const togglereleted = (id) => {
        setIs_Releted(id);
    };

    return (
        <ScrollView style={[styles.container,{ backgroundColor: themeStyles[theme].backgroundColor }]}>
            <View style={styles.flexrowstyle}>
                <View style={styles.imgrowview}>
                    <TouchableOpacity onPress={goBack} style={styles.arrowview}>
                        <Image source={icons.arrow} style={styles.arrowstyle}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        selectimg(1)
                    }} style={[styles.imgview, { borderColor: is_selectimg === 1 ? '#000' : '#E6E6E6' }]}>
                        <Image source={icons.headphonesecond} style={styles.headphonestyle}></Image>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        selectimg(2)
                    }} style={[styles.imgview, { borderColor: is_selectimg === 2 ? '#000' : '#E6E6E6' }]}>
                        <Image source={icons.newhad} style={styles.headphonestyle}></Image>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        selectimg(3)
                    }} style={[styles.imgview, { borderColor: is_selectimg === 3 ? '#000' : '#E6E6E6' }]}>
                        <Image source={icons.sideimghead} style={styles.headphonestyle}></Image>

                    </TouchableOpacity>
                </View>
                <View style={styles.imgrowviewtwo}>
                    {is_selectimg === 1 && (
                        <Image source={icons.headphonesecond} style={styles.headphonestyleselect}></Image>
                    )}
                    {is_selectimg === 2 && (
                        <Image source={icons.newhad} style={styles.headphonestyleselect}></Image>
                    )}
                    {is_selectimg === 3 && (
                        <Image source={icons.sideimghead} style={styles.headphonestyleselect}></Image>
                    )}

                </View>

            </View>
            <View style={styles.textviewrow}>
                <Text style={[styles.titletext,{ color: themeStyles[theme].textColor }]}>{String.JBL}</Text>
                <TouchableOpacity style={styles.imgposition}>
                    <Image source={icons.share2} style={[styles.sharestyle,{ tintColor: themeStyles[theme].iconColor }]}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imgpositiontwo}>
                    <Image source={icons.Heart2} style={styles.Heartstyle}></Image>
                </TouchableOpacity>
            </View>
            <Text style={[styles.dcriptiontext,{ color: themeStyles[theme].graytext }]}>{String.Wireless}</Text>
            <View style={styles.greenview}>
                <View style={styles.flexrowviewtwo}>
                    <View style={styles.textview}>
                        <Text style={styles.Pricetxt}>{String.Price}</Text>
                        <Text style={styles.USDstyle}>{String.USD}</Text>
                        <Text style={styles.Pricetxt}>{String.Real}</Text>
                    </View>
                    <View style={styles.viewline}>
                        <View style={styles.dashline}>

                        </View>
                    </View>
                    <View style={styles.timeview}>
                        <View style={styles.flexdractionrow}>
                            <View>
                                <View style={styles.hourview}>
                                    <Text style={styles.doutstylesty}>0.4</Text>
                                </View>
                                <Text style={styles.stylehrs}>Hrs</Text>
                            </View>
                            <Text style={styles.doutstyle}>:</Text>
                            <View>
                                <View style={styles.hourview}>
                                    <Text style={styles.doutstylesty}>0.3</Text>
                                </View>
                                <Text style={styles.stylehrs}>Min</Text>
                            </View>
                            <Text style={styles.doutstyle}>:</Text>
                            <View>
                                <View style={styles.hourview}>
                                    <Text style={styles.doutstylesty}>4.3</Text>
                                </View>
                                <Text style={styles.stylehrs}>Sec</Text>
                            </View>

                        </View>
                        {/* <View style={styles.flexrowviewtwo}>
                            <Text style={styles.stylehrs}>Hrs</Text>
                            <Text>Min</Text>
                            <Text>Sec</Text>
                        </View> */}

                    </View>
                </View>
            </View>
            <View style={styles.flexrowthree}>
                <TouchableOpacity onPress={decrement} style={styles.incersecview}>
                    <Text style={styles.textline}>-</Text>
                </TouchableOpacity>
                <Text style={[styles.numbertext,{ color: themeStyles[theme].textColor }]}>{count}</Text>
                <TouchableOpacity onPress={increment} style={styles.dicersecview}>
                    <Text style={styles.textline}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bidview}>
                    <Text style={styles.bidtext}>{String.BID}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.witheview}>
                <View style={styles.proconflexrow}>
                    <View style={styles.ProductIDview}>
                        <View style={styles.productflex}>
                          
                                <Image source={icons.tages} style={styles.producticon}></Image>
                          
                            <View style={styles.idnumber}>
                                <Text style={styles.Producttext}>{String.ProductID}</Text>
                                <Text style={styles.numbertextttext}>#37990</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.dotsview}>
                        <View style={styles.deshtline}></View>
                    </View>
                    <View style={styles.Conditionview}>
                        <View style={styles.productflex}>
                          
                                <Image source={icons.chacknots} style={styles.producticon}></Image>
                         
                            <View style={styles.idnumber}>
                                <Text style={styles.Producttext}>{String.Condition}</Text>
                                <Text style={styles.numbertextttext}>New</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.greenviewbig}>
                <View style={styles.alartflex}>
                    <Image source={icons.errortwo} style={styles.alartimg}></Image>
                    <Text style={styles.Alerttextstyle}>{String.Alert}</Text>
                </View>
                <Text style={styles.Guaranteetext}>{String.Guarantee}</Text>
                <View style={styles.alartflex}>
                    <Image source={icons.book2} style={styles.Discriptionimg}></Image>
                    <Text style={styles.Alerttextstyle}>{String.Discription}</Text>
                </View>
                <View style={styles.disflex}>
                    <Text
                        numberOfLines={expanded ? undefined : 1}
                        style={[styles.Guaranteetext, styles.Guaranteetexttow]}>{String.LoremIpsum}</Text>
                    <TouchableOpacity onPress={toggleExpanded} style={styles.viewmorside}>
                        <Text
                            style={styles.viewmorethex}> {String.ViewMore}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.alartflex}>
                    <Image source={icons.tag2} style={styles.tag2styles}></Image>
                    <Text style={styles.Alerttextstyle}>{String.Attributes}</Text>
                </View>
                <View style={styles.textattribt}>
                    <Text style={styles.LAPTOPtext}>LAPTOP</Text>
                    <Text style={styles.LAPTOPtext}>NON</Text>
                </View>
            </View>
            <View style={styles.actionviewbig}>
                <View style={styles.threeviewrow}>
                    <TouchableOpacity onPress={() => {
                        toggleaction(1)
                    }} style={[styles.threeviewstyle, { backgroundColor: is_action === 1 ? '#35B257' : '#fff', borderColor: is_action === 1 ? '#35B257' : '#000' }]}>
                        <Text style={[styles.numbertextstyle, { color: is_action === 1 ? '#fff' : '#000' }]}>1.</Text>
                        <Image source={icons.auctions} style={[styles.viewimg, { tintColor: is_action === 1 ? '#fff' : '#000' }]}></Image>
                        <Text style={[styles.actiontext, { color: is_action === 1 ? '#fff' : '#000' }]}>{String.Auctions}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        toggleaction(2)
                    }} style={[styles.threeviewstyle, { backgroundColor: is_action === 2 ? '#35B257' : '#fff', borderColor: is_action === 2 ? '#35B257' : '#000' }]}>
                        <Text style={[styles.numbertextstyle, { color: is_action === 2 ? '#fff' : '#000' }]}>2.</Text>
                        <Image source={icons.acutioner} style={[styles.xyzimg, { tintColor: is_action === 2 ? '#fff' : '#000' }]}></Image>
                        <Text style={[styles.actiontext, { color: is_action === 2 ? '#fff' : '#000' }]}>{String.acutioner}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        toggleaction(3)
                    }} style={[styles.threeviewstyle, { backgroundColor: is_action === 3 ? '#35B257' : '#fff', borderColor: is_action === 3 ? '#35B257' : '#000' }]}>
                        <Text style={[styles.numbertextstyle, { color: is_action === 3 ? '#fff' : '#000' }]}>3.</Text>
                        <Image source={icons.views} style={[styles.viewimg, { tintColor: is_action === 3 ? '#fff' : '#000' }]}></Image>
                        <Text style={[styles.actiontext, { color: is_action === 3 ? '#fff' : '#000' }]}>{String.views}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={[styles.ReletedProducttext,{ color: themeStyles[theme].textColor }]}>{String.ReletedProduct}</Text>
            <TouchableOpacity onPress={() => {
                togglereleted(1)
            }} style={[styles.reletedproductview,{borderColor:is_releted === 1 ? '#BABABA' : '#fff'}]}>
                <View style={styles.imgvie}>
                    <Image source={icons.headphonesecond} style={styles.headphonesecondim}></Image>
                </View>
                <View style={styles.viewtextre}>
                    <Text style={styles.jbltextstyle}>{String.JBL}</Text>
                    <Text style={styles.wirtext}>{String.Wireless}</Text>
                    <View style={styles.flexdrxtexrow}>
                        <Text style={styles.us}>$2 USD</Text>
                        <Text style={styles.uss}>/$ 35 USD</Text>
                    </View>
                </View>
                <View style={styles.viewtime}>
                    <View style={styles.timeprorow}>
                        <View>
                            <View style={styles.timerowvie}>
                                <Text style={styles.numtime}>03</Text>
                            </View>
                            <Text style={styles.retexthour}>Hour</Text>
                        </View>
                        <View>
                            <View style={styles.timerowvie}>
                                <Text style={styles.numtime}>33</Text>
                            </View>
                            <Text style={styles.retexthour}>Min</Text>
                        </View>
                        <View>
                            <View style={styles.timerowvie}>
                                <Text style={styles.numtime}>52</Text>
                            </View>
                            <Text style={styles.retexthour}>Sec</Text>
                        </View>
                    </View>
                </View>

            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                togglereleted(2)
            }} style={[styles.reletedproductview,{borderColor:is_releted === 2 ? '#BABABA' : '#fff'}]}>
                <View style={styles.imgvie}>
                    <Image source={icons.headphonesecond} style={styles.headphonesecondim}></Image>
                </View>
                <View style={styles.viewtextre}>
                    <Text style={styles.jbltextstyle}>{String.JBL}</Text>
                    <Text style={styles.wirtext}>{String.Wireless}</Text>
                    <View style={styles.flexdrxtexrow}>
                        <Text style={styles.us}>$2 USD</Text>
                        <Text style={styles.uss}>/$ 35 USD</Text>
                    </View>
                </View>
                <View style={styles.viewtime}>
                    <View style={styles.timeprorow}>
                        <View>
                            <View style={styles.timerowvie}>
                                <Text style={styles.numtime}>03</Text>
                            </View>
                            <Text style={styles.retexthour}>Hour</Text>
                        </View>
                        <View>
                            <View style={styles.timerowvie}>
                                <Text style={styles.numtime}>33</Text>
                            </View>
                            <Text style={styles.retexthour}>Min</Text>
                        </View>
                        <View>
                            <View style={styles.timerowvie}>
                                <Text style={styles.numtime}>52</Text>
                            </View>
                            <Text style={styles.retexthour}>Sec</Text>
                        </View>
                    </View>
                </View>

            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                togglereleted(3)
            }} style={[styles.reletedproductview,{borderColor:is_releted === 3 ? '#BABABA' : '#fff'}]}>
                <View style={styles.imgvie}>
                    <Image source={icons.headphonesecond} style={styles.headphonesecondim}></Image>
                </View>
                <View style={styles.viewtextre}>
                    <Text style={styles.jbltextstyle}>{String.JBL}</Text>
                    <Text style={styles.wirtext}>{String.Wireless}</Text>
                    <View style={styles.flexdrxtexrow}>
                        <Text style={styles.us}>$2 USD</Text>
                        <Text style={styles.uss}>/$ 35 USD</Text>
                    </View>
                </View>
                <View style={styles.viewtime}>
                    <View style={styles.timeprorow}>
                        <View>
                            <View style={styles.timerowvie}>
                                <Text style={styles.numtime}>03</Text>
                            </View>
                            <Text style={styles.retexthour}>Hour</Text>
                        </View>
                        <View>
                            <View style={styles.timerowvie}>
                                <Text style={styles.numtime}>33</Text>
                            </View>
                            <Text style={styles.retexthour}>Min</Text>
                        </View>
                        <View>
                            <View style={styles.timerowvie}>
                                <Text style={styles.numtime}>52</Text>
                            </View>
                            <Text style={styles.retexthour}>Sec</Text>
                        </View>
                    </View>
                </View>

            </TouchableOpacity>
            <View style={styles.bottommar} />
        </ScrollView>
    )
}

export default AllDetails

