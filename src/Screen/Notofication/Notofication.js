import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useTheme } from '../../Componets/ThemeContext';
import { styles } from './styles';
import { icons } from '../../Helper/icons';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import { String } from '../../Helper/string';

const Notofication = () => {
  const navigation = useNavigation();
  const { theme, themeStyles, themeStylestext, updateThemeForAllScreens } = useTheme();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={[styles.container, { backgroundColor: themeStyles[theme].backgroundColor }]}>
     <ScrollView>
        <View style={styles.flexrowstyle}>
          <TouchableOpacity onPress={goBack} style={styles.arrowview}>
            <Image source={icons.arrow} style={styles.arrowstyle}></Image>
          </TouchableOpacity>
          <Text style={[styles.bidstextstyle,{color: themeStyles[theme].textColor}]}>{String.Notofication}</Text>

        </View>
        <View style={styles.notificationview}>
                    <View style={styles.flextwo}>
                        <View>
                        <View style={styles.imgview}>
                            <Image source={{uri:'https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-wearing-glasses-is-wearing-colorful-background-image_2905240.jpg'}} 
                            style={styles.imgprofile}></Image>
                        </View>
                        <Text style={styles.timetext}>2 hrs ago</Text>
                        </View>
                        <Text style={styles.msgtext}>Mr. Dhanush is away from the villa so I am replace her</Text>
                    </View>
                </View>
                <View style={styles.notificationview}>
                    <View style={styles.flextwo}>
                        <View>
                        <View style={styles.imgview}>
                            <Image source={{uri:'https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-wearing-glasses-is-wearing-colorful-background-image_2905240.jpg'}} 
                            style={styles.imgprofile}></Image>
                        </View>
                        <Text style={styles.timetext}>2 hrs ago</Text>
                        </View>
                        <Text style={styles.msgtext}>Mr. Dhanush is away from the villa so I am replace her</Text>
                    </View>
                </View>
                <View style={styles.notificationview}>
                    <View style={styles.flextwo}>
                        <View>
                        <View style={styles.imgview}>
                            <Image source={{uri:'https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-wearing-glasses-is-wearing-colorful-background-image_2905240.jpg'}} 
                            style={styles.imgprofile}></Image>
                        </View>
                        <Text style={styles.timetext}>2 hrs ago</Text>
                        </View>
                        <Text style={styles.msgtext}>Mr. Dhanush is away from the villa so I am replace her</Text>
                    </View>
                </View>
                <View style={styles.notificationview}>
                    <View style={styles.flextwo}>
                        <View>
                        <View style={styles.imgview}>
                            <Image source={{uri:'https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-wearing-glasses-is-wearing-colorful-background-image_2905240.jpg'}} 
                            style={styles.imgprofile}></Image>
                        </View>
                        <Text style={styles.timetext}>2 hrs ago</Text>
                        </View>
                        <Text style={styles.msgtext}>Mr. Dhanush is away from the villa so I am replace her</Text>
                    </View>
                </View>
                <View style={styles.notificationview}>
                    <View style={styles.flextwo}>
                        <View>
                        <View style={styles.imgview}>
                            <Image source={{uri:'https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-wearing-glasses-is-wearing-colorful-background-image_2905240.jpg'}} 
                            style={styles.imgprofile}></Image>
                        </View>
                        <Text style={styles.timetext}>2 hrs ago</Text>
                        </View>
                        <Text style={styles.msgtext}>Mr. Dhanush is away from the villa so I am replace her</Text>
                    </View>
                </View>
                <View style={styles.notificationview}>
                    <View style={styles.flextwo}>
                        <View>
                        <View style={styles.imgview}>
                            <Image source={{uri:'https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-wearing-glasses-is-wearing-colorful-background-image_2905240.jpg'}} 
                            style={styles.imgprofile}></Image>
                        </View>
                        <Text style={styles.timetext}>2 hrs ago</Text>
                        </View>
                        <Text style={styles.msgtext}>Mr. Dhanush is away from the villa so I am replace her</Text>
                    </View>
                </View>
                <View style={styles.notificationview}>
                    <View style={styles.flextwo}>
                        <View>
                        <View style={styles.imgview}>
                            <Image source={{uri:'https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-wearing-glasses-is-wearing-colorful-background-image_2905240.jpg'}} 
                            style={styles.imgprofile}></Image>
                        </View>
                        <Text style={styles.timetext}>2 hrs ago</Text>
                        </View>
                        <Text style={styles.msgtext}>Mr. Dhanush is away from the villa so I am replace her</Text>
                    </View>
                </View>
                <View style={styles.notificationview}>
                    <View style={styles.flextwo}>
                        <View>
                        <View style={styles.imgview}>
                            <Image source={{uri:'https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-wearing-glasses-is-wearing-colorful-background-image_2905240.jpg'}} 
                            style={styles.imgprofile}></Image>
                        </View>
                        <Text style={styles.timetext}>2 hrs ago</Text>
                        </View>
                        <Text style={styles.msgtext}>Mr. Dhanush is away from the villa so I am replace her</Text>
                    </View>
                </View>
                <View style={styles.notificationview}>
                    <View style={styles.flextwo}>
                        <View>
                        <View style={styles.imgview}>
                            <Image source={{uri:'https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-wearing-glasses-is-wearing-colorful-background-image_2905240.jpg'}} 
                            style={styles.imgprofile}></Image>
                        </View>
                        <Text style={styles.timetext}>2 hrs ago</Text>
                        </View>
                        <Text style={styles.msgtext}>Mr. Dhanush is away from the villa so I am replace her</Text>
                    </View>
                </View>
                <View style={styles.notificationview}>
                    <View style={styles.flextwo}>
                        <View>
                        <View style={styles.imgview}>
                            <Image source={{uri:'https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-wearing-glasses-is-wearing-colorful-background-image_2905240.jpg'}} 
                            style={styles.imgprofile}></Image>
                        </View>
                        <Text style={styles.timetext}>2 hrs ago</Text>
                        </View>
                        <Text style={styles.msgtext}>Mr. Dhanush is away from the villa so I am replace her</Text>
                    </View>
                </View>
                <View style={styles.marbottom}/>
        </ScrollView>
    </View>
  )
}

export default Notofication
