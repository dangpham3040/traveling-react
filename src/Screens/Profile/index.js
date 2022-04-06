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
    ImageBackground,
    Image,
    ScrollView,
    TouchableOpacity,


} from 'react-native';
import Header from '../../Components/header'
import { styles } from './styles';
export default function App({ navigation }) {
    const DATA = [
        {
            id: 0,
            pic: require('../../static/images/Silder1.jpeg'),
            position: 0,
            temperature: 30,
            place: 'Q1, Ho Chi Minh City',
            name_place: 'SAIGON CENTRAL POST OFFICE'
        },
        {
            id: 1,
            pic: require('../../static/images/Silder2.jpeg'),
            position: 1,
            temperature: 30,
            place: 'Q1, Ho Chi Minh City',
            name_place: 'SAIGON CENTRAL POST OFFICE'
        },
        {
            id: 2,
            pic: require('../../static/images/Silder3.png'),
            position: 2,
            temperature: 30,
            place: 'Q1, Ho Chi Minh City',
            name_place: 'SAIGON CENTRAL POST OFFICE'
        },
        {
            id: 3,
            pic: require('../../static/images/Silder4.jpeg'),
            position: 3,
            temperature: 30,
            place: 'Q1, Ho Chi Minh City',
            name_place: 'SAIGON CENTRAL POST OFFICE'
        },
        {
            id: 4,
            pic: require('../../static/images/Silder5.jpeg'),
            position: 4,
            temperature: 30,
            place: 'Q1, Ho Chi Minh City',
            name_place: 'SAIGON CENTRAL POST OFFICE'
        },
        {
            id: 5,
            pic: require('../../static/images/Silder6.jpeg'),
            position: 5,
            temperature: 30,
            place: 'Q1, Ho Chi Minh City',
            name_place: 'SAIGON CENTRAL POST OFFICE'
        },
        {
            id: 6,
            pic: require('../../static/images/Silder7.jpeg'),
            position: 6,
            temperature: 30,
            place: 'Q1, Ho Chi Minh City',
            name_place: 'SAIGON CENTRAL POST OFFICE'
        },
        {
            id: 7,
            pic: require('../../static/images/Silder8.jpeg'),
            position: 7,
            temperature: 30,
            place: 'Q1, Ho Chi Minh City',
            name_place: 'SAIGON CENTRAL POST OFFICE'
        },
    ]
    const Item = ({ pic, name }) => (
        <View style={styles.view_item}>
            <Image style={styles.item} source={pic} />
            <View style={styles.view_item_text}>
                <Text style={styles.text_mustdo}>MUST DO</Text>
                <Text style={styles.item_name}>{name}</Text>
            </View>
        </View>

    );
    const renderItem = ({ item }) => (
        <Item pic={item.pic} position={item.position} name={item.name_place} />
    );
    return (
        <ScrollView style={styles.full}>
            <Header name={'My Profile'} />
            <View style={styles.info}>
                <Image source={require('../../static/images/avt.jpeg')} style={styles.avatar} />
                <Text style={styles.name}>Brooklyn Simmons</Text>
                <Text style={styles.email}>brooklyn.simmons@gmail.com</Text>
            </View>
            <View style={styles.view_button}>
                <TouchableOpacity style={styles.button_edit} onPress={() => navigation.navigate('Edit_Profile')}>
                    <Text style={styles.text_button}>Edit profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button_setting} onPress={() => navigation.navigate('Setiing')}>
                    <Text style={styles.text_button}>Setting</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <Text style={styles.title}>Trip History</Text>
            </View>
            <View>
                <FlatList
                    numColumns={1}
                    data={DATA}
                    renderItem={renderItem}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </ScrollView>
    );
}







