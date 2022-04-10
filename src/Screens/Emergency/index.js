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
} from 'react-native';
import Hearder from '../../Components/hearder_info'
import { Colors } from '../../Utils/Color';
import { styles } from './styles';

export default function App({ navigation }) {
    const title1 = 'INTERNATIONAL SOS (24/24h)'
    const title2 = 'COLOMBIA ASIA SAIGON (24/24h)'
    const context = 'Add: 167A Nam Ky Khoi Nghia, Dist 3\n' +
        'Tel: +84 8 38298424\n' +
        'Map view: http://map.google.com\n' +
        'Regional health care gruop offering full madical treatments including 24-hour emergency service dental care and medevac.';
    return (
        <View style={styles.full}>
            <Hearder name={'Emergency'} />
            <View style={styles.view}>
                <Text style={[styles.text, styles.title]}>{title1}</Text>
                <Text style={styles.text}>{context}</Text>
            </View>
            <View style={styles.view}>
                <Text style={[styles.text, styles.title]}>{title2}</Text>
                <Text style={styles.text}>{context}</Text>
            </View>
        </View>
    );
}







