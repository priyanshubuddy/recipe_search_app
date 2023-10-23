import React from "react";
import { StyleSheet, Image, Text, View, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import recipesStyles from "../styles/recipesStyles";

export default function Recipes() {
  const route = useRoute();
  const recipeData = route.params?.recipeData;

  return (
    <ScrollView contentContainerStyle={recipesStyles.container}>
      <View>
        <View>
          <Image
            style={recipesStyles.image}
            source={{ uri: recipeData.image }}
          />
        </View>
        <View>
          <Text style={recipesStyles.title}>Name: {recipeData.title}</Text>
        </View>
        <View>
          <Text style={recipesStyles.ingredients}>Ingredients:</Text>
          {recipeData.extendedIngredients.map((ingredient, index) => (
            <Text key={index}>{ingredient.original}</Text>
          ))}
        </View>
        {/* <View>
          <Text style={recipesStyles.instructions}>
            Instructions: {recipeData.instructions}
          </Text>
        </View> */}
        <View>
          <Text style={recipesStyles.sourceLink}>
            Source link: {recipeData.spoonacularSourceUrl}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
