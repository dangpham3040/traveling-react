import React, { useEffect, useState } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Start from '../Screens/Start'
import Sign_in_up from '../Screens/Sign_in_up'
import Home from '../Screens/Home'
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

export default function App() {

    const isfist = JSON.stringify(useSelector(state => state))
    return (

        <NavigationContainer>
            <Stack.Navigator >
                {isfist ? <Stack.Screen name="Start" component={Start} options={{ headerShown: false }} /> : null}
                {
                    console.log('check: ' + isfist)
                
                }
                <Stack.Screen name="Sign_in_up" component={Sign_in_up} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>

    );
};