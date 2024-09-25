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
        marginLeft:'1.5%',
        marginTop:'5%',
        marginLeft:'5%'
      
    },
    arrowstyle: {
        height: 15, width: 15,
        alignSelf: "center",
        tintColor:"#35B257"
    },
    updateimages:{
        height:150,
        width:150,
        alignSelf:'center', marginTop:'20%'
    },
    textstyle:{
        marginTop:'5%',
        alignSelf:'center',
        color:'#000',
        fontWeight:'900'
    },
    Performancetext:{
        textAlign:'center',
        fontWeight:'600',
        fontSize:12,
        marginHorizontal:"20%"
    },
    remaindtext:{
        alignSelf:'center',
        marginTop:'5%'
    },
    updateapp:{
        marginTop:"50%"
    }
})