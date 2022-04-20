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
import Clock from '../../Icons/clock'
import Godown from '../../Icons/godown'
import { Colors } from '../../Utils/Color';
import { styles } from './styles';
import { useSelector, useDispatch } from 'react-redux';

export default function App({ navigation }) {
    const Country = useSelector(state => state.root.Country)

    const Item = ({ name, pic, index, currency }) => (
        <View style={styles.item}>
            <Image source={pic} style={styles.Img} />
            <Text style={styles.item_text}> 0.84</Text>
            <Text style={styles.item_text}> {currency}</Text>
            <Text style={styles.name}> {name}</Text>
            <View style={styles.item_footer}>
                <Text style={styles.d}> đ</Text>
                <Text style={styles.item_text}> 1.000</Text>
            </View>
        </View>

    );
    const renderItem = ({ item }) => (
        <Item name={item.name} pic={item.pic} index={Country.indexOf(item)} currency={item.currency} />
    );
    return (
        <View style={styles.full}>
            <Hearder name={'Money Changers'} />
            <View style={styles.view}>
                <View style={styles.view_box}>
                    <View style={styles.box}>
                        <View style={styles.name_box}>
                            <Text style={styles.box_name}>USA</Text>
                            <View style={styles.icon}>
                                <Godown />
                            </View>
                        </View>
                        <View style={styles.box_money}>
                            <Text style={styles.num}>1</Text>
                            <Text style={styles.money_currency}>USD</Text>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <View style={styles.name_box}>
                            <Text style={styles.box_name}>Vietnam</Text>
                            <View style={styles.icon}>
                                <Godown />
                            </View>
                        </View>
                        <View style={styles.box_money}>
                            <Text style={styles.num}>1</Text>
                            <Text style={styles.money_currency}>VND</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.view_time}>
                    <Clock />
                    <Text style={[styles.time, styles.datetime]}>2021/10/14</Text>
                    <Text style={styles.time}>11:00</Text>
                </View>
                <View style={styles.line} />
            </View>

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







