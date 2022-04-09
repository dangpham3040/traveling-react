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
    Image,
    ScrollView,
    FlatList,
    TouchableWithoutFeedback,
    TextInput

} from 'react-native';
import Header from '../../Components/header_type';
import Seach from '../../Icons/seach'
import Item_trip_plan from '../../Components/item_trip_plan'
import { createStore } from 'redux';
import { styles } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function App() {
    const [position, setPosition] = useState(0)
    const TYPE = useSelector(state => state.myCounter.DAYNUMBER)
    const DATA = useSelector(state => state.myCounter.DATA)
    const [list, setlistitem] = useState()
    const [list_type, setlistitem_type] = useState()
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
        storeData(TYPE, 'list_type')
        getData('list_type', setlistitem_type)
        storeData(DATA, 'list')
        getData('list', setlistitem)
    }, [])
    const renderItem_type = ({ item }) => (
        <Item_type name={item} index={list_type.indexOf(item)} />
    );
    const Item_type = ({ name, index }) => (
        <TouchableWithoutFeedback onPress={() => setPosition(index)}>
            <View style={[styles.view_item, styles.item, position === index ? styles.item_choose : null]}>
                <Text style={styles.text_item} >Day {name}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
    const renderItem = ({ item, }) => (
        <Item_trip_plan pic={item.pic} position={list.indexOf(item)} name={item.name} />
    );
   
    return (
        <View style={styles.full}>
            <Header name={'Trip Plan'} />
            <Text style={styles.name_city}>Ho Chi Minh</Text>
            <Text style={styles.day}>10 Oct - 15 Oct</Text>
            <FlatList
                style={styles.listday}
                numColumns={1}
                data={list_type}
                renderItem={renderItem_type}
                horizontal={true}
                scrollEnabled
                showsHorizontalScrollIndicator={false}
                pagingEnabled
            />
            <View style={[styles.view_seach, styles.shadow]}>
                <View style={styles.Seach}>
                    <Seach />
                </View>
                <TextInput style={{ flex: 1 }} />
            </View>
            <ScrollView style={styles.data}>
            <FlatList
                numColumns={1}
                data={list}
                renderItem={renderItem}
            />
            </ScrollView>
            <Image source={require('../../static/images/map.png')} style={styles.map_image} />
        </View>

    )

}







