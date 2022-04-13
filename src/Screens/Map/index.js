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
    TouchableOpacity,
    TouchableWithoutFeedback,
    ScrollView
} from 'react-native';

import Hearder from '../../Components/header_type'
import Item_map from '../../Components/item_map'
import { Colors } from '../../Utils/Color';
import { styles } from './styles';
import { useSelector, useDispatch } from 'react-redux';

export default function App({ navigation }) {

    const TYPE = useSelector(state => state.myCounter.TYPES)
    const itemMap = [
        {
            name: 'SAIGON CENTRAL POST OFFICE',
            address: '123 Nguyen Huu Canh, Ward 22, Binh Thanh district',
            distance: 1,
            pic: require('../../static/images/map1.jpeg')
        },
        {
            name: 'Ben Thanh Maket',
            address: '123 Nguyen Huu Canh, Ward 22, Binh Thanh district',
            distance: 1,
            pic: require('../../static/images/map2.jpeg')
        },
        {
            name: 'Nguyen Hue Walking Street',
            address: '123 Nguyen Huu Canh, Ward 22, Binh Thanh district',
            distance: 1,
            pic: require('../../static/images/map3.jpeg')
        },

    ]
    const renderItem_type = ({ item }) => (
        <Item_type name={item} index={TYPE.indexOf(item) + 1} />
    );
    const Item_type = ({ name }) => (
        <View style={styles.item_type}>
            <Text style={styles.item_type_name} >{name}</Text>
        </View>
    );
    const renderItem_map = ({ item }) => (
        <Item_map name={item.name} pic={item.pic} address={item.address} distance={item.distance} />
    );

    return (
        <ScrollView style={styles.full}>
            <Hearder name={'Map'} ishave />
            <FlatList
                numColumns={1}
                data={TYPE}
                renderItem={renderItem_type}
                horizontal={true}
                scrollEnabled
                showsHorizontalScrollIndicator={false}
                pagingEnabled
            />
            <Image source={require('../../static/images/map_map.png')} style={styles.img_sty} />
            <FlatList
                numColumns={1}
                data={itemMap}
                renderItem={renderItem_map}
                scrollEnabled
                showsHorizontalScrollIndicator={false}
                pagingEnabled
            />
        </ScrollView>
    );
}







