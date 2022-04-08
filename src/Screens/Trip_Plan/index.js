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
    SafeAreaView,
    TouchableOpacity,
    Image,
    ScrollView,
    FlatList,
    TouchableWithoutFeedback,
    TextInput

} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../Components/header_type';
import Seach from '../../Icons/seach'
import Item_trip_plan from '../../Components/item_trip_plan'
import { createStore } from 'redux';
import { styles } from './styles';



export default function App({ navigation }) {
    const [position, setPosition] = useState(0)
    const TYPE = ['1', '2', '3', '4', '5', '6', '7']
    const renderItem_type = ({ item }) => (
        <Item_type name={item} index={TYPE.indexOf(item)} />
    );
    const Item_type = ({ name, index }) => (
        <TouchableWithoutFeedback onPress={() => setPosition(index)}>
            <View style={[styles.view_item, styles.item, position === index ? styles.item_choose : null]}>
                <Text style={styles.text_item} >Day {name}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
    const renderItem = ({ item, }) => (
        <Item_trip_plan pic={item.pic} position={DATA.indexOf(item)} name={item.name} />
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
        <View style={styles.full}>
            <Header name={'Trip Plan'} />
          
            <Text style={styles.name_city}>Ho Chi Minh</Text>
            <Text style={styles.day}>10 Oct - 15 Oct</Text>
            <FlatList
                style={styles.listday}
                numColumns={1}
                data={TYPE}
                renderItem={renderItem_type}
                horizontal={true}
                scrollEnabled
                showsHorizontalScrollIndicator={false}
                pagingEnabled
            />
            <View style={[styles.view_seach, styles.shadow]}>
                <View style={styles.Seach}>
                    <Seach />
                </View>
                <TextInput style={{ flex: 1 }} />
            </View>
            <ScrollView style={styles.data}>
            <FlatList
                numColumns={1}
                data={DATA}
                renderItem={renderItem}
                
            />
            </ScrollView>
            <Image source={require('../../static/images/map.png')} style={styles.map_image} />
        </View>

    )

}







