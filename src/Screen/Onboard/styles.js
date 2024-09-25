import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    leftarroeview: {
        height: 25,
        width: 25,
        borderColor: "#E6E6E6",
        borderWidth: 1,
        marginLeft: "5%",
        marginTop: "5%",
         justifyContent: "center",
         borderRadius:5
    },
    welcometext: {
        alignSelf: "center",
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        color: '#000',
        marginTop: "20%"

    },
    Loremtext: {
        textAlign: "center",
        marginHorizontal: "10%",
        marginTop: "5%"
    },
    arrowstyle: {
        height: 15,
        width: 15,
        tintColor: '#35B257'
    },
    gadgetsimgstyle: {
        height: 200,
        width: 200,
        alignSelf: "center",
        marginTop: "20%",

    },
    backarrowstyle: {
        position: "absolute",
        right: 30,
        bottom: 30
    }
})
