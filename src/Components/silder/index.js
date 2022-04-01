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


} from 'react-native';
import Logo from '../../Icons/logo'
import Undot from '../../Icons/undot'
import Dot from '../../Icons/dot'
import Goto from '../../Icons/goto'
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        pic: require('../../static/images/Welcome1.png'),
        position: 0

    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        pic: require('../../static/images/Welcome2.png'),
        position: 1
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        pic: require('../../static/images/Welcome3.png'),
        position: 2
    },
];
export default function App() {
    const navigation = useNavigation();
    var _dot = [];

    const find = (u) => {
        for (let i = 0; i < DATA.length; i++) {
            var temp = (
                <View key={i}>
                    {
                        DATA[i].position === u ? <Dot style={styles.dot} /> : <Undot style={styles.dot} />
                    }
                </View>
            )
            _dot[i] = temp

        }
    }



    const Item = ({ pic, position }) => (
        <ImageBackground source={pic} style={styles.ImageBackground}>
            <View style={styles.item}>
                <View style={styles.logo}>
                    <Logo />
                </View>
                <Text style={styles.title}>Welcome to
                    {'\n'} Ho Chi Minh City</Text>
                <View style={styles.view_dot}>
                    {find(position)}
                    {_dot}
                </View>
                {position === 2 ? <Goto style={styles.goto} onPress={() => navigation.navigate('Sign_in_up')} /> : null}

            </View>

        </ImageBackground>
    );
    const renderItem = ({ item }) => (
        <Item title={item.title} pic={item.pic} position={item.position} />
    );

    return (
        <FlatList
            numColumns={1}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.position}
            horizontal={true}
            scrollEnabled={true}
            showsHorizontalScrollIndicator={true}
            pagingEnabled
            bounces={false}

        />
    );
}







