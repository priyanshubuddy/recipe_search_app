import { StyleSheet } from "react-native";

const recipesStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#e74c3c",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
    color: "#333",
  },
  ingredients: {
    fontSize: 18,
    marginVertical: 10,
    textAlign: "center",
    color: "#555",
  },
  instructions: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: "center",
    color: "#666",
  },
  sourceLink: {
    fontSize: 14,
    marginTop: 20,
    textAlign: "center",
    color: "#3498db",
    textDecorationLine: "underline",
  },
});

export default recipesStyles;
