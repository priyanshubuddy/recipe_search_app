import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/home';
import { Home_stack } from './navigation/stack_navigation';
import Tab_stack from './navigation/Tab_navigation';

export default function App() {
  return (
    <NavigationContainer>
        <Tab_stack />
    </NavigationContainer>
  );
}
 
