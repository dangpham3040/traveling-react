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
    TouchableOpacity,
    ScrollView,
    FlatList,
    ImageBackground,
    Image

} from 'react-native';
import Header from '../../Components/header_type'
import Heart from '../../Icons/heart_item'
import Star from '../../Icons/star'
import { Colors } from '../../Utils/Color';
import { styles } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function App({ route }) {
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
    var Items = null
    const setItem = (value) => {
        switch (route.params.index) {
            case 5:
                Items = <Text style={styles.item_name_dec}>{list[value].dec}</Text>
                break;
            default:
                Items = <Text style={styles.item_name}>{list[value].name}</Text>
                break;
        }
    }
    var listItem = null
    const setList = () => {
        switch (route.params.index) {
            case 2:
                listItem =
                    <FlatList
                        numColumns={2}
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
    const Item = ({ pic, position }) => (
        <ImageBackground style={styles.view_item} source={pic} imageStyle={{ borderRadius: 5 }}>
            <View style={styles.Heart}>
                <Heart stroke={Colors.second} />
            </View>
            {setItem(position)}
            {Items}
        </ImageBackground>

    );
    const renderItem = ({ item }) => (
        <Item pic={item.pic} position={list.indexOf(item)} name={item.name} dec={item.dec} />
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







