import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './src/screens/Home'
import Details from './src/screens/Details'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'



export default function RootNavigation() {
    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: true,
        headerTransparent: true,
        
    }

    return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
                    <Stack.Screen name='Home' component={Home} options={{title: ''}}/>
                    <Stack.Screen 
                        name='Details' 
                        component={Details} 
                        screenOptions={screenOptions} 
                        options={{ title: '',headerBackImage:()=> <MaterialCommunityIcons name="arrow-left" size={25} color="#fff" /> ,
                        headerBackTitleVisible: false }}/>
                </Stack.Navigator>
            </NavigationContainer>
      
    )
}
