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
    ImageBackground

} from 'react-native';
import Header from '../../Components/header_type'
import Heart from '../../Icons/heart_item'
import { Colors } from '../../Utils/Color';
import { styles } from './styles';
export default function App({ route }) {
    const DATA = [
        {
            id: 0,
            pic: require('../../static/images/Silder1.jpeg'),
            temperature: 30,
            place: 'Q1, Ho Chi Minh City',
            dec: 'In response to the Banh mi Saigon week, Chef Jack Lee presents the ' + ['Banh mi in ginger sauce'],
            name: 'SAIGON CENTRAL POST OFFICE'
        },
        {
            id: 1,
            pic: require('../../static/images/Silder2.jpeg'),
            temperature: 30,
            place: 'Q1, Ho Chi Minh City',
            dec: 'In response to the Banh mi Saigon week, Chef Jack Lee presents the ' + ['Banh mi in ginger sauce'],
            name: 'SAIGON CENTRAL POST OFFICE'
        },
        {
            id: 2,
            pic: require('../../static/images/Silder3.png'),
            place: 'Q1, Ho Chi Minh City',
            dec: 'In response to the Banh mi Saigon week, Chef Jack Lee presents the ' + ['Banh mi in ginger sauce'],
            name: 'SAIGON CENTRAL POST OFFICE'
        },
        {
            id: 3,
            pic: require('../../static/images/Silder4.jpeg'),
            temperature: 30,
            place: 'Q1, Ho Chi Minh City',
            dec: 'In response to the Banh mi Saigon week, Chef Jack Lee presents the ' + ['Banh mi in ginger sauce'],
            name: 'SAIGON CENTRAL POST OFFICE'
        },
        {
            id: 4,
            pic: require('../../static/images/Silder5.jpeg'),
            temperature: 30,
            place: 'Q1, Ho Chi Minh City',
            dec: 'In response to the Banh mi Saigon week, Chef Jack Lee presents the ' + ['Banh mi in ginger sauce'],
            name: 'SAIGON CENTRAL POST OFFICE'
        },
        {
            id: 5,
            pic: require('../../static/images/Silder6.jpeg'),
            temperature: 30,
            place: 'Q1, Ho Chi Minh City',
            dec: 'In response to the Banh mi Saigon week, Chef Jack Lee presents the ' + ['Banh mi in ginger sauce'],
            name: 'SAIGON CENTRAL POST OFFICE'
        },
        {
            id: 6,
            pic: require('../../static/images/Silder7.jpeg'),
            temperature: 30,
            place: 'Q1, Ho Chi Minh City',
            dec: 'In response to the Banh mi Saigon week, Chef Jack Lee presents the ' + ['Banh mi in ginger sauce'],
            name: 'SAIGON CENTRAL POST OFFICE'
        },
        {
            id: 7,
            pic: require('../../static/images/Silder8.jpeg'),
            place: 'Q1, Ho Chi Minh City',
            dec: 'In response to the Banh mi Saigon week, Chef Jack Lee presents the ' + ['Banh mi in ginger sauce'],
            name: 'SAIGON CENTRAL POST OFFICE'
        },
    ]
    const Item = ({ pic, name, dec }) => (
        <ImageBackground style={styles.view_item} source={pic} imageStyle={{ borderRadius: 5 }}>
            <View style={styles.Heart}>
                <Heart stroke={Colors.second} />
            </View>
            {
                route.params.name === 'Hot New' ?
                    <Text style={styles.item_name_dec}>{dec}</Text> :
                    <Text style={styles.item_name}>{name}</Text>
            }
        </ImageBackground>

    );
    const renderItem = ({ item }) => (
        <Item pic={item.pic} position={item.position} name={item.name} dec={item.dec} />
    );
    return (

        <ScrollView style={styles.full}>
            <Header name={route.params.name} />
            <FlatList
                numColumns={1}
                data={DATA}
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
            />
        </ScrollView>
    );
}







