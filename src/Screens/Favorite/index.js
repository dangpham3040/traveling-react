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
    ImageBackground,
    TouchableOpacity,
    Image,
    FlatList,
    ScrollView

} from 'react-native';
import Going_trip from '../../Components/going_trip'
import { styles } from './styles';
import Item_going_trip from '../../Components/item_going_trip'
export default function App() {

    const renderItem = ({ item }) => (
        <Item_going_trip pic={item.pic} position={DATA.indexOf(item)} name={item.name} />
    );
    const DATA = [
        {
            id: 0,
            pic: require('../../static/images/Silder1.jpeg'),
            temperature: 30,
            place: 'Q1, Ho Chi Minh City',
            dec: 'In response to the Banh mi Saigon week, Chef Jack Lee presents the ' + ['Banh mi in ginger sauce'],
            name: 'SAIGON CENTRAL POST OFFICE'
            , star: 2
        },
        {
            id: 1,
            pic: require('../../static/images/Silder2.jpeg'),
            temperature: 30,
            place: 'Q1, Ho Chi Minh City',
            dec: 'In response to the Banh mi Saigon week, Chef Jack Lee presents the ' + ['Banh mi in ginger sauce'],
            name: 'SAIGON CENTRAL POST OFFICE'
            , star: 2
        },
        {
            id: 2,
            pic: require('../../static/images/Silder3.png'),
            place: 'Q1, Ho Chi Minh City',
            dec: 'In response to the Banh mi Saigon week, Chef Jack Lee presents the ' + ['Banh mi in ginger sauce'],
            name: 'SAIGON CENTRAL POST OFFICE'
            , star: 2
        },
        {
            id: 3,
            pic: require('../../static/images/Silder4.jpeg'),
            temperature: 30,
            place: 'Q1, Ho Chi Minh City',
            dec: 'In response to the Banh mi Saigon week, Chef Jack Lee presents the ' + ['Banh mi in ginger sauce'],
            name: 'SAIGON CENTRAL POST OFFICE'
            , star: 2
        },
        {
            id: 4,
            pic: require('../../static/images/Silder5.jpeg'),
            temperature: 30,
            place: 'Q1, Ho Chi Minh City',
            dec: 'In response to the Banh mi Saigon week, Chef Jack Lee presents the ' + ['Banh mi in ginger sauce'],
            name: 'SAIGON CENTRAL POST OFFICE'
            , star: 2
        },
        {
            id: 5,
            pic: require('../../static/images/Silder6.jpeg'),
            temperature: 30,
            place: 'Q1, Ho Chi Minh City',
            dec: 'In response to the Banh mi Saigon week, Chef Jack Lee presents the ' + ['Banh mi in ginger sauce'],
            name: 'SAIGON CENTRAL POST OFFICE'
            , star: 4
        },
        {
            id: 6,
            pic: require('../../static/images/Silder7.jpeg'),
            temperature: 30,
            place: 'Q1, Ho Chi Minh City',
            dec: 'In response to the Banh mi Saigon week, Chef Jack Lee presents the ' + ['Banh mi in ginger sauce'],
            name: 'SAIGON CENTRAL POST OFFICE'
            , star: 2
        },
        {
            id: 7,
            pic: require('../../static/images/Silder8.jpeg'),
            place: 'Q1, Ho Chi Minh City',
            dec: 'In response to the Banh mi Saigon week, Chef Jack Lee presents the ' + ['Banh mi in ginger sauce'],
            name: 'SAIGON CENTRAL POST OFFICE'
            , star: 1
        },
    ]
    return (
        <ScrollView style={styles.full}>
            <View style={styles.header}>
                <Text style={styles.header_text}>My Trip</Text>
                <Image source={require('../../static/images/avt.jpeg')} style={styles.avatar} imageStyle={{ borderRadius: 50 }} />
            </View>
            <Text style={styles.text_title}>Going Trip</Text>
            <Going_trip />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text_button}>+  CREAT NEW TRIP</Text>
            </TouchableOpacity>
            <Text style={styles.text_title}>Favourites</Text>
            <FlatList
                numColumns={1}
                data={DATA}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
            />
        </ScrollView>
    );
}







