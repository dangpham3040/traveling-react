import React, { useEffect, useState } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Start from '../Screens/Start'

const Stack = createNativeStackNavigator();
export default function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Start">
                <Stack.Screen name="Start" component={Start} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>

    );
};