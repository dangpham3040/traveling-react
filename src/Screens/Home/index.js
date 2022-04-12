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
    Image,
    ScrollView,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';
import Undot from '../../Icons/_undot'
import Dot from '../../Icons/_dot'
import Cloud from '../../Icons/cloud'
import Location from '../../Icons/location'
import Seach from '../../Icons/seach'
import { styles } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../../Components/loading'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App({ navigation }) {
    const DATA = useSelector(state => state.myCounter.DATA)
    const TYPE = useSelector(state => state.myCounter.TYPE)
    const HOTNEW = useSelector(state => state.myCounter.HOTNEW)
    const TOPPLACE = useSelector(state => state.myCounter.TOPPLACE)
    const TOPPOP = useSelector(state => state.myCounter.TOPPOP)
    const [list, setlistitem] = useState()
    const [list_type, setlistitem_type] = useState()
    const [list_hotnew, setlistitem_hotnew] = useState()
    const [list_topplace, setlistitem_topplace] = useState()
    const [list_toppop, setlistitem_toppop] = useState()
    const isReady = list !== undefined && list_type !== undefined && list_hotnew !== undefined && list_topplace !== undefined && list_toppop !== undefined
    const storeData = async (value, name) => {
        try {
            await AsyncStorage.setItem(name, JSON.stringify(value))
        } catch (e) {
            console.log(e);
        }
    }
    const getData = async (name, set) => {
        try {
            const value = await AsyncStorage.getItem(name)
            return value != null ? set(JSON.parse(value)) : []
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        storeData(DATA, 'list')
        getData('list', setlistitem)
        storeData(TYPE, 'listtype')
        getData('listtype', setlistitem_type)
        storeData(HOTNEW, 'list_hotnew')
        getData('list_hotnew', setlistitem_hotnew)
        storeData(TOPPLACE, 'list_topplace')
        getData('list_topplace', setlistitem_topplace)
        storeData(TOPPOP, 'list_toppop')
        getData('list_toppop', setlistitem_toppop)

    }, [])
    var _dot = [];
    const find = (u) => {
        for (let i = 0; i < list.length; i++) {
            var temp = (
                <View key={i}>
                    {list.indexOf(list[i]) === u ? <Dot style={styles.dot} /> : <Undot style={styles.dot} />}
                </View>
            )
            _dot[i] = temp

        }
    }
    const Item = ({ pic, position, temperature, place, name_place }) => (
        <ImageBackground source={pic} style={styles.ImageBackground}>
            <View style={styles.item}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Image source={require('../../static/images/avt.jpeg')} style={styles.avatar} />
                </TouchableOpacity>
                <View style={styles.view_cloud}>
                    <Cloud onPress={() => navigation.navigate('HotNew')} />
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
        <Item title={item.title} pic={item.pic} position={list.indexOf(item)} temperature={item.temperature} place={item.place} name_place={item.name_place} />
    );
    const Item_type = ({ pic, name, index }) => (
        <TouchableOpacity style={styles.view_type_item} onPress={() => navigation.navigate('Category', { name: name, index: index })}>
            <Image source={pic} style={styles.item_pic} />
            <Text style={styles.item_name}>{name}</Text>
        </TouchableOpacity>
    );
    const renderItem_type = ({ item }) => (
        <Item_type pic={item.pic} name={item.name} index={list_type.indexOf(item)} />
    );
    const Item_Hotniew = ({ pic, position }) => (
        <Image source={pic} style={position === HOTNEW.length ? styles.Image_hotnew_last : styles.Image_hotnew} />
    );
    const renderItem_Hotniew = ({ item }) => (
        <Item_Hotniew pic={item.pic} position={list_hotnew.indexOf(item) + 1} />
    );
    const Item_TopPlaces = ({ pic }) => (
        <Image source={pic} style={styles.Image_top} />
    );
    const renderItem_TopPlaces = ({ item }) => (
        <Item_TopPlaces pic={item.pic} />
    );
    return (
        <View style={{ flex: 1 }}>
            {isReady ?
                <ScrollView style={styles.full}>
                    <View style={{ height: 230 }}>
                        <FlatList
                            numColumns={1}
                            data={list}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            horizontal={true}
                            scrollEnabled
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled
                            bounces={false}

                        />
                    </View>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('Seach')}>
                        <View style={[styles.view_seach, styles.shadow]} >
                            <View style={styles.Seach}>
                                <Seach />
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={styles.view_type}>
                        <FlatList
                            numColumns={1}
                            data={list_type}
                            renderItem={renderItem_type}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            scrollEnabled
                            keyExtractor={item => item.id}
                        />
                    </View>
                    <View style={styles.view_hotnew}>
                        <View style={styles.Category}>
                            <Text style={styles.titleCategory}>Hot New</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Category', { name: 'Hot New', index: 5 })}>
                                <Text style={styles.view_all}>View All</Text>
                            </TouchableOpacity>

                        </View>
                    </View>

                    <FlatList
                        numColumns={1}
                        data={list_hotnew}
                        renderItem={renderItem_Hotniew}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        scrollEnabled
                    />

                    <View style={styles.view_hotnew}>
                        <View style={styles.Category}>
                            <Text style={styles.titleCategory}>Top Places</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Category', { name: 'Top Places', index: 6 })}>
                                <Text style={styles.view_all}>View All</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <FlatList
                        numColumns={1}
                        data={list_topplace}
                        renderItem={renderItem_TopPlaces}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        scrollEnabled
                    />
                    <View style={styles.view_hotnew}>
                        <View style={styles.Category}>
                            <Text style={styles.titleCategory}>Top popular</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Category', { name: 'Top popular', index: 7 })}>
                                <Text style={styles.view_all} >View All</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.view_TopPop}>
                        <Image source={TOPPOP[0].pic} style={styles.Image_1} />
                        <View style={{ flexDirection: 'column' }}>
                            <Image source={TOPPOP[1].pic} style={styles.Image_2} />
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={TOPPOP[2].pic} style={styles.Image_3} />
                                <Image source={TOPPOP[3].pic} style={styles.Image_3} />
                            </View>
                        </View>
                    </View>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('Map')} >
                        <Image source={require('../../static/images/map.png')} style={styles.map_image} />
                    </TouchableWithoutFeedback>
                </ScrollView> :
                <Loading />
            }

        </View>
    )

}