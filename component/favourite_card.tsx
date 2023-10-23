import { useEffect } from "react";
import { View,Image,Text, TouchableHighlight } from "react-native";

const Favourite_card = (props) =>{
    useEffect(()=>{
        console.log(props);
    });

    return (
        <View>
                <View>
                    <Image style={styles.image}
                source={{uri:props.data.image}
                    }
                    />
                </View>
                <View>
                    <View>
                        <Text> Name: {props.data.id} </Text>
                        <Text> this is the name of dish {props.data.title} </Text>
                         
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