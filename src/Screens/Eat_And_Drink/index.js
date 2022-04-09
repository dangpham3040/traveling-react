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
    SafeAreaView,
    TouchableOpacity,
    ImageBackground,
    ScrollView

} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';
export default function App() {

    return (
        <ScrollView style={styles.full}>
            <View style={styles.margin}>
                <ImageBackground source={require('../../static/images/eat1.jpeg')} style={styles.activities1} imageStyle={{ borderRadius: 5 }} >
                    <View style={styles.item_text}>
                        <LinearGradient colors={['rgba(0, 0, 0, 0) ,', '#000000']} deg={180}  >
                            <Text style={styles.type}>EAT & DRINK</Text>
                            <Text style={styles.name}>Restaurent</Text>
                        </LinearGradient>
                    </View>
                </ImageBackground>
                <View style={styles.row}>
                    <View style={styles.col}>
                        <ImageBackground source={require('../../static/images/eat2.jpeg')} style={styles.activities2} imageStyle={{ borderRadius: 5 }} >
                            <View style={styles.item_text}>
                                <LinearGradient colors={['rgba(0, 0, 0, 0) ,', '#000000']} deg={180}  >
                                    <Text style={styles.type}>EAT & DRINK</Text>
                                    <Text style={styles.name}>Street Food</Text>
                                </LinearGradient>
                            </View>
                        </ImageBackground>
                        <ImageBackground source={require('../../static/images/eat3.jpeg')} style={styles.activities3} imageStyle={{ borderRadius: 5 }} >
                            <View style={styles.item_text}>
                                <LinearGradient colors={['rgba(0, 0, 0, 0) ,', '#000000']} deg={180}  >
                                    <Text style={styles.type}>EAT & DRINK</Text>
                                    <Text style={styles.name}>Coffee Shop</Text>
                                </LinearGradient>
                            </View>
                        </ImageBackground>
                        <ImageBackground source={require('../../static/images/eat4.jpeg')} style={styles.activities4} imageStyle={{ borderRadius: 5 }} >
                            <View style={styles.item_text}>
                                <LinearGradient colors={['rgba(0, 0, 0, 0) ,', '#000000']} deg={180}  >
                                    <Text style={styles.type}>EAT & DRINK</Text>
                                    <Text style={styles.name}>Coffee Shop</Text>
                                </LinearGradient>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={styles.col}>
                        <ImageBackground source={require('../../static/images/eat5.jpeg')} style={styles.activities5} imageStyle={{ borderRadius: 5 }} >
                            <View style={styles.item_text}>
                                <LinearGradient colors={['rgba(0, 0, 0, 0) ,', '#000000']} deg={180}  >
                                    <Text style={styles.type}>EAT & DRINK</Text>
                                    <Text style={styles.name}>Bar & Nightlife</Text>
                                </LinearGradient>
                            </View>
                        </ImageBackground>
                        <ImageBackground source={require('../../static/images/eat6.jpeg')} style={styles.activities6} imageStyle={{ borderRadius: 5 }} >
                            <View style={styles.item_text}>
                                <LinearGradient colors={['rgba(0, 0, 0, 0) ,', '#000000']} deg={180}  >
                                    <Text style={styles.type}>EAT & DRINK</Text>
                                    <Text style={styles.name}>Coffee Shop</Text>
                                </LinearGradient>
                            </View>
                        </ImageBackground>
                      
                    </View>
                </View>
            </View>

        </ScrollView>
    )
}







