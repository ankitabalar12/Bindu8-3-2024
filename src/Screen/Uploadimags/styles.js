import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1
    },
    arrowview: {
        height: 35, width: 35,
        borderRadius: 5,
        justifyContent: 'center',
        backgroundColor: "#fff",
        borderColor: '#E6E6E6',
        borderWidth: 1,
        marginLeft:'1.5%'
      
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
        marginLeft:"20%",
        color:'#000',
        fontSize:17,
        fontWeight:"bold"
    },
    profileimgstyle:{
     height:70,
     width:70,
     alignSelf:'center' ,
     marginTop:'5%'
    },
    profileimgstyle2:{
        height:70,
        width:70,
        alignSelf:'center' ,
        marginTop:'5%',
        borderRadius:10
    },
    bidstextstyle:{
        textAlign:'center',
        marginTop:'5%',
        fontWeight:'900',
        fontSize:15
    },
    plztext:{
        fontSize:12,
        textAlign:"center"

    },
    solarcamerainmg: {
        height: 25, width: 25,
        alignSelf: "center",
        zIndex: 1,
        marginTop: -15, marginLeft: "15%"
    },
    positioview:{
        position:"absolute",
        bottom:0,
        right:0,
        height:80,
        width:'100%',
        // backgroundColor:'red'
    },
    positioview:{
        position:"absolute",
        bottom:0,
        right:0,
        height:80,
        width:'100%',
        //  backgroundColor:'red'
    },
    Vectorimg:{
        height:80,
         width:70,
    alignSelf:'flex-end',
    justifyContent:'center'
        
        
    },
    arrowright:{
        alignSelf:"center",
        marginLeft:"40%",
        tintColor:'#fff',
        marginTop:'30%'
    },
    bottomend:{
        flexDirection:"row",
        justifyContent:'space-between'
    },
    skiptextstyle:{
        color:"#35B257",
        fontWeight:'900',
        marginLeft:'25%',
        marginTop:"20%"
       
    
    },
})