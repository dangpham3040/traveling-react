/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { Colors } from '../../Utils/Color';
import {
    View,
    FlatList,
    ScrollView,
    TextInput,
    Text,
    TouchableWithoutFeedback,
} from 'react-native';
import Header from '../../Components/header'
import Seach from '../../Icons/seach'
import { styles } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Item_list from '../../Components/item_Data'
export default function App({ navigation }) {
    const TYPE = useSelector(state => state.myCounter.TYPES)
    const DATA = useSelector(state => state.myCounter.DATA)
    const [position, setPosition] = useState(1)
    const [list, setlistitem] = useState()
    const [list_type, setlistitem_type] = useState()
    const [FilteredDataSource, setFilteredDataSource] = useState()
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
    const handleSearch = (text) => {
        if (text) {
            const newData = list.filter(function (item) {
                const itemData = item.dec
                    ? item.dec.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredDataSource(newData);
        }
        else {
            Keyboard.dismiss();
            setFilteredDataSource(DATA);
        }
    };
    useEffect(() => {
        storeData(TYPE, 'list_type')
        getData('list_type', setlistitem_type)
        storeData(DATA, 'list')
        getData('list', setlistitem)
        setFilteredDataSource(DATA)
    }, [])
    const renderItem_type = ({ item }) => (
        <Item_type name={item} index={list_type.indexOf(item) + 1} />
    );
    const Item_type = ({ name, index }) => (
        <TouchableWithoutFeedback onPress={() => setPosition(index)}>
            <Text style={[index === list_type.length ? styles._item_name_type : styles.item_name_type, position === index ? styles.item_choose : null]} >{name}</Text>
        </TouchableWithoutFeedback>
    );
    const renderItem = ({ item }) => (
        <Item_list pic={item.pic} name={item.dec} type={1} dec={'EAT & DRINK'} />
    );
    return (
        <ScrollView style={styles.full}>
            <Header name={'Seach'} />
            <View style={[styles.view_seach, styles.shadow]}>
                <View style={styles.Seach}>
                    <Seach />
                </View>
                <TextInput style={{ flex: 1 }} onChangeText={e=>handleSearch(e)}/>
            </View>
            <FlatList
                numColumns={1}
                data={list_type}
                renderItem={renderItem_type}
                horizontal={true}
                scrollEnabled
                showsHorizontalScrollIndicator={false}
                pagingEnabled
            />

            <FlatList
                numColumns={1}
                data={FilteredDataSource}
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
            />
        </ScrollView>
    );
}







