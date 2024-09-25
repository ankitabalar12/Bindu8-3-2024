import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { icons } from '../../Helper/icons';
import Home from '../../Screen/Home/Home';
import Bides from '../../Screen/Bides/Bides';
import Mywishlist from '../../Screen/Mywishlist/Mywishlist';
import Like from '../../Screen/Wininglist/Wining';
import Notofication from '../../Screen/Notofication/Notofication';
import Wining from '../../Screen/Wininglist/Wining';
import { createStackNavigator } from '@react-navigation/stack';
import BidsProduct from '../../Screen/BidsProduct/BidsProduct';
import Transactions from '../../Screen/Transactions/Transactions';



// const CustomTabbarButton = ({ children, onPress }) => (
//   <TouchableOpacity
//     style={{
//       top: -1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       ...styles.customButton, // Use the defined style here
//     }}
//     onPress={onPress}
//   >
//     <View style={{ height: 50, width: 50, borderRadius: 25, backgroundColor: '#006800',justifyContent:'center',alignItems:"center",marginBottom:60 }}>
//       {children}
//     </View>
//   </TouchableOpacity>
// );

// const styles = StyleSheet.create({
//   customButton: {
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 10,
//     },
//     shadowOpacity: 0.3,
//     shadowRadius: 20,
//     elevation: 5,
//   },
// });
const Stack = createStackNavigator()

const Tab = createBottomTabNavigator();
function bidsStack() {
  return (
    <Stack.Navigator initialRouteName="Bides">
      <Stack.Screen name="Bides" component={Bides} options={{ headerShown: false }} />
      <Stack.Screen name="BidsProduct" component={BidsProduct} options={{ headerShown: false }} />
      <Stack.Screen name="Transactions" component={Transactions} options={{ headerShown: false }}>
      </Stack.Screen>

    </Stack.Navigator>
  );
}
const BottomTabNavigation = () => {

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: '#022689',
        tabBarActiveTintColor: '#fff',

        tabBarLabelStyle: {
          marginBottom: 2,
          fontSize: 10,
          fontWeight: '800'
        },
        tabBarStyle: {
          // backgroundColor: '#fff',
          // borderBottomWidth: 0,
          // justifyContent: 'center',
          // alignItems: 'center',
          // position: 'relative', // Use relative positioning
          // borderColor: '#DFDFDF',
          // borderWidth: 0.5,
          // height: 70,
          //  borderTopLeftRadius: 20,
          //  borderTopRightRadius: 20
          backgroundColor: '#fff',
          borderTopWidth: 0,
          alignItems: 'center',
          position: 'absolute',
          borderColor: '#1a1915',
          borderWidth: 0.5,
          height: 60,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          //  borderRadius: 33, 
          //  marginHorizontal:'1%'
        },

      }}>

      <Tab.Screen
        name="HomeScreen"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={icons.firrhome}
                style={{
                  tintColor: focused ? '#006800' : '#838383',
                  height: 20,
                  width: 20,
                  marginTop: focused ? 0 : 15,
                  // marginBottom: '7%',
                  alignSelf: 'center',
                }}
              />
              {/* <View style={{height:20, width:20, backgroundColor:'red',}}></View> */}
              <View style={{
                height: 9, width: 50, backgroundColor: '#006800', position: "absolute",
                bottom: -33, borderRadius: 5, alignSelf: "center"
              }}></View>
              <View style={{
                width: 0,
                height: 0,
                borderLeftWidth: 5,
                borderRightWidth: 5,
                borderBottomWidth: 10,
                borderBottomWidth: 6,
                borderLeftColor: 'transparent',
                borderRightColor: 'transparent',
                borderBottomColor: '#006800',
                position: 'absolute',
                bottom: -25,
                alignSelf: 'center',
                zIndex: 1,}}></View>
            </View>
          ),
        }}
        component={Home}
      />

      <Tab.Screen
        name="Bides"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={icons.send}
                style={{
                  tintColor: focused ? '#006800' : '#838383',
                  height: 18,
                  width: 20,
                  marginTop: focused ? 0 : 15,
                  // marginBottom: '7%',
                  alignSelf: 'center',
                }}
              />
              {/* <View style={{height:20, width:20, backgroundColor:'red',}}></View> */}
              <View style={{
                height: 9, width: 50, backgroundColor: '#006800', position: "absolute",
                bottom: -33, borderRadius: 5, alignSelf: "center"
              }}></View>
              <View style={{
                width: 0,
                height: 0,
                borderLeftWidth: 5,
                borderRightWidth: 5,
                borderBottomWidth: 10,
                borderBottomWidth: 6,
                borderLeftColor: 'transparent',
                borderRightColor: 'transparent',
                borderBottomColor: '#006800',
                position: 'absolute',
                bottom: -25,
                alignSelf: 'center',
                zIndex: 1,}}></View>
            </View>
          ),
        }}
        component={bidsStack}
      />
      <Tab.Screen
        name="Mywishlist"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={icons.Heart2}
                style={{
                  tintColor: focused ? '#006800' : '#838383',
                  height: 19,
                  width: 20,
                  marginTop: focused ? 0 : 15,
                  // marginBottom: '7%',
                  alignSelf: 'center',
                }}
              />
              {/* <View style={{height:20, width:20, backgroundColor:'red',}}></View> */}
              <View style={{
                height: 9, width: 50, backgroundColor: '#006800', position: "absolute",
                bottom: -33, borderRadius: 5, alignSelf: "center"
              }}></View>
              <View style={{
                width: 0,
                height: 0,
                borderLeftWidth: 5,
                borderRightWidth: 5,
                borderBottomWidth: 10,
                borderBottomWidth: 6,
                borderLeftColor: 'transparent',
                borderRightColor: 'transparent',
                borderBottomColor: '#006800',
                position: 'absolute',
                bottom: -25,
                alignSelf: 'center',
                zIndex: 1,}}></View>
            </View>
          ),
        }}
        component={Mywishlist}
      />


      <Tab.Screen
        name="Notofication"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={icons.notbell}
                style={{
                  tintColor: focused ? '#006800' : '#838383',
                  height: 20,
                  width: 20,
                  marginTop: focused ? 0 : 15,
                  // marginBottom: '7%',
                  alignSelf: 'center',
                }}
              />
              {/* <View style={{height:20, width:20, backgroundColor:'red',}}></View> */}
              <View style={{
                height: 9, width: 50, backgroundColor: '#006800', position: "absolute",
                bottom: -33, borderRadius: 5, alignSelf: "center"
              }}></View>
              <View style={{
                width: 0,
                height: 0,
                borderLeftWidth: 5,
                borderRightWidth: 5,
                borderBottomWidth: 10,
                borderBottomWidth: 6,
                borderLeftColor: 'transparent',
                borderRightColor: 'transparent',
                borderBottomColor: '#006800',
                position: 'absolute',
                bottom: -25,
                alignSelf: 'center',
                zIndex: 1,}}></View>
            </View>
          ),
        }}
        component={Notofication}
      />
      <Tab.Screen
        name="Wining"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={icons.bac}
                style={{
                  tintColor: focused ? '#006800' : '#838383',
                  height: 20,
                  width: 20,
                  marginTop: focused ? 0 : 15,
                  // marginBottom: '7%',
                  alignSelf: 'center',
                }}
              />
             
                <View style={{
                height: 9, width: 50, backgroundColor: '#006800', position: "absolute",
                bottom: -33, borderRadius: 5, alignSelf: "center"
              }}></View>
              <View style={{
                width: 0,
                height: 0,
                borderLeftWidth: 5,
                borderRightWidth: 5,
                borderBottomWidth: 10,
                borderBottomWidth: 6,
                borderLeftColor: 'transparent',
                borderRightColor: 'transparent',
                borderBottomColor: '#006800',
                position: 'absolute',
                bottom: -25,
                alignSelf: 'center',
                zIndex: 1,}}></View>
            </View>
          ),
        }}
        component={Wining}
      />



    </Tab.Navigator>
  );
}

export default BottomTabNavigation;
