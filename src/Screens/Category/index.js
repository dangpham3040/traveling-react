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
    ImageBackground,
    Image

} from 'react-native';
import Header from '../../Components/header_type'
import Heart from '../../Icons/heart_item'
import Star from '../../Icons/star'
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
    var Items = null
    const setItem = (value) => {
        switch (route.params.index) {
            case 5:
                Items = <Text style={styles.item_name_dec}>{DATA[value].dec}</Text>
                break;
            default:
                Items = <Text style={styles.item_name}>{DATA[value].name}</Text>
                break;
        }
    }
    var listItem = null
    const setList = () => {
        switch (route.params.index) {
            case 2:
                listItem =
                    <FlatList
                        numColumns={2}
                        data={DATA}
                        renderItem={renderItem}
                        showsHorizontalScrollIndicator={false} />
                break;
            case 3:
                listItem =
                    <FlatList
                        style={{ marginHorizontal: 30 }}
                        numColumns={2}
                        data={DATA}
                        renderItem={renderItem_stay}
                        showsHorizontalScrollIndicator={false} />

                break;
            default:
                listItem =
                    <FlatList
                        numColumns={1}
                        data={DATA}
                        renderItem={renderItem}
                        showsHorizontalScrollIndicator={false} />
                break;
        }
    }
    const Item = ({ pic, position }) => (
        <ImageBackground style={styles.view_item} source={pic} imageStyle={{ borderRadius: 5 }}>
            <View style={styles.Heart}>
                <Heart stroke={Colors.second} />
            </View>
            {setItem(position)}
            {Items}
        </ImageBackground>

    );
    const renderItem = ({ item }) => (
        <Item pic={item.pic} position={DATA.indexOf(item)} name={item.name} dec={item.dec} />
    );
    var listStar = []
    const find = (u) => {
        for (let i = 0; i < 5; i++) {
            var temp = (
                <View key={i} style={styles.star_item}>
                    {
                        i <= u ? <Star fill={Colors.thirteenth} /> : <Star />
                    }
                </View>
            )
            listStar[i] = temp

        }
    }
    const Item_stay = ({ star }) => (
        <View style={styles.view_item_stay}>
            <Image source={require('../../static/images/stay.jpeg')} style={styles.item_stay_img} />
            <View style={styles.item_footer}>
                <Text style={styles.item_text}>ibis Saigon South Hotel</Text>
                {find(star)}
                <View style={styles.view_star_item}>
                    {listStar}
                </View>

            </View>
        </View>

    );
    const renderItem_stay = ({ item }) => (
        <Item_stay pic={item.pic} position={DATA.indexOf(item)} name={item.name} dec={item.dec} index={DATA.indexOf(item)} star={item.star} />
    );
    return (

        <ScrollView style={styles.full}>
            <Header name={route.params.name} />
            {setList()}
            {listItem}

        </ScrollView>
    );
}







