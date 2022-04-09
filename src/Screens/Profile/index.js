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
    FlatList,
    ImageBackground,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import Header from '../../Components/header'
import { Colors } from '../../Utils/Color';
import { styles } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function App({ navigation }) {
    const DATA = useSelector(state => state.myCounter.DATA)
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
        storeData(DATA, 'list')
        getData('list', setlistitem)
    }, [])
    const Item = ({ pic, name }) => (
        <View style={styles.view_item}>
            <Image style={styles.item} source={pic} />
            <View style={styles.view_item_text}>
                <Text style={styles.text_mustdo}>MUST DO</Text>
                <Text style={styles.item_name}>{name}</Text>
            </View>
        </View>

    );
    const renderItem = ({ item }) => (
        <Item pic={item.pic} position={list.indexOf(item)} name={item.name} />
    );
    return (
        <ScrollView style={styles.full}>
            <Header name={'My Profile'} />
            <View style={styles.info}>
                <Image source={require('../../static/images/avt.jpeg')} style={styles.avatar} />
                <Text style={styles.name}>Brooklyn Simmons</Text>
                <Text style={styles.email}>brooklyn.simmons@gmail.com</Text>
            </View>
            <View style={styles.view_button}>
                <TouchableOpacity style={styles.button_edit} onPress={() => navigation.navigate('Edit_Profile')}>
                    <Text style={styles.text_button}>Edit profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button_setting} onPress={() => navigation.navigate('Setiing')}>
                    <Text style={styles.text_button}>Setting</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <Text style={styles.title}>Trip History</Text>
            </View>
            <View>
                <FlatList
                    numColumns={1}
                    data={list}
                    renderItem={renderItem}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </ScrollView>
    );
}







