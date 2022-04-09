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
    TouchableOpacity
} from 'react-native';
import Goback from '../../Icons/goback'
import Cancel from '../../Icons/cancel'
import Seach from '../../Icons/seach'
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../Utils/Color';
export default function App({ name, ishave, isdim }) {
    const navigation = useNavigation();
    return (
        <View style={[styles.view_header, isdim ? styles.dim : null]}>
            <View style={styles.Goback}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Goback stroke={Colors.second} />
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>{name}</Text>
            <View style={styles.Cancel}>
                {ishave ? <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Seach stroke={Colors.second} />
                </TouchableOpacity> : null}

            </View>
        </View>

    )

}