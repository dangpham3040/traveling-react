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

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home'
import Favorite from '../Screens/Favorite'
import Question from '../Screens/Question'
import Gallery from '../Screens/Gallery'
import More from '../Screens/More'
import HomeIcon from '../Icons/Home'
import HeartIcon from '../Icons/heart'
import Share from '../Icons/share'
import Img from '../Icons/image'
import Add from '../Icons/more'
import { Colors } from '../Utils/Color';

export default function App() {
    const Tab = createBottomTabNavigator()
    const [srceen, setSrceen] = useState(0)

    return (
        < Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'Home') {
                        return <HomeIcon size={size} color={srceen === 0 ? Colors.second : Colors.eighth} fill={color} stroke={srceen === 0 ? Colors.primary : Colors.eighth} />;
                    } else if (route.name === 'My Trip') {
                        return <HeartIcon size={size} color={srceen === 1 ? Colors.primary : Colors.eighth} fill={color} stroke={srceen === 1 ? Colors.primary : Colors.eighth} />;
                    }
                    else if (route.name === 'Ask - Share') {
                        return <Share size={size} color={srceen === 2 ? Colors.primary : Colors.eighth} fill={color} stroke={srceen === 2 ? Colors.primary : Colors.eighth} />;
                    }
                    else if (route.name === 'Gallery') {
                        return <Img size={size} color={srceen === 3 ? Colors.primary : Colors.eighth} stroke={srceen === 3 ? Colors.primary : Colors.eighth} />;
                    }
                    else if (route.name === 'More') {
                        return <Add size={size} color={srceen === 4 ? Colors.primary : Colors.eighth} stroke={srceen === 4 ? Colors.primary : Colors.eighth} />;
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
            <Tab.Screen name="My Trip" component={Favorite} options={{ headerShown: false }}
                listeners={() => ({
                    tabPress: () => {
                        setSrceen(1)
                    },
                })} />
            <Tab.Screen name="Ask - Share" component={Question} options={{ headerShown: false }}
                listeners={() => ({
                    tabPress: () => {
                        setSrceen(2)
                    },
                })} />
            <Tab.Screen name="Gallery" component={Gallery} options={{ headerShown: false }}
                listeners={() => ({
                    tabPress: () => {
                        setSrceen(3)
                    },
                })} />
            <Tab.Screen name="More" component={More} options={{ headerShown: false }}
                listeners={() => ({
                    tabPress: () => {
                        setSrceen(4)
                    },
                })} />
        </Tab.Navigator >

    );
}







