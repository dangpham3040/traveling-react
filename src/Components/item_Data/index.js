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
    TouchableOpacity,
    ImageBackground

} from 'react-native';
import Heart from '../../Icons/heart_item'
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../Utils/Color';
export default function App({ name, type, dec, pic }) {

    return (
        <ImageBackground style={styles.view_item} source={pic} imageStyle={{ borderRadius: 5 }}>
            <View style={styles.Heart}>
                <Heart stroke={Colors.second} />
            </View>
            {type === 0 ?
                <View style={styles.view_item_text}>
                    <Text style={styles.text_item}>{dec}</Text>
                    <Text style={styles.item_name_dec}>{name}</Text>
                </View> :
                <View style={styles.view_item_text}>
                    <Text style={styles.text_item}>{dec}</Text>
                    <Text style={styles.item_name_dec}>{name}</Text>
                </View>
            }
        </ImageBackground>

    )

}