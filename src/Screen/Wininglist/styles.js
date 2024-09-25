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
    marginLeft: '1.5%'

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
  winingflexrow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  winingview: {
    height: 'auto',
    width: '42%',
    backgroundColor: '#ffff',
    margin: 5,
    borderRadius: 5
  },
  marbottomview: {
    marginBottom: "8%"
  },
  dollstyle: {
    height: 80,
    width: 50,
    alignSelf: "center",
    marginTop: "5%"
  },
  winingtextstyle: {
    fontSize: 12,
    marginHorizontal: "15%",
    textAlign: 'center',
    color: "#000"
  },
  usdtextstyle: {
    color: "#35B257",
    fontSize: 15,
    fontWeight: "800",
    alignSelf: "center",
    marginTop: '5%'
  },
  timetextstyle: {
    alignSelf: "center",
    fontSize: 12,
    marginTop: "5%"
  },
  Deliveredstyel: {
    alignSelf: "center",
    color: "#000",
    fontWeight: "900",
    textDecorationLine: "underline",
    marginTop: "5%"
  },
  marbottomviewtwo: {
    marginBottom: '20%'
  }
})