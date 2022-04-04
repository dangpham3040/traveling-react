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
    ImageBackground,
    TouchableOpacity

} from 'react-native';
import Header from '../../Components/header'
import Camera from '../../Icons/camera'
import Textinput from '../../Components/textinput'
import { styles } from './styles';
export default function App() {
    return (
        <View style={styles.full}>
            <Header name={'Edit Profile'} ishave />
            <View style={styles.info}>
                <ImageBackground source={require('../../static/images/avt.jpeg')} style={styles.avatar} imageStyle={{ borderRadius: 50 }} >
                    <Camera style={styles.camera} />
                </ImageBackground>
            </View>
            <View style={styles.body}>
                <Textinput icon={2} type={0} value={'Brooklyn Simmons'} />
                <Textinput icon={0} type={1} value={'brooklyn.simmons @gmail.com'} />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text_button}>Save Changes</Text>
                    <View style={styles.line} />
                </TouchableOpacity>
            </View>
        </View>
    );
}







