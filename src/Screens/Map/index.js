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
    TouchableWithoutFeedback
} from 'react-native';

import Hearder from '../../Components/header_type'
import Check from '../../Icons/check_language'
import { Colors } from '../../Utils/Color';
import { styles } from './styles';
import { useSelector, useDispatch } from 'react-redux';

export default function App({ navigation }) {
 
    const TYPE = useSelector(state => state.myCounter.TYPES)
    const renderItem_type = ({ item }) => (
        <Item_type name={item} index={TYPE.indexOf(item) + 1} />
    );
    const Item_type = ({ name, index }) => (
        <View style={styles.item_type}>
            <Text style={styles.item_type_name} >{name}</Text>
        </View>
    );
    return (
        <View style={styles.full}>
            <Hearder name={'Map'} ishave/>
            <FlatList
                numColumns={1}
                data={TYPE}
                renderItem={renderItem_type}
                horizontal={true}
                scrollEnabled
                showsHorizontalScrollIndicator={false}
                pagingEnabled
            />
        </View>
    );
}







