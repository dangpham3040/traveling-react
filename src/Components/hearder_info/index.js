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
export default function App({ name, dec }) {
    const navigation = useNavigation();
    return (
        <View style={styles.view_header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <View style={styles.Cancel}>
                    <Cancel />
                </View>
            </TouchableOpacity>

            <Text style={styles.name}>{name}</Text>
            {dec ? <Text style={styles.dec}>{dec}</Text> : null}
            <View style={styles.line} />
        </View>

    )

}