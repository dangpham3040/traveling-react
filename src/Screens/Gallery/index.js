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
    ImageBackground,
    ScrollView,
    FlatList,
    TouchableWithoutFeedback

} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles';
export default function App() {
    const TYPE = useSelector(state => state.root.TYPES)
    const [list_type, setlistitem_type] = useState()
    const [position, setPosition] = useState(1)
    const renderItem_type = ({ item }) => (
        <Item_type name={item} index={list_type.indexOf(item) + 1} />
    );
    const Item_type = ({ name, index }) => (
        <TouchableWithoutFeedback onPress={() => setPosition(index)}>
            <Text style={[index === list_type.length ? styles._item_name_type : styles.item_name_type, position === index ? styles.item_choose : null]} >{name}</Text>
        </TouchableWithoutFeedback>
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
        storeData(TYPE, 'list_type')
        getData('list_type', setlistitem_type)
    }, [])
    return (
        <ScrollView style={styles.full}>
            <Text style={styles.titie}>Photo gallery</Text>
            <FlatList
                style={styles.list}
                numColumns={1}
                data={list_type}
                renderItem={renderItem_type}
                horizontal={true}
                scrollEnabled
                showsHorizontalScrollIndicator={false}
                pagingEnabled
            />
            <View style={styles.margin}>
                <View style={styles.row}>
                    <View style={styles.col}>
                        <ImageBackground source={require('../../static/images/eat2.jpeg')} style={styles.activities2} imageStyle={{ borderRadius: 5 }} >
                            <View style={styles.item_text}>
                                <LinearGradient colors={['rgba(0, 0, 0, 0) ,', '#000000']} deg={180}  >
                                    <Text style={styles.type}>Maria - 02-10-2021</Text>
                                    <Text style={styles.name}>City night</Text>
                                </LinearGradient>
                            </View>
                        </ImageBackground>
                        <ImageBackground source={require('../../static/images/eat3.jpeg')} style={styles.activities3} imageStyle={{ borderRadius: 5 }} >
                            <View style={styles.item_text}>
                                <LinearGradient colors={['rgba(0, 0, 0, 0) ,', '#000000']} deg={180}  >
                                    <Text style={styles.type}>Harry -  06-02-2019</Text>
                                    <Text style={styles.name}>travel ho chi minh</Text>
                                </LinearGradient>
                            </View>
                        </ImageBackground>
                        <ImageBackground source={require('../../static/images/eat4.jpeg')} style={styles.activities4} imageStyle={{ borderRadius: 5 }} >
                            <View style={styles.item_text}>
                                <LinearGradient colors={['rgba(0, 0, 0, 0) ,', '#000000']} deg={180}  >
                                    <Text style={styles.type}>SKy - 05-06-2017</Text>
                                    <Text style={styles.name}>Coffee Shop</Text>
                                </LinearGradient>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={styles.col}>
                        <ImageBackground source={require('../../static/images/eat5.jpeg')} style={styles.activities5} imageStyle={{ borderRadius: 5 }} >
                            <View style={styles.item_text}>
                                <LinearGradient colors={['rgba(0, 0, 0, 0) ,', '#000000']} deg={180}  >
                                    <Text style={styles.type}>Jone - 03-10-2020</Text>
                                    <Text style={styles.name}>summer</Text>
                                </LinearGradient>
                            </View>
                        </ImageBackground>
                        <ImageBackground source={require('../../static/images/eat6.jpeg')} style={styles.activities6} imageStyle={{ borderRadius: 5 }} >
                            <View style={styles.item_text}>
                                <LinearGradient colors={['rgba(0, 0, 0, 0) ,', '#000000']} deg={180}  >
                                    <Text style={styles.type}>Bruno - 05-06-2018</Text>
                                    <Text style={styles.name}>funny trip</Text>
                                </LinearGradient>
                            </View>
                        </ImageBackground>
                        <ImageBackground source={require('../../static/images/eat6.jpeg')} style={styles.activities6} imageStyle={{ borderRadius: 5 }} >
                            <View style={styles.item_text}>
                                <LinearGradient colors={['rgba(0, 0, 0, 0) ,', '#000000']} deg={180}  >
                                    <Text style={styles.type}>Bruno - 05-06-2018</Text>
                                    <Text style={styles.name}>funny trip</Text>
                                </LinearGradient>
                            </View>
                        </ImageBackground>

                    </View>
                </View>
            </View>

        </ScrollView>



    );
}







