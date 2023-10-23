import { StyleSheet, Image, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
export default function Recipes() {
   const route = useRoute();
   const receivedTitle = route.params?.Title;
   const receivedImage = route.params?.Image;
   const receivedSummary = route.params?.Summary;
   const receivedSourceUrl = route.params?.SourceUrl;

    return (
        <View style={styles.container}>
            <View>
                <View>
                    <Image style={styles.image} source={{ uri:receivedImage}} />
                </View>
                <View>
                    <Text>
                        Name :  {receivedTitle}
                    </Text>
                </View>
                <View>
                    <Text>
                        Ingrident:
                    </Text>
                </View>

                <View>
                    <Text>
                        Instructions : {receivedSummary}
                    </Text>
                </View>
                <View>
                    <Text>
                        source linke  {receivedSourceUrl}
                    </Text>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    image: {
        height: 50,
        width: 50,
    }
});