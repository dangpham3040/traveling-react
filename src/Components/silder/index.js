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
    Image,
    StyleSheet

} from 'react-native';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        pic: require('../../static/images/Welcome _1.png')
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        pic: require('../../static/images/Welcome _2.png')
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        pic: require('../../static/images/Welcome _3.png')
    },
];

const Item = ({ title, pic }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{pic}</Text>
    </View>
);

export default function App() {
    const renderItem = ({ item }) => (
        <Item title={item.title} pic={item.pic} />
    );
    return (
        <FlatList
 
            numColumns={1}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}
            scrollEnabled
            showsHorizontalScrollIndicator={false}
        />
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    item: {
        flex: 1,
        height:'100%',
        width:'100%',
        backgroundColor: '#f9c2ff',
        padding:20
    },
    title: {
        fontSize: 32,
    },
});






