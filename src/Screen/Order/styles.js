import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"

    },
    arrowview: {
        height: 45, width: 45,
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
        marginLeft: "30%",
        color: '#000',
        fontSize: 20,
        fontWeight: "bold"
    },
    orderview: {
        height: 250,
        width: "90%",
        backgroundColor: "#f2f2f2",
        alignSelf: "center",
        marginTop: "5%",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    flexpricrow: {
        flexDirection: "row",
        marginTop: "5%",
        marginHorizontal: "8%",
        justifyContent: "space-between"
    },
    flexpricrow3: {
        marginTop: "5%"
    },
    pricetext: {
        fontSize: 13,
        fontWeight: "bold", color: "#000"
    },
    pricenumber: {
        fontSize: 14,
        fontWeight: "bold", color: "#000"
    },
    borderline: {
        height: 2,
        width: "90%",
        backgroundColor: '#E6E6E6',
        alignSelf: "center",
        marginTop: "2%"
    },
    flexpricrow2: {
        marginTop: 5
    },
    pricetexttotal: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#35B257"
    },
    massview: {
        height: 100,
        width: "90%",
        backgroundColor: "#f2f2f2",
        alignSelf: "center",
        marginTop: "5%",
        justifyContent: "center",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 10,
        marginBottom: 5

    },
    flexdractionrow: {
        flexDirection: "row",
        marginHorizontal: "2%"
    },
    imgesviewmass: {
        height: 85,
        width: '20%',
        backgroundColor: '#fff',
        borderRadius: 7,
        justifyContent: "center",
        alignSelf:"stretch"
    },
    MassagerNecktext: {
        fontSize: 10,
        marginTop: 5, marginLeft: "5%"
    },
    shiatsumassagetrxt: {
        marginLeft: '5%',
        fontSize: 11,
        color: '#000',
        fontWeight: 'bold',
        marginRight: "35%"
    },
    USDtrxt: {
        alignSelf: "flex-end",
        marginRight: "25%",
        marginTop: "2%",
        fontSize: 14,
        fontWeight: "bold",
        color: "#35B257"
    },
    imagesstyle: {
        height: '100%',
        width: '100%',
        alignSelf: "center"
    },
    marginbottom: {
   marginTop:100
    },
    massview2:{
        marginTop:5
    }

})