/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { Colors } from '../../Utils/Color';
import Goback from '../../Icons/goback'
import {
    View,
    ScrollView,
    Text,
    ImageBackground,
    FlatList,
    TouchableOpacity

} from 'react-native';
import Cloud from '../../Icons/cloud_big'
import Humidity from '../../Icons/humidity'
import Umbrella from '../../Icons/umbrella'
import Wind from '../../Icons/wind'
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
export default function App({ navigation }) {
    const DATA = [
        {
            id: 0,
            temperature1: 23,
            temperature2: 30,
            day: 'SUNDAY'
        },
        {
            id: 1,
            temperature1: 23,
            temperature2: 30,
            day: 'MONDAY'
        },
        {
            id: 2,
            temperature1: 23,
            temperature2: 30,
            day: 'TUESDAY'
        },
        {
            id: 3,
            temperature1: 23,
            temperature2: 30,
            day: 'WEDNESDAY'
        },
        {
            id: 4,
            temperature1: 23,
            temperature2: 30,
            day: 'THURSDAY'
        },
        {
            id: 5,
            temperature1: 23,
            temperature2: 30,
            day: 'FRIDAY'
        },
        {
            id: 6,
            temperature1: 23,
            temperature2: 30,
            day: 'SATURDAY'
        },

    ]
    const Item = ({ temperature1, temperature2, day }) => (
        <View style={styles.view_item}>
            <Text style={styles.item_day}>{day}</Text>
            <View style={styles.item_body}>
                <Text style={styles.item_text}>{temperature1}{"\u00b0"}C</Text>
                <Text style={styles.item_text}>{temperature2}{"\u00b0"}C</Text>
                <Text style={styles.item_text}>cloud</Text>
                <Cloud stroke={Colors.twelveth} style={styles.item_icon} />
            </View>
            <View style={styles.line} />
        </View>

    );
    const renderItem = ({ item }) => (
        <Item temperature1={item.temperature1} temperature2={item.temperature2} day={item.day} />
    );
    return (
        <ScrollView style={styles.full}>
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} >
                <ImageBackground styles={styles.image} source={require('../../static/images/weather.jpeg')}>
                    <View style={styles.view_image}>
                        <View style={styles.view_header}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Goback stroke={'#fff'} />
                            </TouchableOpacity>

                            <Text style={styles.today}>Today</Text>
                        </View>
                        <View style={styles.view_header_body}>
                            <Cloud style={styles.Cloud} />
                            <Text style={styles.text_temperature}>30{"\u00b0"}C</Text>
                            <Text style={styles.name}>Scattered Clouds</Text>
                        </View>
                        <View style={styles.view_header_footer}>
                            <View style={styles.weather}>
                                <Humidity />
                                <Text style={styles.text_weather}>70</Text>
                            </View>
                            <View style={styles.weather}>
                                <Umbrella />
                                <Text style={styles.text_weather}>1002</Text>
                            </View>
                            <View style={styles.weather}>
                                <Wind />
                                <Text style={styles.text_weather}>6m/s</Text>
                            </View>
                        </View>

                    </View>
                </ImageBackground>
            </LinearGradient>
            <FlatList
                numColumns={1}
                data={DATA}
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
            />
        </ScrollView>
    );
}







