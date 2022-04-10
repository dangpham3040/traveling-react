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
    TouchableOpacity
} from 'react-native';

import Hearder from '../../Components/hearder_info'
import Check from '../../Icons/check_language'
import { Colors } from '../../Utils/Color';
import { styles } from './styles';
import { useSelector, useDispatch } from 'react-redux';

export default function App({ navigation }) {
    const Country = useSelector(state => state.myCounter.Country)
    const [choose, setchoose] = useState(0)
    const Item = ({ name, pic, index }) => (
        <TouchableOpacity style={[styles.item, choose === index ? styles.item_choose : null]} onPress={() => setchoose(index)}>
            <Image source={pic} style={styles.Img} />
            <Text style={styles.name}> {name}</Text>
            <View style={styles.icon}>
                {choose === index ? <Check /> : null}
            </View>
        </TouchableOpacity>

    );
    const renderItem = ({ item }) => (
        <Item name={item.name} pic={item.pic} index={Country.indexOf(item)} />
    );
    return (
        <View style={styles.full}>
            <Hearder name={'Language'} />
            <FlatList
                style={styles.list}
                numColumns={1}
                data={Country}
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
                scrollEnabled={false}
            />
        </View>
    );
}







