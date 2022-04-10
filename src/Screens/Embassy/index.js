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
import Gonext from '../../Icons/gonext'
import Godown from '../../Icons/godown'
import { Colors } from '../../Utils/Color';
import { styles } from './styles';
import { useSelector, useDispatch } from 'react-redux';

export default function App({ navigation }) {
    const Country = useSelector(state => state.myCounter.Country)
    const [choose, setchoose] = useState()
    const handl_choose = (num = null) => {
        setchoose(num)
    }
    const Item = ({ name, pic, index }) => (
        <View style={styles.item}>
            <Image source={pic} style={styles.Img} />
            <View style={styles.row}>
                <Text style={styles.name}> {name}</Text>
                {choose === index ? <View style={styles.view_text}>
                    <Text style={styles.text_item}>
                        Add: 4 đường Lê Duẩn, phường Bến Nghé, Quận 1
                    </Text>
                    <Text style={styles.text_item}>
                        Tel: 028-35204200
                    </Text>
                    <Text style={styles.text_item}>
                        Email: @gmail.info.com</Text>
                </View>
                    : null}
            </View>
            <View style={styles.icon}>
                <TouchableOpacity onPress={() => choose === index ? handl_choose() : handl_choose(index)}>
                    {choose === index ? <Godown /> : <Gonext />}
                </TouchableOpacity>

            </View>
        </View>

    );
    const renderItem = ({ item }) => (
        <Item name={item.name} pic={item.pic} index={Country.indexOf(item)} />
    );
    return (
        <View style={styles.full}>
            <Hearder name={'Embassy'} />
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







