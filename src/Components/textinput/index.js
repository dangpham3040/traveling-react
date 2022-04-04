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
import { useSelector, useDispatch } from 'react-redux';
import allReducter from '../../Redux';


export default function App({ text, icon, type, value }) {
    var choose = null
    const store = createStore(allReducter);
    const dispatch = useDispatch();
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
        switch (type) {
            case 0:
                store.dispatch({
                    type: 'set_Username',
                    Username: e
                })
                break;
            case 1:
                store.dispatch({
                    type: 'set_Email',
                    Email: e
                })
                break;
            case 2:
                store.dispatch({
                    type: 'set_Password',
                    Password: e
                })
                break;
            case 3:
                store.dispatch({
                    type: 'set_Confirm_Password',
                    Confirm_Password: e
                })
                break;
        }
    }
    return (
        <View style={styles.Textput}>
            {choose}
            <TextInput
                style={styles.input}
                placeholder={text}
                onChangeText={e => onChangetext(e)}
                value={value}

            />
        </View>
    )

}







