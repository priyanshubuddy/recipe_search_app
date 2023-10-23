import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { Button, StyleSheet, Text, Image, TouchableHighlight, View } from 'react-native';

export default function Favourite() {
    let allData = [];
    useEffect(() => {
        AsyncStorage.getAllKeys()
            .then((keys) => {
                const valuePromises = keys.map(key => {
                    return AsyncStorage.getItem(key)
                        .then(value => {
                            allData.push({ [key]: value });
                        });
                });

                return Promise.all(valuePromises);
            }).then(() =>{
                // allData.map(dataItem => {
                //     const key = Object.keys(dataItem)[0]; // Get the key (e.g., "715497")
                //     const item = JSON.parse(dataItem[key]);
                //     console.log(item);
                // })
            })
            .catch(error => {
                console.error('Error retrieving data from AsyncStorage:', error);
            });
    });

    return (
        <View style={styles.container}>
            {
                allData === null ? (
                    <View>
                        <Text>You have not added anything</Text>
                    </View>
                ) :  <Text> hii</Text>
                }

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 40,
        width: 40,
    }
});