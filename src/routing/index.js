import React, { useEffect, useState } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Start from '../Screens/Start'
import Sign_in_up from '../Screens/Sign_in_up'

const Stack = createNativeStackNavigator();
export default function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="Sign_in_up" component={Sign_in_up} options={{ headerShown: false }} />
                <Stack.Screen name="Start" component={Start} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>

    );
};