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
    lightgreenview: {
        height: 120,
        width: '90%',
        backgroundColor: "#BDE1C7",
        alignSelf: 'center',
        marginTop: '5%', borderRadius: 10
    },
    flexrowview: {
        flexDirection: "row",
        marginTop: '5%',
        marginLeft: '5%',
        justifyContent: 'space-between'
    },
    currentbal: {
        color: '#000',

    },
    pricestext: {
        fontSize: 20,
        fontWeight: "800",
        color: "#35B257"
    },
    moneyimg: {
        height: 90,
        width: 90,
        alignSelf: "center",
        marginRight: '6%',
        justifyContent:'center'
    },
    centerimageview:{
height:45,
width:45,
alignSelf:'center'
    },
    oderview: {
        height: '100%',
        width: '100%',
        marginTop: "10%",
        backgroundColor: '#fff',
        // borderWidth:2,
        borderColor: "#CCCBCB",
        borderWidth: 0.5,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    datetext: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: "10%",
        marginTop: "10%"
    },
    odertext: {
        height: 25,
        width: 70,
        backgroundColor: "#35B257",
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: "center"
    },
    datetext2: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: "10%",
        marginTop: "1%"
    },
    pricetext: {
        color: "#000",
        fontSize: 14,

    },
    usdtext: {
        fontWeight: "bold"
    },
    usdtext2: {
        fontWeight: '600'
    },
    ordertextr: {
        fontSize: 15,
        fontWeight: '500',
        color: '#fff'
    },
    viewline: {
        height: 1,
        width: "85%",
        backgroundColor: "#cfcfcf",
        alignSelf: "center",
        marginTop: "3%"
    },
    rightarrow: {
        marginTop: "5%",
        marginRight: '5%'

    },
    arrowside:{
        marginTop:"5%"
    },
    marbottomview:{
 marginBottom:"50%"
    }

})