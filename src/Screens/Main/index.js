/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';

import {
    Text,
    View,
    TouchableOpacity

} from 'react-native';
import Header from '../../Components/header'
import Textinput from '../../Components/textinput'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../Screens/Home'
import Profile from '../../Screens/Profile'
import HomeIcon from '../../Icons/Home'
import HeartIcon from '../../Icons/heart'
import { Colors } from '../../Utils/Color';
import { LogBox } from 'react-native';
import { styles } from './styles';
export default function App() {
    const Tab = createBottomTabNavigator()
    const [srceen, setSrceen] = useState(0)

    return (
        < Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        return <HomeIcon name={iconName} size={size} color={color} fill={color} stroke={srceen === 0 ? Colors.second : Colors.eighth} />;
                    } else if (route.name === 'Profile') {
                        return <HeartIcon name={iconName} size={size} color={color} fill={color} stroke={srceen === 1 ? Colors.primary : Colors.eighth} />;
                    }
                },
            })
            }
            tabBarOptions={{
                activeTintColor: Colors.primary,
                inactiveTintColor: Colors.second,

            }}>
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false, }}
                listeners={() => ({
                    tabPress: () => {
                        setSrceen(0)
                    },
                })} />
            <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }}
                listeners={() => ({
                    tabPress: () => {
                        setSrceen(1)
                    },
                })} />

        </Tab.Navigator >
  
    );
}







