import { StyleSheet, Image, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import recipesStyles from "../styles/recipesStyles";

export default function Recipes() {
  const route = useRoute();
  const receivedTitle = route.params?.Title;
  const receivedImage = route.params?.Image;
  const receivedSummary = route.params?.Summary;
  const receivedSourceUrl = route.params?.SourceUrl;

  return (
    <View style={recipesStyles.container}>
      <View>
        <View>
          <Image style={recipesStyles.image} source={{ uri: receivedImage }} />
        </View>
        <View>
          <Text>Name : {receivedTitle}</Text>
        </View>
        <View>
          <Text>Ingrident:</Text>
        </View>
        <View>
          <Text>Instructions : {receivedSummary}</Text>
        </View>
        <View>
          <Text>source link: {receivedSourceUrl}</Text>
        </View>
      </View>
    </View>
  );
}
