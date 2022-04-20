/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';

import Home from '../Screens/Home'
import Favorite from '../Screens/Favorite'
import Question from '../Screens/Question'
import Gallery from '../Screens/Gallery'
import Trip_Plan from '../Screens/Trip_Plan'
import Edit from '../Screens/Edit'
import More from '../Screens/More'
import HomeIcon from '../Icons/Home'
import HeartIcon from '../Icons/heart'
import Share from '../Icons/share'
import Img from '../Icons/image'
import Add from '../Icons/more'
import Category from '../Screens/Category'
import { Colors } from '../Utils/Color';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createNativeStackNavigator();
export default function App() {
    const Tab = createBottomTabNavigator()
    const [srceen, setSrceen] = useState(0)

    return (

        < Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'Home' || route.name === 'Category') {
                        return <HomeIcon size={size} color={srceen === 0 ? Colors.second : Colors.eighth} fill={srceen === 0 ? Colors.primary : Colors.second} stroke={srceen === 0 ? Colors.primary : Colors.eighth} />;
                    } else if (route.name === 'My Trip' || route.name === 'Trip_Plan') {
                        return <HeartIcon size={size} color={srceen === 1 ? Colors.primary : Colors.eighth} fill={srceen === 1 ? Colors.primary : Colors.second} stroke={srceen === 1 ? Colors.primary : Colors.eighth} />;
                    }
                    else if (route.name === 'Ask - Share') {
                        return <Share size={size} color={srceen === 2 ? Colors.primary : Colors.eighth} fill={srceen === 2 ? Colors.primary : Colors.second} stroke={srceen === 2 ? Colors.primary : Colors.eighth} />;
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
                inactiveTintColor: Colors.eighth,
            }}
            >
            <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false, }}
                listeners={() => ({
                    tabPress: () => {
                        setSrceen(0)
                    },
                })} />
            <Tab.Screen name="My Trip" component={TripStack} options={{ headerShown: false }}
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
export const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home-stack">
            <Stack.Screen name="Home-stack" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Category" component={Category} options={{ headerShown: false }} />
            <Stack.Screen name="Edit" component={Edit} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};
export const TripStack = () => {
    return (
        <Stack.Navigator initialRouteName="Trip-stack">
            <Stack.Screen name="Trip-stack" component={Favorite} options={{ headerShown: false }} />
            <Stack.Screen name="Trip_Plan" component={Trip_Plan} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};






