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
    ScrollView,
    FlatList

} from 'react-native';
import Header from '../../Components/header_type'
import Button_Ask from '../../Components/button_ask'
import Item_ask from '../../Components/item_ask'
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
export default function App() {
    const navigation = useNavigation();
    const [choose, setchoose] = useState(false)
    const handle_choose = () => {
        choose ? setchoose(false) : setchoose(true)
    }
    const tempq = { pic: require('../../static/images/avt.jpeg'), name: 'Mario', date: '03:21  11/09/2021', text: 'Can yoy say me abouts toys and mobile' }
    const listq = []
    const tempt = { pic: require('../../static/images/logo_hcm.png'), name: 'Tourism HoChiMinhCity', date: '03:21  11/09/2021', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique, dolor vel fringilla pulvinar, tellus quam varius est, placerat pellentesque est ex et nunc. ' }
    const listt = []
    for (var i = 0; i < 10; i++) {
        listq.push(tempq)
        listt.push(tempt)
    }
    const renderItem = ({ item }) => (
        <Item_ask pic={item.pic} name={item.name} date={item.date} text={item.text} />
    );
    return (
        <SafeAreaView style={styles.full}>
            <Header name={'Ho Chi Minh'} />

            <View style={styles.title_view}>
                <TouchableOpacity style={choose === false ? styles.isclick : styles.isnotclick} onPress={handle_choose}>
                    <Text style={choose === false ? styles._title : styles.title} >Questions</Text>
                </TouchableOpacity>
                <TouchableOpacity style={choose === true ? styles.isclick : styles.isnotclick} onPress={handle_choose}>
                    <Text style={choose === true ? styles._title : styles.title}>Tips</Text>
                </TouchableOpacity>
            </View>

            {choose ?
                <ScrollView style={styles.body}>
                       <FlatList
                        numColumns={1}
                        data={listt}
                        renderItem={renderItem}
                        showsHorizontalScrollIndicator={false}
                    />
                </ScrollView>
                :
                <ScrollView style={styles.body}>
                    <FlatList
                        numColumns={1}
                        data={listq}
                        renderItem={renderItem}
                        showsHorizontalScrollIndicator={false}
                    />
                </ScrollView>
            }
            <Button_Ask />

        </SafeAreaView>

    )

}







