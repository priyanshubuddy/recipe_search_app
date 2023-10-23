import { StyleSheet } from "react-native";

const cardHolderStyles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 10,
  },
  id: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
  },
  title: {
    fontSize: 18,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  favoriteIcon: {
    color: "red",
    fontSize: 27,
  },
  addToFavoriteButton: {
    height: 40,
    width: 120,
    backgroundColor: "green",
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  addToFavoriteButtonText: {
    color: "#fff",
  },
  playIcon: {
    color: "red",
    fontSize: 27,
  },
});

export default cardHolderStyles;
