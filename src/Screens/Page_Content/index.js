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
    const DATA = useSelector(state => state.myCounter.DATA)
    const WHATNEW = useSelector(state => state.myCounter.WHATNEW)
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
        <ImageBackground source={pic} style={styles.Image_header}>
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
        <ScrollView style={styles.full}>
            <View style={styles.view_header}>
                <Image source={require('../../static/images/content1.jpeg')} style={styles.Image_header} />
                <View style={[styles.frames, styles.shadow]}>
                    <Text style={styles.header_food_and_drink}>FOOD & DRINK</Text>
                    <Text style={styles.title}>Discover 8 finest steakhouses in Saigon</Text>
                    <Text style={styles.header_time}>15/10/2021</Text>
                    <Text style={styles.header_context}>Beefsteak has always been the best-loved dish by the experience of cooking, displaying, or enjoying it. Here in HCM city, there are a number of steakhouses opened where meat-lovers can get a gorgeous cut of steak and join in a BBQ banquet. We’ve discovered those restaurants regarding review websites and local recommendations, and come up with a list of top steakhouses worth making a visit. Such a guilty pleasure galore!</Text>
                </View>
            </View>
            <View style={styles.body}>
                <Text style={styles.body_title}>El Gaucho</Text>
                <Image source={require('../../static/images/content2.jpeg')} style={styles.Image_body} />
                <Text style={styles.body_dec}>It's undoubtedly that El Gaucho deserves to be the top choice among other steakhouses, commonly recommended as a must-try venue for steak. Taking a look at recommendations, the steak here frequently gets outstanding reviews on the websites. The chef is definitely proud of the way they serve perfect steak, beginning from choosing the best ingredients only from the US and Australia and ending up with performing complex recipes to keep the softness and juiciness of the steak. The ambiance is pretty classy and elegant makes El Gaucho a suitable place for a romantic date, or even for family dinner and friends’ reunions.</Text>

          
                <Image source={require('../../static/images/content3.jpeg')} style={styles.Image_body} />
                <Text style={styles.body_dec}>IL CORDA Charcoal Steakhouse,{'\n'}
                    11 Le Thanh Ton Street, Ward Ben Nghe, District 1
                    Opening hours: 11:30am – 3:00pm | 5:00pm – 11:00pm</Text>
                    <View style={styles.line}/>
                    <Text style={styles.body_title}>IL CORDA Charcoal Steakhouse</Text>
                <Image source={require('../../static/images/content4.jpeg')} style={styles.Image_body} />
                <Text style={styles.body_dec}>It's undoubtedly that El Gaucho deserves to be the top choice among other steakhouses, commonly recommended as a must-try venue for steak. Taking a look at recommendations, the steak here frequently gets outstanding reviews on the websites. The chef is definitely proud of the way they serve perfect steak, beginning from choosing the best ingredients only from the US and Australia and ending up with performing complex recipes to keep the softness and juiciness of the steak. The ambiance is pretty classy and elegant makes El Gaucho a suitable place for a romantic date, or even for family dinner and friends’ reunions.</Text>

          
                <Image source={require('../../static/images/content5.jpeg')} style={styles.Image_body} />
                <Text style={styles.body_dec}>IL CORDA Charcoal Steakhouse,{'\n'}
                    11 Le Thanh Ton Street, Ward Ben Nghe, District 1
                    Opening hours: 11:30am – 3:00pm | 5:00pm – 11:00pm</Text>
            </View>
        </ScrollView>



    )
}







