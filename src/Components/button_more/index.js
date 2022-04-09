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
    Modal,
    TouchableOpacity,
    TextInput
} from 'react-native';
import { styles } from './styles';
import { Colors } from '../../Utils/Color';
import About from '../../Icons/about_us'
import Tour from '../../Icons/tour'
import Review from '../../Icons/review'
import Visa from '../../Icons/visa'
import Safety from '../../Icons/safety'
import Emergency from '../../Icons/emergency'
import Embassy from '../../Icons/embassy'
import Money_changers from '../../Icons/money_changers'
import Language from '../../Icons/language'
import Logout from '../../Icons/logout'
export default function App({ name, type }) {
    var icon = null
    switch (type) {
        case 0:
            icon = <About />
            break;
        case 1:
            icon = <Tour />
            break;
        case 2:
            icon = <Review />
            break;
        case 3:
            icon = <Visa />
            break;
        case 4:
            icon = <Safety />
            break;
        case 5:
            icon = <Emergency />
            break;
        case 6:
            icon = <Embassy />
            break;
        case 7:
            icon = <Money_changers />
            break;
        case 8:
            icon = <Language />
            break;
        case 9:
            icon = <Logout />
            break;
    }
    return (

        <View style={styles.full}>
            <TouchableOpacity >
                <View style={styles.view}>
                    {icon}
                </View>
            </TouchableOpacity>
            <Text style={styles.text}>{name}</Text>
        </View>
    )

}