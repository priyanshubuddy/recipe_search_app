import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Card_holder from '../component/cardHolder';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import homeStyles from "../styles/homeStyles";

export default function Home({ navigation }) {

    const apiKey = '522685f9cadb4914a6a1df4449c5140a';
    const apiUrl = 'https://api.spoonacular.com/recipes/complexSearch';
    const [input, setInput] = useState("");
    const [Data, setdata] = useState([]);
    const queryParam = input;

    // Construct the URL with the API key and query parameter
    const url = `${apiUrl}?query=${queryParam}&apiKey=${apiKey}`;
    // Make the API request using fetch
    const onChangeTextHandler = (newText) => {
        // Update the text state whenever the user types in the TextInput
        setInput(newText);
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('API request failed');
                }
            })
            .then(data => {
                // Handle the API response data
                setdata(data.results);
            })
            .catch(error => {
                // Handle errors
                console.error(error);
            });
    };
    let allData = [];
    let arraydata = [];
    const geting_asyncData = ()=>{
        AsyncStorage.getAllKeys()
        .then((keys) => {
            const valuePromises = keys.map(key => {
                return AsyncStorage.getItem(key)
                    .then(value => {
                        allData.push({ [key]: value });
                    });
            });

            return Promise.all(valuePromises);
        })
        .then(()=>{
            allData.map(dataItem => {
                const key = Object.keys(dataItem)[0];
                //const item = JSON.parse(dataItem[key]);
                 arraydata.push(dataItem[key]);
            })
        }).then(()=>{
            navigation.navigate('Favourite' ,{arrdata:arraydata});
        })
        .catch(error => {
            console.error('Error retrieving data from AsyncStorage:', error);
        });
    }
     
    return (
        <ScrollView> 
        <View style={styles.container}>
            <View>
                <View>
                    <Text>
                        Let's Eat Something New
                    </Text>
                </View>
                <View style={styles.inputContainer}>
                    <Icon style={styles.icon} name="search" size={27} />
                    <TextInput style={styles.inputField}
                        placeholder="Email" value={input} onChangeText={onChangeTextHandler} />

                </View>
                <View>
                    <TouchableHighlight style={styles.Fav_btn} onPress={geting_asyncData}>
                        <Text>
                            go to favourite
                        </Text>
                    </TouchableHighlight>
                </View>
                <View>
                    {Data.length > 0
                        ? Data.map((item) => (
                            <Card_holder key={item.id} data={item} />
                        ))
                         :null
                    }
                </View>
            </View>

        </View>
        </ScrollView>
    );
}