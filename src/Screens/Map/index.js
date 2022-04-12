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
    Image,
    TouchableOpacity
} from 'react-native';

import Hearder from '../../Components/header_type'
import Check from '../../Icons/check_language'
import { Colors } from '../../Utils/Color';
import { styles } from './styles';
import { useSelector, useDispatch } from 'react-redux';

export default function App({ navigation }) {
    return (
        <View style={styles.full}>
            <Hearder name={'Map'} ishave/>
           
        </View>
    );
}







