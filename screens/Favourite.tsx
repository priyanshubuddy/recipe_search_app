import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { Button, StyleSheet, Text, Image, TouchableHighlight, View } from 'react-native';
import Favourite_card from '../component/favourite_card';
import { useRoute } from '@react-navigation/native';
import favouriteStyles from "../styles/favouriteStyles";

export default function Favourite() {
    const route = useRoute();
    const receivedTitle = route.params?.arrdata;
    useEffect(() => {
        console.log(receivedTitle);
    });

    return (
        <View style={styles.container}>
              
        </View>
    );
}
