import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import Recipes from '../screens/Recipes';
import Favourite from '../screens/Favourite';
import Card_holder from '../component/cardHolder';


const Stack = createNativeStackNavigator();


const Home_stack = () =>{
    return (
        <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Recipes" component={Card_holder} />
        <Stack.Screen name="R" children={Recipes} />
      </Stack.Navigator>
    );
}


const Favourite_stack = () =>{
    return (
        <Stack.Navigator>
        <Stack.Screen name="Favourite" component={Favourite} />
      </Stack.Navigator>
    );
}

export {Home_stack,Favourite_stack};