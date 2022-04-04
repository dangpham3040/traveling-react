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
    Image,
    ScrollView,
    TouchableOpacity

} from 'react-native';
import Header from '../../Components/header'
import { styles } from './styles';
export default function App({navigation}) {
    return (
        <ScrollView style={styles.full}>
            <Header name={'My Profile'} />
            <View style={styles.info}>
                <Image source={require('../../static/images/avt.jpeg')} style={styles.avatar} />
                <Text style={styles.name}>Brooklyn Simmons</Text>
                <Text style={styles.email}>brooklyn.simmons@gmail.com</Text>
            </View>
            <View style={styles.view_button}>
                <TouchableOpacity style={styles.button_edit} onPress={()=>navigation.navigate('Edit_Profile')}>
                    <Text style={styles.text_button}>Edit profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button_setting} onPress={()=>navigation.navigate('Setiing')}>
                    <Text style={styles.text_button}>Setting</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.body}> 
            <Text style={styles.title}>Trip History</Text>
            </View>
        </ScrollView>
    );
}







