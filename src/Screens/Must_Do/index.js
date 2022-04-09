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
            <Text style={styles.title}>ATTRACTION</Text>
            <View style={styles.margin}>
                <ImageBackground source={require('../../static/images/attraction1.jpeg')} style={styles.attraction1} imageStyle={{ borderRadius: 5 }} >
                    <View style={styles.item_text}>
                        <LinearGradient colors={['rgba(0, 0, 0, 0) ,', '#000000']} deg={180}  >
                            <Text style={styles.type}>ATTRACTION</Text>
                            <Text style={styles.name}>Typical Architectures</Text>
                        </LinearGradient>
                    </View>
                </ImageBackground>
                <View style={styles.row}>
                    <View style={styles.col}>
                        <ImageBackground source={require('../../static/images/attraction2.jpeg')} style={styles.attraction2} imageStyle={{ borderRadius: 5 }} >
                            <View style={styles.item_text}>
                                <LinearGradient colors={['rgba(0, 0, 0, 0) ,', '#000000']} deg={180}  >
                                    <Text style={styles.type}>ATTRACTION</Text>
                                    <Text style={styles.name}>Museums</Text>
                                </LinearGradient>
                            </View>
                        </ImageBackground>
                        <ImageBackground source={require('../../static/images/attraction3.jpeg')} style={styles.attraction3} imageStyle={{ borderRadius: 5 }} >
                            <View style={styles.item_text}>
                                <LinearGradient colors={['rgba(0, 0, 0, 0) ,', '#000000']} deg={180}  >
                                    <Text style={styles.type}>ATTRACTION</Text>
                                    <Text style={styles.name}>Signt-Seeing Locations</Text>
                                </LinearGradient>
                            </View>
                        </ImageBackground>
                    </View>
                    <ImageBackground source={require('../../static/images/attraction4.jpeg')} style={styles.attraction4} imageStyle={{ borderRadius: 5 }} >
                        <View style={styles.item_text}>
                            <LinearGradient colors={['rgba(0, 0, 0, 0) ,', '#000000']} deg={180}  >
                                <Text style={styles.type}>ATTRACTION</Text>
                                <Text style={styles.name}>Typical Architectures</Text>
                            </LinearGradient>
                        </View>
                    </ImageBackground>
                </View>
                <Text style={styles.title}>ACTIVITIES</Text>
                <ImageBackground source={require('../../static/images/activities1.jpeg')} style={styles.activities1} imageStyle={{ borderRadius: 5 }} >
                    <View style={styles.item_text}>
                        <LinearGradient colors={['rgba(0, 0, 0, 0) ,', '#000000']} deg={180}  >
                            <Text style={styles.type}>ATTRACTION</Text>
                            <Text style={styles.name}>Typical Architectures</Text>
                        </LinearGradient>
                    </View>
                </ImageBackground>
                <View style={styles.row}>
                    <View style={styles.col}>
                        <ImageBackground source={require('../../static/images/activities2.jpeg')} style={styles.activities2} imageStyle={{ borderRadius: 5 }} >
                            <View style={styles.item_text}>
                                <LinearGradient colors={['rgba(0, 0, 0, 0) ,', '#000000']} deg={180}  >
                                    <Text style={styles.type}>ACTIVITIES</Text>
                                    <Text style={styles.name}>Shopping Mall</Text>
                                </LinearGradient>
                            </View>
                        </ImageBackground>
                        <ImageBackground source={require('../../static/images/activities3.jpeg')} style={styles.activities3} imageStyle={{ borderRadius: 5 }} >
                            <View style={styles.item_text}>
                                <LinearGradient colors={['rgba(0, 0, 0, 0) ,', '#000000']} deg={180}  >
                                    <Text style={styles.type}>ACTIVITIES</Text>
                                    <Text style={styles.name}>Tours</Text>
                                </LinearGradient>
                            </View>
                        </ImageBackground>
                        <ImageBackground source={require('../../static/images/activities4.jpeg')} style={styles.activities4} imageStyle={{ borderRadius: 5 }} >
                            <View style={styles.item_text}>
                                <LinearGradient colors={['rgba(0, 0, 0, 0) ,', '#000000']} deg={180}  >
                                    <Text style={styles.type}>ACTIVITIES</Text>
                                    <Text style={styles.name}>Entertaiment</Text>
                                </LinearGradient>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={styles.col}>
                        <ImageBackground source={require('../../static/images/activities5.jpeg')} style={styles.activities5} imageStyle={{ borderRadius: 5 }} >
                            <View style={styles.item_text}>
                                <LinearGradient colors={['rgba(0, 0, 0, 0) ,', '#000000']} deg={180}  >
                                    <Text style={styles.type}>ACTIVITIES</Text>
                                    <Text style={styles.name}>Performance</Text>
                                </LinearGradient>
                            </View>
                        </ImageBackground>
                        <ImageBackground source={require('../../static/images/activities6.jpeg')} style={styles.activities6} imageStyle={{ borderRadius: 5 }} >
                            <View style={styles.item_text}>
                                <LinearGradient colors={['rgba(0, 0, 0, 0) ,', '#000000']} deg={180}  >
                                    <Text style={styles.type}>ACTIVITIES</Text>
                                    <Text style={styles.name}>Markets</Text>
                                </LinearGradient>
                            </View>
                        </ImageBackground>
                        <ImageBackground source={require('../../static/images/activities7.jpeg')} style={styles.activities7} imageStyle={{ borderRadius: 5 }} >
                            <View style={styles.item_text}>
                                <LinearGradient colors={['rgba(0, 0, 0, 0) ,', '#000000']} deg={180}  >
                                    <Text style={styles.type}>ACTIVITIES</Text>
                                    <Text style={styles.name}>Spa & Healthcare</Text>
                                </LinearGradient>
                            </View>
                        </ImageBackground>
                        <ImageBackground source={require('../../static/images/activities8.jpeg')} style={styles.activities8} imageStyle={{ borderRadius: 5 }} >
                            <View style={styles.item_text}>
                                <LinearGradient colors={['rgba(0, 0, 0, 0) ,', '#000000']} deg={180}  >
                                    <Text style={styles.type}>ACTIVITIES</Text>
                                    <Text style={styles.name}>Sourvenirs</Text>
                                </LinearGradient>
                            </View>
                        </ImageBackground>
                    </View>
                </View>
            </View>

        </ScrollView>
    )
}







