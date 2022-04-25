/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useLayoutEffect, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image

} from 'react-native';

import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../Utils/Color';
import allReducter from '../../Redux';
import { createStore } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
export default function App({ name, pic, distance, address, _location }) {
    const navigation = useNavigation()
    const store = createStore(allReducter);
    const dispatch = useDispatch();
    const l =  useSelector(state => state.root.location)
  
    return (
        <TouchableOpacity onPress={() => store.dispatch({
            type: 'set_location',
            location: _location
        })&console.log(l.latitude)}>
            <View style={[styles.item, styles.shadow]}>
                <Image source={pic} style={styles.img} />
                <View style={styles.body}>
                    <Text style={styles.mustdo}>MUST DO</Text>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.address}>{address}</Text>
                    <View style={styles.row}>
                        <Text style={styles.distance}>{distance} km</Text>
                        <View style={styles.view_3D}>
                            <Text style={styles.text_3D}>3D View</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>

    )

}