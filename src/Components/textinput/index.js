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
    TextInput
} from 'react-native';
import EmailIcon from '../../Icons/email'
import Lock from '../../Icons/lock'
import User from '../../Icons/user'
import { styles } from './styles';
import { createStore } from 'redux';

import allReducter from '../../Redux';

const store = createStore(allReducter);

export default function App({ text, icon }) {
    var choose = null
    switch (icon) {
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
    const [input, setInput] = useState('')
    const onChangetext = (e) => {
        setInput(e);
    }
    return (
        <View style={styles.Textput}>
            {choose}
            <TextInput
                style={styles.input}
                placeholder={text}
                onChangeText={e => onChangetext(e)}
            />
        </View>
    )

}







