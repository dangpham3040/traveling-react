/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { Silders } from './Silder'
import {
    Text,
    SafeAreaView,
    FlatList,
    ImageBackground,
    View,
    TextInput,
    Image
} from 'react-native';
import Undot from '../../Icons/_undot'
import Dot from '../../Icons/_dot'
import Cloud from '../../Icons/cloud'
import Location from '../../Icons/location'
import Seach from '../../Icons/seach'
import { styles } from './styles';
const DATA = Silders.DATA
const TYPE = Silders.TYPE
export default function App() {
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

    const Item = ({ pic, position, temperature, place, name_place }) => (
        <ImageBackground source={pic} style={styles.ImageBackground}>
            <View style={styles.item}>
                <Image source={require('../../static/images/avt.jpeg')} style={styles.avatar} />
                <View style={styles.view_cloud}>
                    <Cloud />
                    <Text style={styles.text_temperature}>{temperature + "\u00b0"}C</Text>
                </View>
                <View style={styles.view_location}>
                    <View style={styles.Location}>
                        <Location />
                        <Text style={styles.Location_text}>{place}</Text>
                    </View>
                    <Text style={styles.name_place}>{name_place}</Text>
                </View>
                <View style={styles.view_dot}>
                    {find(position)}
                    {_dot}
                </View>
            </View>
        </ImageBackground>
    );
    const renderItem = ({ item }) => (
        <Item title={item.title} pic={item.pic} position={item.position} temperature={item.temperature} place={item.place} name_place={item.name_place} />
    );
    const Item_type = ({ pic, name }) => (
        <View style={styles.view_type}>
            <Image source={pic} style={styles.item_pic} />
            <Text style={styles.item_name}>{name}</Text>
        </View>
    );
    const renderItem_type = ({ item }) => (
        <Item_type pic={item.pic} name={item.name} />
    );
    return (
        <SafeAreaView style={styles.full}>
            <View    style={{backgroundColor:'red',height:230}}>
            <FlatList
                numColumns={1}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.position}
                horizontal={true}
                scrollEnabled
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                bounces={false}
            />
            </View>
            <View style={[styles.view_seach, styles.shadow]}>
                <View style={styles.Seach}>
                    <Seach />
                </View>
                <TextInput style={{ flex: 1 }} />
            </View>
            <View style={styles.view_type}>
                <FlatList
                    numColumns={1}
                    data={TYPE}
                    renderItem={renderItem_type}
                    horizontal={true}
                    scrollEnabled
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    bounces={false}
                />
            </View>
        </SafeAreaView>
    )

}







