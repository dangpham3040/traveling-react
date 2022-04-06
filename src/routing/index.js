import React, { useEffect, useState } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Start from '../Screens/Start'
import Sign_in_up from '../Screens/Sign_in_up'
import Home from '../Screens/Home'
import Profile from '../Screens/Profile'
import Edit_Profile from '../Screens/Edit_Profile'
import Setiing from '../Screens/Setting'
import Change_Password from '../Screens/Change_Password'
import Main from '../Screens/Main'
import Seach from '../Screens/Seach'
import HotNew from '../Screens/Hot_New'
import Forgot_Password from '../Screens/Forgot_Password'
import Category from '../Screens/Category'

import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

export default function App() {

    // const isfist = JSON.stringify(useSelector(state => state.isfist))
    const isfist = true
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Sign_in_up'>
                {isfist ? <Stack.Screen name="Start" component={Start} options={{ headerShown: false }} /> : null}
                {console.log('check: ' + isfist)}
                <Stack.Screen name="Sign_in_up" component={Sign_in_up} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
                <Stack.Screen name="Edit_Profile" component={Edit_Profile} options={{ headerShown: false }} />
                <Stack.Screen name="Setiing" component={Setiing} options={{ headerShown: false }} />
                <Stack.Screen name="Change_Password" component={Change_Password} options={{ headerShown: false }} />
                <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
                <Stack.Screen name="Seach" component={Seach} options={{ headerShown: false }} />
                <Stack.Screen name="HotNew" component={HotNew} options={{ headerShown: false }} />
                <Stack.Screen name="Forgot_Password" component={Forgot_Password} options={{ headerShown: false }} />
                <Stack.Screen name="Category" component={Category} options={{ headerShown: false }} />
            </Stack.Navigator>
            {/* <Tab.Navigator>
                <Stack.Screen name="Sign_in_up" component={Sign_in_up} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            </Tab.Navigator> */}
        </NavigationContainer>

    );
};