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
    TouchableOpacity,
    Modal
} from 'react-native';
import Logo from '../../Icons/logo_company'
import Button_more from '../../Components/button_more'
import { Colors } from '../../Utils/Color';
import { styles } from './styles';

export default function App({ navigation }) {
    const name = 'Bruno'
    const data = ['About Us', 'Free Walking Tour', 'Review App', 'VISA', 'Safety', 'Emergency', 'Embassy', 'money changers', 'language', 'Logout']

    const renderItem = ({ item }) => (
        <Button_more name={item} type={data.indexOf(item)} />
    );
    return (
        <View style={styles.full}>
            <View style={styles.header}>
                <Text style={styles.hello}>Hi {name}</Text>
                <Text style={styles.wellcome}>Welcome to
                    Ho Chi Minh City</Text>
                <View style={styles.footer_banner}>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <Image source={require('../../static/images/avt.jpeg')} style={styles.img} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button_mytrip} onPress={() => navigation.navigate('My Trip')}>
                        <Text style={styles.text_mytrip}>My Trip</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <FlatList
                numColumns={3}
                data={data}
                renderItem={renderItem}
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                style={styles.list}
            />
            <View style={styles.logo}>
                <Logo />
            </View>
          
        </View>
    );
}







