import { View,Image,Text, TouchableHighlight } from "react-native";

const Favourite_card = () =>{
    return (
        <View>
                <View>
                    <Image style={styles.image}
                source={{uri:'https://21cif.com/images/http.jpg'}
                    }
                    />
                </View>
                <View>
                    <View>
                        <Text> Name: </Text>
                        <Text> this is the name of dish </Text>
                         
                    </View>
                    <View>
                        <TouchableHighlight>
                            <View>
                                <Text> remove </Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
    );
}

export default Favourite_card;