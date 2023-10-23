import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { Button, StyleSheet, Text, Image, TouchableHighlight, View } from 'react-native';
import Favourite_card from '../component/favourite_card';

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
            })
            .catch(error => {
                console.error('Error retrieving data from AsyncStorage:', error);
            });
    });

    return (
        <View style={styles.container}>
            {
                allData.length === 0 ? (
                    <View>
                        <Text>You have not added anything</Text>
                    </View>
                ) : (
                    allData.map(dataItem => {
                        const key = Object.keys(dataItem)[0];
                        const item = JSON.parse(dataItem[key]);
                        console.log(item); // Log the item object
                        return (
                          <Favourite_card data={item}/>
                        );
                    })
                )
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