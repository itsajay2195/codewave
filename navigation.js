import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './src/screens/Home'
import Details from './src/screens/Details'




export default function RootNavigation() {
    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false
    }

    return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
                    <Stack.Screen name='Home' component={Home}></Stack.Screen>
                    <Stack.Screen name='Details' component={Details}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
      
    )
}
