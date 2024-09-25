import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
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
        tintColor: "#35B257"
    },
    flexrowstyle: {
        flexDirection: "row",
        marginTop: "5%",
        marginLeft: '5%'
    },
    bidstextstyle: {
        marginTop: '3%',
        marginLeft: "28%",
        color: '#000',
        fontSize: 20,
        fontWeight: "bold"
    },
    profileimgstyle: {
        height: 80, width: 80,
        borderRadius: 10,
        alignSelf: "center",
        marginTop: "5%"
    },
    solarcamerainmg: {
        height: 25, width: 25,
        alignSelf: "center",
        zIndex: 1,
        marginTop: -15, marginLeft: "15%"
    },
    textinputtext: {
        fontSize: 14,
        color: '#000',
        marginLeft: '10%',
        fontWeight: 'bold',
        marginTop: '5%'
    },
    textinputtextwo: {
        // marginTop:-3,
        // marginBottom:"2%"
    },
    dropdownview: {
        height: 40,
        width: '85%',
        backgroundColor: '#fff',
        borderRadius: 5,
        // marginTop: 20,
        borderColor: "#CCCBCB", borderWidth: 0.5,
        justifyContent: 'center',
        alignSelf: 'center',

        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    placeholder: {
        marginHorizontal: "5%"
    },
    iconStyle: {
        marginRight: "5%"
    },
    selectedText: {
        marginLeft: '5%', color: '#000'
    },
    textinputtexthree: {
        marginTop: '2%'
    },
    dropdownviewtwo: {
        marginTop: 5
    },
    stylesprofileview: {
        height: 50
    },
    textinputviewpro: {
        height: 40,
        width: '85%',
        backgroundColor: '#fff',
        borderRadius: 5,
        // marginTop: 20,
        borderColor: "#CCCBCB", borderWidth: 0.5,
        justifyContent: 'center',
        alignSelf: 'center',

        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    texinput: {
        marginLeft: "5%"
    },
    flexroewpassimfflex: {
        flexDirection: "row",
        justifyContent: 'space-between',

    },
    hidepass: {
        height: 22, width: 22,
        alignSelf: "center",
        marginRight: '5%',
        marginTop: 10

    },
    deletaccountview: {
        height: 40,
        width: "40%",
        justifyContent: "center",
        marginLeft: "8%",
        backgroundColor: "#35B257",
        marginTop: "5%", borderRadius: 5
    },
    textdelete: {
        textAlign: "center",
        color: "#fff"
    },
    modelview: {
        height: 125,
        width: 200, backgroundColor: "#fff",
        position: "absolute",
        bottom: 30, marginLeft: '8%',
        borderRadius: 10
    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 6,
        borderRightWidth: 6,
        borderBottomWidth: 20,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#35B257',
        marginTop: -23,
        zIndex:1,
        marginLeft: '15%'
    },
    greebviewdelete: {
        height: 40,
        width: '100%',
        backgroundColor: "#35B257",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        justifyContent:"center"
    },
    deleteimg: {
        height: 30, 
        width: 30,
        alignSelf:"center"

    },
    deleteob:{
        alignSelf:"center",
        color:"#000",
        fontWeight:'bold'
    },
    areyousour:{
        fontSize:11,
        textAlign:"center",
        marginTop:2
    },
    deletebutton:{
        flexDirection:"row",
        alignSelf:"center",
        marginTop:'3%'
    },
    deleteviewbutton:{
        height:25, width:"30%",
        backgroundColor:"red",
        margin:5,
        borderRadius:5,
        borderColor:"#35B257",
        borderWidth:1,
        justifyContent:"center"
    },
    denitext:{
        alignSelf:"center",
        fontSize:12,
        fontWeight:'bold',
        color:"#fff"
    }
})