import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    leftarroeview: {
        height: 25,
        width: 25,
        borderColor: "#E6E6E6",
        borderWidth: 1,
        marginLeft: "5%",
        marginTop: "5%",
        justifyContent: "center",
        borderRadius: 5
    },
    arrowstyle: {
        height: 15,
        width: 15,
        tintColor: '#35B257',
        alignSelf: "center"
    },
    idpassimg: {
        height: 190,
        width: 160,
        alignSelf: "center",
        marginTop: "15%",
    },
    logintext: {
        textAlign: "center",
        fontFamily: 'Poppins-SemiBold',
        fontSize: 17,
        marginTop: "5%",
        color: '#000'
    },
    welcometext: {
        marginTop: "2%",
        textAlign: "center",
        marginHorizontal: "10%",
        color: '#8B8B8B',
    },
    flexdractionrowtext: {
        flexDirection: "row",
        alignSelf: "center", marginTop: "3%"

    },
    numberstyel: {
        color: "#000"
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginTop: "3%"
    },
    otpInput: {
        width: 50,
        height: 50,
        borderRadius: 10,
        textAlign: 'center',
        marginHorizontal: 20,
        backgroundColor: '#f2f2f2',
         borderBottomColor: '#fff',
         borderBottomWidth:0,
         shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    otpInput2: {
        width: 50,
        height: 50,
        borderRadius: 40,
        textAlign: 'center',
        marginHorizontal: 20,
        backgroundColor: 'pink',
        borderBottomColor: '#fff'
    },
    otptime:{
        alignSelf:"center",
        marginTop:"5%"
    },
    flrxrowtext: {
        flexDirection: "row",
        alignSelf: "center", marginTop: "10%"
    },
    gobacktext: {
        color:"#8B8B8B"
    },
    PressHeretext: {
        color:'#35B257',
    },
    resendmsg:{
        color:"#000"
    },
    recevicode:{
        textAlign:"center"
    },
    disabledText:{
        color:'#000'
    }
})