import React from 'react'
import { NavigationContainer, useTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../../Screen/Login/LoginScreen'
import Onboard from '../../Screen/Onboard/Onboard'
import Splash from '../../Screen/Splash/Splash'
import Swiperscreen from '../../Screen/swiper/Swiperscreen'
import ForgotpassScreen from '../../Screen/ForgotpassScreen/ForgotpassScreen'
import SingUp from '../../Screen/SingUp/SingUp'
import IdandPasspot from '../../Screen/IdandPasspot/IdandPasspot'
import Otp from '../../Screen/Otp/Otp'
import Home from '../../Screen/Home/Home'
import BottomTabNavigation from '../BottomBarTab/BottomTabNavigation'
import Mywishlist from '../../Screen/Mywishlist/Mywishlist'
import AllDetails from '../../Screen/AllDetails/AllDetails'
import BidsProduct from '../../Screen/BidsProduct/BidsProduct'
import Order from '../../Screen/Order/Order'
import Contactus from '../../Screen/Contactus/Contactus'
import Profile from '../../Screen/Profile/Profile'
import Transactions from '../../Screen/Transactions/Transactions'
import { DarkTheme, LightTheme, ThemeProvider, initializeTheme } from '../ThemeContext'
import Bides from '../../Screen/Bides/Bides'
import Notofication from '../../Screen/Notofication/Notofication'
import Wining from '../../Screen/Wininglist/Wining'
import Uploadimags from '../../Screen/Uploadimags/Uploadimags'
import UpdateApp from '../../Screen/UpdateApp/UpdateApp'
import SomethingWentWrong from '../../Screen/SomethingWentWrong/SomethingWentWrong'
import Internet from '../../Screen/Internet/Internet'
import Location from '../../Screen/Location/Location'


const stack = createStackNavigator()
const MainNavigation = () => {
  const theme = useTheme();
  return (
    <ThemeProvider>
      <NavigationContainer theme={theme === 'light' ? LightTheme : DarkTheme}>
        <stack.Navigator initialRouteName='Splash'>
          <stack.Screen name="Splash" component={Splash} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="Onboard" component={Onboard} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="Swiperscreen" component={Swiperscreen} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="ForgotpassScreen" component={ForgotpassScreen} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="SingUp" component={SingUp} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="IdandPasspot" component={IdandPasspot} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="Otp" component={Otp} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="Home" component={BottomTabNavigation} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="Mywishlist" component={Mywishlist} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="AllDetails" component={AllDetails} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="BidsProduct" component={BidsProduct} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="Order" component={Order} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="Contactus" component={Contactus} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="Transactions" component={Transactions} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="Bides" component={Bides} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="Notofication" component={Notofication} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="Wining" component={Wining} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="Uploadimags" component={Uploadimags} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="UpdateApp" component={UpdateApp} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="SomethingWentWrong" component={SomethingWentWrong} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="Internet" component={Internet} options={{ headerShown: false }}></stack.Screen>
          <stack.Screen name="Location" component={Location} options={{ headerShown: false }}></stack.Screen>
        </stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default MainNavigation