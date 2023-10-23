import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Favourite_stack, Home_stack } from "./stack_navigation";

const Tab = createBottomTabNavigator();
const Tab_stack = ()=>{
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home_tab" component={Home_stack}/>
            <Tab.Screen name="Favourite_tab" component={Favourite_stack}/>

        </Tab.Navigator>
    );
}

export default Tab_stack;