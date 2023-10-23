import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Card_holder from '../component/cardHolder';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({ navigation }) {

    const apiKey = '963685318d5643ef8522cd9b003b866e';
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

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 2,
        justifyContent: 'center',
        padding: 2,
        alignItems: 'center'
    },
    icon: {
        marginLeft: 5,
    },
    inputField: {
        height: 42,
        width: 250,
        marginLeft: 20,
    },
});