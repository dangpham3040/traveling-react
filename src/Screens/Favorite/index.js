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
    ImageBackground,
    TouchableOpacity,
    Image,
    FlatList,
    ScrollView,
    Modal,
    TextInput

} from 'react-native';
import Item_going_trip from '../../Components/item_going_trip'
import Going_trip from '../../Components/going_trip'
import Cancel from '../../Icons/cancel'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles';
import { useSelector, useDispatch } from 'react-redux';


export default function App({ navigation }) {
    const DATA = useSelector(state => state.myCounter.DATA)
    const [list, setlistitem] = useState()
    const [modalVisible, setModalVisible] = useState(false);
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
    }, [])
    const renderItem = ({ item, }) => (
        <Item_going_trip pic={item.pic} position={DATA.indexOf(item)} name={item.name} />
    );
    return (
        <ScrollView style={styles.full}>
            <View style={styles.header}>
                <Text style={styles.header_text}>My Trip</Text>
                <Image source={require('../../static/images/avt.jpeg')} style={styles.avatar} imageStyle={{ borderRadius: 50 }} />
            </View>
            <Text style={styles.text_title}>Going Trip</Text>
            <Going_trip />
            <TouchableOpacity style={styles.button} onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.text_button}>+  CREAT NEW TRIP</Text>
            </TouchableOpacity>
            <Text style={styles.text_title}>Favourites</Text>
            <FlatList
                numColumns={1}
                data={list}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
            />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}  >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity style={styles.Cancel_model} onPress={() => setModalVisible(!modalVisible)}>
                            <Cancel />
                        </TouchableOpacity>
                        <TextInput style={styles.input} placeholder={'Trip Name'} />
                        <TextInput style={styles.input} placeholder={'Select date (up to 7 days)'} />
                        <View style={styles.view_button}>
                            <TouchableOpacity
                                style={[styles.button_model, styles.buttonColor1]}
                                onPress={() => setModalVisible(!modalVisible)}  >
                                <Text style={styles.textStyle}>cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button_model, styles.buttonColor2]}
                                onPress={() => navigation.navigate('Trip_Plan')}  >
                                <Text style={styles.textStyle}>creat new trip</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
}







