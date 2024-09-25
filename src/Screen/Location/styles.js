import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    mapview: {
        height: 450,
        width: '100%',
        // backgroundColor:'red'
    },
    selectedlocationview: {
        zIndex: 1,
        height: '100%',
        width: '100%',

        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        marginTop: -30,
        backgroundColor: '#fff',
        borderColor: "#CCCBCB",
        borderWidth: 0.5,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    SelectLocationtext: {
        marginTop: "8%",
        marginLeft: '10%',
        color: '#000',
        fontWeight: '900',
        fontSize: 15
    },
    YourLocationtext: {
        color: '#BABABA',
        marginLeft: '10%',
        marginTop: '4%'
    },
    YourLocationtextwo: {
        marginLeft: '10%',
        color: "#000",
        fontSize: 12,
        marginTop: 3
    },
    lineview: {
        height: 0.5,
        width: "90%",
        backgroundColor: "#BABABA",
        alignSelf: "center",
        marginTop: '2%'
    },
    sveastext: {
        marginLeft: '10%',
        marginTop: '5%',
        fontSize: 15
    },
    slectmap: {
        height: 50,
        width: '90%',
        borderColor: "#CCCBCB",
        backgroundColor: '#fff',
        borderWidth: 0.5,
        marginTop: '2%',
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
    flexrowview: {
        flexDirection: 'row',
        // justifyContent:'space-between'
    },
    mapstyleimages: {
        marginLeft: '5%',
        alignSelf: "center",
        height:30,
        width:30

    },
    selpstext: {
        color: '#000',
        alignSelf: "center",
        marginLeft: "5%"
    },
    downarrow: {
        height: 15, width: 15,

    },
    arroestyle: {
        position: 'absolute',
        right: 20,
        alignSelf: "center"
    },
    flexrowviewbox: {
        flexDirection: "row",
  alignSelf:"center"
        // marginHorizontal: "10%"
    },
    boxbuttonview: {
        height: 45, width: "41%",
        margin:5,
        borderColor: "#CCCBCB",
        backgroundColor: '#fff',
        borderWidth: 0.5,
        marginTop: '2%',
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
    mainview: {
        height: 45,
        width: "85%",
        backgroundColor: "#fff",
        borderColor: "#BFBFBF",
        borderWidth: 1,
        alignSelf: "center",
        flexDirection:'row',
        // justifyContent: "center",
        borderRadius: 5,
        marginTop: "5%",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      placeholder: {
        marginHorizontal: "10%",
        color: '#000',
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold',
      },
      iconStyle: {
        marginRight: "5%", tintColor: '#000', marginLeft:"55%"
      },
      selectedText: {
        marginLeft: '10%', color: '#000',
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold',
      },
      itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
      },
      image: {
        width: 30,
        height: 30,
        marginRight: 10,
       
      },
      label: {
        fontSize: 16,
        color:'redd'
      },
      SelectProvincetxt:{
        alignSelf:'center',
        marginLeft:'4%', 
        color:'#000',
       fontWeight:'500',

      },
      countryItem: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        // padding: 10,
        height: 65,
        width: "50%",
        // backgroundColor:'red'
        // borderBottomWidth: 1,
        // borderBottomColor: '#ccc',
    },
    countryItemtwo:{
        height: 50,
    },
    modalView: {
        flex: 1,
        justifyContent: 'center', 
        alignSelf: "center",
        //  alignItems: "center",
        borderRadius:5,
        position: "absolute",
        bottom: 150,
        backgroundColor: '#fff', width: "70%",
        shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        // justifyContent: 'flex-end',


    },

    modalView2:{
        flex: 1,
        justifyContent: 'center', 
        alignSelf: "center",
        //  alignItems: "center",
        borderRadius:5,
        position: "absolute",
        bottom: 150,
        backgroundColor: '#fff', width: "70%",
        shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        // justifyContent: 'flex-end',
    },
    modalBackground: {
        flex: 1,
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
        // backgroundColor:"red"
    },
    textstyle: {
        color: '#000',
        fontFamily: 'Poppins-SemiBold',
        marginLeft:15
        
    },
    fageimg:{
        height:25, width:40,
        marginLeft:'15%'
    },
    lineview2:{
        height:0.5,
        width:'100%',
        backgroundColor:'#ccc',
        marginBottom:1.5
    },
    focused: {
        color: '#35B257', // Example focus effect
       
      },
      selectrowview:{
        flexDirection:"row"
      },
      cityimg:{
        height:30, width:30,
        marginLeft:'2%'
      },
      dotsview:{
        height:8, width:8,
        borderRadius:5,
        backgroundColor:'#35B257',
        marginLeft:'10%'
      },
      loctionbutton:{
        marginTop:'3%'
      },
      marto:{
        marginBottom:'20%'
      },
      map: {
        flex: 1,
      },
      input:{
        marginLeft:'9%'
      },
      locationmapviewmar:{
        marginBottom:'20%'
      }
})