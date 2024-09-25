import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff"

    },
    arrowview: {
        height: 35, width: 35,
        borderRadius: 5,
        justifyContent: 'center',
        backgroundColor: "#fff",
        borderColor: '#E6E6E6',
        borderWidth: 1,
      
    },
    arrowstyle: {
        height: 15, width: 15,
        alignSelf: "center",
        tintColor:"#35B257"
    },
    flexrowstyle:{
        flexDirection:"row",
          marginTop:"5%",
        marginLeft:'5%'
    },
    bidstextstyle:{
        marginTop:'3%',
        marginLeft:"30%",
        color:'#000',
        fontSize:15,
        fontWeight:"bold"
    },
    flexdractionbids:{
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"center"
    },
    jblviewstyle:{
        height:'auto',
        width:'40%',
        backgroundColor:'#fff',
        margin:15,
        // marginBottom:"%",
        borderRadius:5
    },
    boxmar:{
      marginBottom:'10%'
    },
    marbottom:{
        marginBottom:"50%"
    },
    heardphoneimg:{
        height:65,
        width:60,
        alignSelf:"center",
        marginTop:"7%"
    },
    watchimg:{
        height:63,
        width:55,
        alignSelf:"center",
        marginTop:"7%"
    },
    jbltext:{
        alignSelf:"center",
        fontSize:14,
        fontWeight:'bold',
        marginTop:'5%'
    },
    wirlesstext:{
        fontSize:9,
        fontWeight:"500",
        color:'#aba8a7',
        textAlign:"center",
        marginHorizontal:"5%"
    },
    timeviewflex:{
        flexDirection:"row",
        marginTop:'5%',
        marginHorizontal:"10%"
    },
    timeview:{
        height:30,
        width:30,
        borderRadius:5,
        backgroundColor:"#BDE1C7",
        margin:5,
        justifyContent:'center'
    },
    timetext:{
        color:"#35B257",
        fontSize:15,
        fontWeight:"bold",
        alignSelf:"center"
    },
    houtext:{
        color:"#000",
        alignSelf:"center"
    },
    usdtext:{
        alignSelf:"center",
        color:"#35B257",
        fontSize:15,
        fontWeight:"900",
        marginTop:5
    },
    winingbutton:{
        height:30,
        width:"50%",
        backgroundColor:"#35B257",
        borderRadius:5,
        alignSelf:"center",
        marginTop:"4%",
        justifyContent:'center'
    },
    winingtext:{
        alignSelf:"center",
        color:'#fff',
        fontWeight:'700'
    },
    usbimg:{
        height:63,
        width:63,
        alignSelf:"center",
        marginTop:"7%"    
    }
})