import { Button, ScrollView, Text, TextInput, TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Card_holder from '../component/cardHolder';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import homeStyles from "../styles/homeStyles";

export default function Home({ navigation }) {

    const apiKey = "e3a82234c1884e42972f2f826637ed04";
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
        <View style={homeStyles.container}>
            <View>
                <View>
                    <Text>
                        Let's Eat Something New
                    </Text>
                </View>
                <View style={homeStyles.inputContainer}>
                    <Icon style={homeStyles.icon} name="search" size={27} />
                    <TextInput style={homeStyles.inputField}
                        placeholder="Email" value={input} onChangeText={onChangeTextHandler} />

                </View>
                <View>
                    <TouchableHighlight style={homeStyles.Fav_btn} onPress={geting_asyncData}>
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