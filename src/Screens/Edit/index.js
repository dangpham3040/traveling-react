/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';

import {
    ScrollView,
    FlatList,
    ImageBackground,
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { styles } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Undot from '../../Icons/_undot'
import Dot from '../../Icons/_dot'
import Goback from '../../Icons/goback'
import Star from '../../Icons/star'
import Calendar from '../../Icons/calendar'
import Clock from '../../Icons/_clock'
import Send from '../../Icons/send'
import Item_review from '../../Components/item_review'
import { Colors } from '../../Utils/Color';
import { useNavigation } from '@react-navigation/native';
export default function App() {
    const navigation = useNavigation();

    const [list, setlistitem] = useState()
    const [list_Comment, setlist_Comment] = useState()
    const [list_new, setlist_new] = useState()
    const DATA = useSelector(state => state.root.DATA)
    const WHATNEW = useSelector(state => state.root.WHATNEW)
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
    const Item = ({ pic, position }) => (
        <ImageBackground source={pic} style={styles.ImageBackground}>
            <View style={styles.view_item}>

                <TouchableOpacity style={styles.Goback} onPress={() => navigation.goBack()}>
                    <Goback stroke={'#fff'} />
                </TouchableOpacity>
                <View style={styles.item}>
                    <View style={styles.view_dot}>
                        {find(position)}
                        {_dot}
                    </View>
                </View>

            </View>
        </ImageBackground>
    );
    const renderItem = ({ item }) => (
        <Item title={item.title} pic={item.pic} position={list.indexOf(item)} temperature={item.temperature} place={item.place} name_place={item.name_place} />
    );
    const renderItem_Comment = ({ item }) => (
        <Item_review pic={item.pic} name={item.name} date={item.date} text={item.text} />
    );
    const Item_new = ({ pic, name }) => (
        <ImageBackground source={pic} style={styles.ImageBackground_new} imageStyle={{ borderRadius: 5 }}>
            <Text style={styles.new_must}>MUST DO</Text>
            <Text style={styles.name_new}>{name}</Text>
        </ImageBackground>
    );
    const renderItem_new = ({ item }) => (
        <Item_new pic={item.pic} name={item.name} />
    );
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
        storeData(WHATNEW, 'list_new')
        getData('list_new', setlist_new)
    }, [])
    const temp = { pic: require('../../static/images/avt.jpeg'), name: 'Mario', date: '03:21  11/09/2021', text: 'Can yoy say me abouts toys and mobile' }
    const listc = []
    for (var i = 0; i < 2; i++) {
        listc.push(temp)
    }

    return (
        <View style={styles.view}>
            <View >
                <FlatList
                    style={styles.list}
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
                <View style={[styles.frames, styles.shadow]}>
                    <View style={styles.view_star}>
                        <Star style={styles.Star} fill={Colors.thirteenth} />
                        <Star style={styles.Star} fill={Colors.thirteenth} />
                        <Star style={styles.Star} fill={Colors.thirteenth} />
                        <Star style={styles.Star} fill={Colors.thirteenth} />
                        <Star style={styles.Star} />
                    </View>
                    <Text style={styles.title}>SAIGON CENTRAL POST OFFICE</Text>
                    <View style={styles.view_datetime}>
                        <View style={styles.view_frames}>
                            <Calendar />
                            <View style={styles.frames_view_text}>
                                <Text style={styles.frames_text}>Opening Day</Text>
                                <Text style={styles.frames_text_}>Sunday Mass is held
                                    at 9:30am</Text>
                            </View>
                        </View>

                        <Clock />
                        <View style={styles.frames_view_text}>
                            <Text style={styles.frames_text}>Opening Time</Text>
                            <Text style={styles.frames_text_}>5:30am-5:00pm</Text>
                        </View>

                    </View>
                </View>
            </View>
            <ScrollView style={styles.full}>

                <View style={styles.view_Description}>
                    <Text style={styles.text_Description}>Description</Text>
                    <Text style={styles.Description}>This twin towered cathedral is one of the most prominent architectural marvels in the city. It was built in 1877 with materials imported from France. </Text>
                </View>
                <TouchableOpacity>
                    <Text style={styles.readmore}>Read more</Text>
                </TouchableOpacity>
                <Image source={require('../../static/images/map_edit.png')} style={styles.map_image} />
                <View style={styles.view_address}>
                    <Text style={styles.text1}>Address </Text>
                    <Text style={styles.text2}>Cong Xa Paris, Ben Nghe, HCM</Text>
                    <View style={styles.line} />
                </View>

                <View style={styles.view_address}>
                    <Text style={styles.text1}>Website </Text>
                    <Text style={styles.text2}>http://SAIGONCENTRALPOSTOFFICE.com</Text>
                    <View style={styles.line} />
                </View>
                <View style={styles.view_Comment}>
                    <Text style={styles.title}>Comment</Text>
                </View>
                <FlatList
                    style={styles.list_Comment}
                    numColumns={1}
                    data={listc}
                    renderItem={renderItem_Comment}
                    showsHorizontalScrollIndicator={false}
                />
                <View style={styles.add_Comment}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Comment'}
                    />
                    <View style={styles.send}>
                        <Send />
                    </View>
                </View>

                <View style={styles.view_whatnew}>
                    <Text style={styles.title}>What’s Nearby</Text>
                </View>
                <FlatList
                    numColumns={1}
                    data={list_new}
                    renderItem={renderItem_new}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEnabled
                />
            </ScrollView>
        </View>



    )
}







