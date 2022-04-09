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
} from 'react-native';

import { styles } from './styles';

export default function App() {

    return (
        <View style={styles.view_load}>
            <Text style={styles.load}>Loading....</Text>
        </View>

    )

}