import React, { useEffect, useState } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Start from '../Screens/Start'
import Sign_in_up from '../Screens/Sign_in_up'
import Home from '../Screens/Home'
import { useSelector, useDispatch } from 'react-redux';

import allReducter from '../Redux';
import { createStore } from 'redux';
import { is } from 'immer/dist/internal';
const Stack = createNativeStackNavigator();

export default function App() {
    const dispatch = useDispatch();
    const store = createStore(allReducter);
    const isfist = useSelector((state) => state)
    return (

        <NavigationContainer>
            <Stack.Navigator >
                {/* {isfist ? <Stack.Screen name="Start" component={Start} options={{ headerShown: false }} /> : null} */}
                <Stack.Screen name="Sign_in_up" component={Sign_in_up} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>

    );
};