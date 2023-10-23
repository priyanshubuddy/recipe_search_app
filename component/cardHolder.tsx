import {StyleSheet, Text, View,Image,TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import cardHolderStyles from "../styles/componentStyles/cardHolderStyles";

export default function Card_holder(props) {
    const navigation = useNavigation();
    const apiKey = '522685f9cadb4914a6a1df4449c5140a';
    const id = props.data.id;
    const apiUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;
     
    const viewDetailPage = ()=>{
        //navigation.navigate('Recipes');
        fetch(apiUrl)
            .then( response =>{
                if(response.ok){
                    return response.json();
                }else{
                    throw new Error('API request failed');
                }
            }).then(data =>{
                 console.log(data);
                // setRecipestitle(data.title);
                // setRecipesimage(data.image);
                // setRecipesspoonacularSourceUrl(data.spoonacularSourceUrl);
                // setRecipessummary(data.summary);
                navigation.navigate('R', {Title:data.title, Image:data.image, Summary:data.summary, SourceUrl:data.spoonacularSourceUrl});
            }) 
            .catch(error => {
                // Handle errors
                console.error(error);
            });      
    }
    const store_data_in_local = (key ,value) => {
        const id = key.toString();
        const data = JSON.stringify(value);
        AsyncStorage.setItem(id, data)
            .then(() => {
                console.warn('Added to Favourites.');
            }) 
            .catch(error => {
                console.error('Error storing data:', error);
            });
    };

  return (
    <View style={cardHolderStyles.container}>
      <View>
        <View onStartShouldSetResponder={viewDetailPage}>
          <Image
            style={cardHolderStyles.image}
            source={{ uri: props.data.image }}
          />
        </View>
        <View>
          <Text>{props.data.id}</Text>
        </View>
        <View>
          <Text>{props.data.title}</Text>
        </View>
      </View>

      <View>
        <View>
          <Icon name="heart" size={27} color="red" />
          <TouchableHighlight
            style={cardHolderStyles.btn}
            onPress={() => {
              store_data_in_local(props.data.id, props.data);
            }}
          >
            <Text> Add to favourite </Text>
          </TouchableHighlight>
        </View>
        <View>
          <Icon name="youtube-play" size={27} color="red" />
        </View>
      </View>
    </View>
  );
}
