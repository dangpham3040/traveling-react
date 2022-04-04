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
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
export default function App({ name, ishave ,isdim}) {
    const navigation = useNavigation();
    return (
        <View style={[styles.view_header,isdim?styles.dim:null]}>
            <View style={styles.Goback}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Goback />
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>{name}</Text>
            <View style={styles.Cancel}>
                {ishave ? <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Cancel />
                </TouchableOpacity> : null}

            </View>
        </View>

    )

}