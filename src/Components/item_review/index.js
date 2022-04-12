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
    Image
} from 'react-native';
import Star from '../../Icons/star'
import Comment from '../../Icons/comment'
import Heart from '../../Icons/heart_ask'
import { styles } from './styles';
import { Colors } from '../../Utils/Color';
export default function App({ pic, name, date, text }) {

    return (
        <View style={[styles.view,styles.shadow]}>
            <View style={styles.body}>
                <View style={styles.row}>
                    <Image source={pic} style={styles.img} />
                    <View style={styles.name} >
                        <Text style={styles.text_name}>{name}</Text>
                        <Text style={styles.date}>{date}</Text>
                    </View>
                    <View style={styles.Star}>
                        <View style={styles.view_star}>
                            <Star style={styles._Star} fill={Colors.thirteenth} />
                            <Star style={styles._Star} fill={Colors.thirteenth} />
                            <Star style={styles._Star} fill={Colors.thirteenth} />
                            <Star style={styles._Star} fill={Colors.thirteenth} />
                            <Star style={styles._Star} />
                        </View>
                    </View>
                </View>
                <Text style={styles.text}>{text}</Text>
            
            </View>

        </View>
    )

}