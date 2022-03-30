/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';

import {
    SafeAreaView,
    StatusBar,
    Text,
    TextInput,
    View,
    FlatList,
    Image,
    TouchableOpacity,
    ImageBackground,

} from 'react-native';
import { SliderBox } from "react-native-image-slider-box"
import ViewSlider from 'react-native-view-slider'
import { styles } from './styles'
import Slider from '../../Components/silder'
const images = [
    require('../../static/images/Welcome _1.png'),
    require('../../static/images/Welcome _2.png'),
    require('../../static/images/Welcome _3.png'),
]


export default function App() {
    return (
        <Slider style={{ flex: 1 }} />
    );
}







