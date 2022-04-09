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
import { Colors } from '../../Utils/Color';
export default function App() {

    return (
        <View style={styles.view}>
            <Text style={styles.text}>
                +  Ask
            </Text>
        </View>
    )

}