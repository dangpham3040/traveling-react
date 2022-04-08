/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
export default function App() {
    const navigation = useNavigation();
    return (
        <View style={[styles.view, styles.shadow]}>
            <View style={styles.view_image}>
            <Image source={require('../../static/images/trip1.jpeg')} style={styles.trip1} />
            <View style={styles.trip23}>
                <Image source={require('../../static/images/trip2.jpeg')} style={styles.trip2} />
                <Image source={require('../../static/images/trip3.jpeg')} style={styles.trip2} />
            </View>
            </View>
          
            <Text style={styles.day}>10 Oct - 15 Oct</Text>
            <Text style={styles.name}>Ho Chi Minh</Text>
        </View>

    )

}