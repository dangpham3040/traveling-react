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
    Image,
    ImageBackground

} from 'react-native';
import Header from '../../Components/header'
import Seach from '../../Icons/seach'
import Heart from '../../Icons/heart_item'
import { styles } from './styles';
export default function App({ navigation }) {
    const [position, setPosition] = useState(1)

    const DATA = [
        {
            id: 0,
            pic: require('../../static/images/Silder1.jpeg'),
            temperature: 30,
            place: 'Q1, Ho Chi Minh City',
            dec: 'In response to the Banh mi Saigon week, Chef Jack Lee presents the ' + ['Banh mi in ginger sauce'],
            start: 2
        },
        {
            id: 1,
            pic: require('../../static/images/Silder2.jpeg'),
            temperature: 30,
            place: 'Q1, Ho Chi Minh City',
            dec: 'In response to the Banh mi Saigon week, Chef Jack Lee presents the ' + ['Banh mi in ginger sauce']
            , start: 2
        },
        {
            id: 2,
            pic: require('../../static/images/Silder3.png'),
            place: 'Q1, Ho Chi Minh City',
            dec: 'In response to the Banh mi Saigon week, Chef Jack Lee presents the ' + ['Banh mi in ginger sauce']
            , start: 2
        },
        {
            id: 3,
            pic: require('../../static/images/Silder4.jpeg'),
            temperature: 30,
            place: 'Q1, Ho Chi Minh City',
            dec: 'In response to the Banh mi Saigon week, Chef Jack Lee presents the ' + ['Banh mi in ginger sauce']
            , start: 2
        },
        {
            id: 4,
            pic: require('../../static/images/Silder5.jpeg'),
            temperature: 30,
            place: 'Q1, Ho Chi Minh City',
            dec: 'In response to the Banh mi Saigon week, Chef Jack Lee presents the ' + ['Banh mi in ginger sauce']
            , start: 2
        },
        {
            id: 5,
            pic: require('../../static/images/Silder6.jpeg'),
            temperature: 30,
            place: 'Q1, Ho Chi Minh City',
            dec: 'In response to the Banh mi Saigon week, Chef Jack Lee presents the ' + ['Banh mi in ginger sauce']
            , start: 2
        },
        {
            id: 6,
            pic: require('../../static/images/Silder7.jpeg'),
            temperature: 30,
            place: 'Q1, Ho Chi Minh City',
            dec: 'In response to the Banh mi Saigon week, Chef Jack Lee presents the ' + ['Banh mi in ginger sauce']
            , start: 2
        },
        {
            id: 7,
            pic: require('../../static/images/Silder8.jpeg'),
            place: 'Q1, Ho Chi Minh City',
            dec: 'In response to the Banh mi Saigon week, Chef Jack Lee presents the ' + ['Banh mi in ginger sauce']
            , start: 2
        },
    ]
    const TYPE = ['ALL', 'Must Do', 'Eat & Drink', 'Festival & Event', 'Stay', 'Transportation']
    const renderItem_type = ({ item }) => (
        <Item_type name={item} index={TYPE.indexOf(item) + 1} />
    );
    const Item_type = ({ name, index }) => (
        <TouchableWithoutFeedback onPress={() => setPosition(index)}>
            <Text style={[index === TYPE.length ? styles._item_name_type : styles.item_name_type, position === index ? styles.item_choose : null]} >{name}</Text>
        </TouchableWithoutFeedback>
    );
    const Item = ({ pic, name }) => (
        <ImageBackground style={styles.view_item} source={pic} imageStyle={{ borderRadius: 5 }}>
            <View style={styles.Heart}>
                <Heart stroke={Colors.second} />
            </View>
            <View style={styles.view_item_text}>
                <Text style={styles.text_item}>EAT & DRINK</Text>
                <Text style={styles.item_name}>{name}</Text>
            </View>
        </ImageBackground>

    );
    const renderItem = ({ item }) => (
        <Item pic={item.pic} position={item.position} name={item.dec} />
    );
    const startlist=[]
    
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

            <FlatList
                numColumns={1}
                data={DATA}
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
            />

        </ScrollView>
    );
}







