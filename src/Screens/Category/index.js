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
    ScrollView,
    FlatList,
    Image

} from 'react-native';
import Header from '../../Components/header_type'
import Star from '../../Icons/star'
import { Colors } from '../../Utils/Color';
import { styles } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Item_list from '../../Components/item_Data'
import Must_Do from '../../Screens/Must_Do'
import Eat_Drink from '../../Screens/Eat_And_Drink'
export default function App({ route }) {
    const DATA = useSelector(state => state.root.DATA)
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
    var listItem = null
    const setList = () => {
        switch (route.params.index) {
            case 0:
                listItem = <Must_Do />
                break;
            case 1:
                listItem = <Eat_Drink />
                break;
            case 2:
                listItem =
                    <FlatList
                        maxToRenderPerBatch={4}
                        data={list}
                        renderItem={renderItem}
                        showsHorizontalScrollIndicator={false} />
                break;
            case 3:
                listItem =
                    <FlatList
                        style={{ marginHorizontal: 30 }}
                        numColumns={2}
                        data={list}
                        renderItem={renderItem_stay}
                        showsHorizontalScrollIndicator={false} />

                break;
            case 5:
                listItem =
                    <FlatList
                        maxToRenderPerBatch={4}
                        data={list}
                        renderItem={renderItem_Hotnew}
                        showsHorizontalScrollIndicator={false} />
                break;
            default:
                listItem =
                    <FlatList
                        numColumns={1}
                        data={list}
                        renderItem={renderItem}
                        showsHorizontalScrollIndicator={false} />
                break;
        }
    }
    const renderItem = ({ item }) => (
        <Item_list pic={item.pic} name={item.name} type={0} />
    );
    const renderItem_Hotnew = ({ item }) => (
        <Item_list pic={item.pic} name={item.dec} type={1} />
    );
    var listStar = []
    const find = (u) => {
        for (let i = 0; i < 5; i++) {
            var temp = (
                <View key={i} style={styles.star_item}>
                    {i < u ? <Star fill={Colors.thirteenth} /> : <Star />}
                </View>
            )
            listStar[i] = temp

        }
    }
    const Item_stay = ({ star }) => (
        <View style={styles.view_item_stay}>
            <Image source={require('../../static/images/stay.jpeg')} style={styles.item_stay_img} />
            <View style={styles.item_footer}>
                <Text style={styles.item_text}>ibis Saigon South Hotel</Text>
                {find(star)}
                <View style={styles.view_star_item}>
                    {listStar}
                </View>
            </View>
        </View>

    );
    const renderItem_stay = ({ item }) => (
        <Item_stay pic={item.pic} name={item.name} index={list.indexOf(item)} star={item.star} />
    );
    return (
        <ScrollView style={styles.full}>
            <Header name={route.params.name} />
            {setList()}
            {listItem}
        </ScrollView>
    );
}







