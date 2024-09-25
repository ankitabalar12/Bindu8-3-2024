import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    
    },
    arrowview: {
        height: 35, width: 35,
        borderRadius: 5,
        justifyContent: 'center',
        backgroundColor: "#fff",
        borderColor: '#E6E6E6',
        borderWidth: 1,
        marginLeft:'1.5%',
        marginBottom:'5%'
    
    },
    arrowstyle: {
        height: 15, width: 15,
        alignSelf: "center",
        tintColor: "#35B257"
    },
    flexrowstyle: {
        flexDirection: "row",
        marginTop: "5%",
        marginLeft: '5%'
    },
    bidstextstyle: {
        marginTop: '3%',
        marginLeft: "20%",
        color: '#000',
        fontSize: 17,
        fontWeight: "bold"
    },
    notificationview:{
        height:90,
        width:'90%',
        backgroundColor:"#E6F2EA",
        alignSelf:"center",
        borderRadius:5,
        justifyContent:"center", marginBottom:5,
        marginTop:5

    },
    flextwo:{
        flexDirection:"row",
        marginHorizontal:"5%"
    
        
    },
    imgview:{
        height:50,
        width:50,
        borderRadius:40,
        backgroundColor:'#cddafe'

    },
    timetext:{
        color:'#000'
    },
    msgtext:{
        marginRight:"15%",
        color:"#000",
        textAlign:"center",
        fontSize:12,alignSelf:"center"
    },
    imgprofile:{
        height:'100%',
        width:"100%",
        borderRadius:50
    },
    marbottom:{
        marginBottom:"50%"
    },
    marbottom:{
        marginBottom:'30%'
    }
})