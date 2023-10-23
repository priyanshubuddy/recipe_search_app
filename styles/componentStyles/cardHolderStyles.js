import { StyleSheet } from "react-native";

const cardHolderStyles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  image: {
    height: 50,
    width: 50,
  },
  btn: {
    height: 30,
    marginTop: 5,
    backgroundColor: "green",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    width: 150,
  },
});

export default cardHolderStyles;
