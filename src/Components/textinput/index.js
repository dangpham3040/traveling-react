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
    StyleSheet,
    Image,
    SafeAreaView,
    TouchableOpacity,
    TextInput

} from 'react-native';
import EmailIcon from '../../Icons/email'
import Lock from '../../Icons/lock'
import User from '../../Icons/user'
import { styles } from './styles';
export default function App({ text, type }) {
    var choose = null
    switch (type) {
        case 0:
            choose = <EmailIcon style={styles.icon} />
            break;
        case 1:
            choose = <Lock style={styles.icon} />
            break;
        case 2:
            choose = <User style={styles.icon} />
            break;
        default:
        // code block
    }

    return (
        <View style={styles.Textput}>
            {choose}
            <TextInput
                style={styles.input}
                placeholder={text}
            />
        </View>
    )

}







