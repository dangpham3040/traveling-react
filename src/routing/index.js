import React, { useEffect, useState, useContext } from 'react';

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
import Main from './maintab'
import Seach from '../Screens/Seach'
import HotNew from '../Screens/Hot_New'
import Forgot_Password from '../Screens/Forgot_Password'
import Emergency from '../Screens/Emergency'
import Embassy from '../Screens/Embassy'
import Safety from '../Screens/Safety'
import Language from '../Screens/language'
import Money_Changers from '../Screens/Money_Changers'
import Visa from '../Screens/Visa'
import Category from '../Screens/Category'
import Map from '../Screens/Map'
import Edit from '../Screens/Edit'
import Favorite from '../Screens/Favorite'
import Trip_Plan from '../Screens/Trip_Plan'
import Page_Content from '../Screens/Page_Content'
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
export default function App() {
    const [isfists, setisfists] = useState(true)
    const islogin = useSelector(state => state.root.islogin)
    const getfist = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('isfist');
            if (jsonValue) {
                const data = JSON.parse(jsonValue);
                setisfists(data)
            }
        } catch (e) {
            console.log(e)
        }
    };
    useEffect(() => {
        getfist()
    }, [getfist()]);
    return (
        <NavigationContainer>
            {islogin ?
                <Stack.Navigator>
                    <Stack.Screen name="Sign_in_up" component={Sign_in_up} options={{ headerShown: false }} />
                    <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
                </Stack.Navigator> :
                null}
            <Stack.Navigator>
                {isfists ? <Stack.Screen name="Start" component={Start} options={{ headerShown: false }} /> : null}
                <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="Edit_Profile" component={Edit_Profile} options={{ headerShown: false }} />
                <Stack.Screen name="Setiing" component={Setiing} options={{ headerShown: false }} />
                <Stack.Screen name="Change_Password" component={Change_Password} options={{ headerShown: false }} />
                <Stack.Screen name="Seach" component={Seach} options={{ headerShown: false }} />
                <Stack.Screen name="HotNew" component={HotNew} options={{ headerShown: false }} />
                <Stack.Screen name="Forgot_Password" component={Forgot_Password} options={{ headerShown: false }} />
                <Stack.Screen name="Category" component={Category} options={{ headerShown: false }} />
                <Stack.Screen name="Favorite" component={Favorite} options={{ headerShown: false }} />
                <Stack.Screen name="Trip_Plan" component={Trip_Plan} options={{ headerShown: false }} />
                <Stack.Screen name="Tab" component={Main} options={{ headerShown: false }} />
                <Stack.Screen name="Emergency" component={Emergency} options={{ headerShown: false }} />
                <Stack.Screen name="Safety" component={Safety} options={{ headerShown: false }} />
                <Stack.Screen name="Visa" component={Visa} options={{ headerShown: false }} />
                <Stack.Screen name="Embassy" component={Embassy} options={{ headerShown: false }} />
                <Stack.Screen name="Language" component={Language} options={{ headerShown: false }} />
                <Stack.Screen name="Money_Changers" component={Money_Changers} options={{ headerShown: false }} />
                <Stack.Screen name="Map" component={Map} options={{ headerShown: false }} />
                <Stack.Screen name="Edit" component={Edit} options={{ headerShown: false }} />
                <Stack.Screen name="Page_Content" component={Page_Content} options={{ headerShown: false }} />
            </Stack.Navigator>

        </NavigationContainer>

    );
};