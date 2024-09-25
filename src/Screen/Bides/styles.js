import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    arrowview: {
        height: 40,
        width: 40,
        backgroundColor: "#BDE1C7",
        justifyContent: 'center',
        marginTop: "5%",
        marginLeft: "5%",
        borderRadius: 10
    },
    arrowstyle: {
        height: 15, width: 15,
        alignSelf: "center"
    },
    bidstext: {
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center",
        color: "#000"

    },
    thewishtext: {
        color: '#8B8B8B',
        alignSelf: "center", marginTop: 5
    },
    imgbidsstyle: {
        alignSelf: "center",
        marginTop: '5%',
        height:180,
        width:250
    }
})