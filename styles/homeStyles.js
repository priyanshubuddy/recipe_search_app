import { StyleSheet } from "react-native";

const homeStyles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: "row",
    borderColor: "black",
    borderWidth: 2,
    justifyContent: "center",
    padding: 2,
    alignItems: "center",
  },
  icon: {
    marginLeft: 5,
  },
  inputField: {
    height: 42,
    width: 250,
    marginLeft: 20,
  },
  Fav_btn: {
    height: 30,
    width: 150,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default homeStyles;
