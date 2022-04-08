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
    Image
} from 'react-native';
import Add from '../../Icons/add'
import Check from '../../Icons/checkmark'
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../Utils/Color';
export default function App({ pic, name }) {
    const [choose, setchoose] = useState(false)
    const change = () => {
        choose ?
            setchoose(false) : setchoose(true)
        
    }
    return (
        <View style={styles.view_item}>
            <Image source={pic} style={styles.img} />
            <View style={styles.item_text}>
                <Text style={styles.mustdo}>MUST DO</Text>
                <Text style={styles.item_name}>{name}</Text>
            </View>
            {choose === true ? <TouchableOpacity onPress={() => change()}><Check style={styles.Icon} /></TouchableOpacity> :
                <TouchableOpacity onPress={() => change()}><Add style={styles.Icon} /></TouchableOpacity>}
        </View>

    )

}