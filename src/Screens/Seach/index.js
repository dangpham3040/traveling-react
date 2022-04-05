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
    FlatList,
    ScrollView,
    TextInput,
    Text,
    TouchableWithoutFeedback

} from 'react-native';
import Header from '../../Components/header'
import Seach from '../../Icons/seach'
import { styles } from './styles';
export default function App({ navigation }) {
    const [position, setPosition] = useState(1)
    const TYPE = ['ALL', 'Must Do', 'Eat & Drink', 'Festival & Event', 'Stay', 'Transportation']
    const renderItem_type = ({ item }) => (
        <Item_type name={item} index={TYPE.indexOf(item) + 1} />
    );
    const Item_type = ({ name, index }) => (
        <TouchableWithoutFeedback onPress={()=>setPosition(index)}>
            <Text style={[index === TYPE.length ? styles._item_name : styles.item_name, position === index ? styles.item_choose : null]} >{name}</Text>
        </TouchableWithoutFeedback>
    );
    return (
        <ScrollView style={styles.full}>
            <Header name={'Seach'} />
            <View style={[styles.view_seach, styles.shadow]}>
                <View style={styles.Seach}>
                    <Seach />
                </View>
                <TextInput style={{ flex: 1 }} />
            </View>
            <FlatList
                numColumns={1}
                data={TYPE}
                renderItem={renderItem_type}
                horizontal={true}
                scrollEnabled
                showsHorizontalScrollIndicator={false}
                pagingEnabled

            />
        </ScrollView>
    );
}







