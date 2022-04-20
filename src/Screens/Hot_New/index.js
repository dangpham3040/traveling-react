/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
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
import Goback from '../../Icons/goback'
import { Colors } from '../../Utils/Color';
import { styles } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
export default function App({ navigation }) {
    const DAY = useSelector(state => state.root.DAY)
    const [list, setlistitem] = useState()
    const storeData = async (value, name) => {
        try {
            await AsyncStorage.setItem(name, JSON.stringify(value))
        } catch (e) {
            console.log(e);
        }
    }
    const getData = async (name, set) => {
        try {
            const value = await AsyncStorage.getItem(name)
            return value != null ? set(JSON.parse(value)) : []
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        storeData(DAY, 'list')
        getData('list', setlistitem)
    }, [])
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
            <ImageBackground styles={styles.image} source={require('../../static/images/weather.jpeg')}>
                <LinearGradient colors={['rgba(0, 0, 0, 0) ,', 'rgba(0, 0, 0, 0.5)']} deg={180}  >
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
                </LinearGradient>
            </ImageBackground>
            <FlatList
                numColumns={1}
                data={list}
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
            />
        </ScrollView>
    );
}







