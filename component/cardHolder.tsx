import {StyleSheet, Text, View,Image,TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Card_holder(props) {
    const navigation = useNavigation();
    const apiKey = '963685318d5643ef8522cd9b003b866e';
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
                //  console.log(data);
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
    <View style={styles.container}>
      <View> 
        <View onStartShouldSetResponder={viewDetailPage}>
            <Image style={styles.image} source={{uri:props.data.image}}/>
        </View>
        <View>
            <Text>
            {props.data.id}
            
            </Text>
        </View>
        <View>
        <Text>
        {props.data.title}
            </Text>
        </View>
      </View>

      <View>
            <View>
                <Icon name="heart" size={27} color="red"/>
                <TouchableHighlight style={styles.btn} onPress={()=>{store_data_in_local(props.data.id,props.data)}}>
                    <Text> Add to favourite </Text>
                </TouchableHighlight>
            </View>
            <View>
            <Icon name="youtube-play" size={27} color="red"/>
            </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
    },
    image:{
        height:50,
        width:50,
    },
    btn:{
        height:30,
        marginTop:5,
        backgroundColor:'green',
        borderRadius:5,
        justifyContent: 'center',
        alignItems: 'center',
        width:150,
    }
});