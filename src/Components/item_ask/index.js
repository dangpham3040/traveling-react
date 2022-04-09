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
import Star from '../../Icons/star_ask'
import Comment from '../../Icons/comment'
import Heart from '../../Icons/heart_ask'
import { styles } from './styles';
import { Colors } from '../../Utils/Color';
export default function App({ pic, name, date, text }) {

    return (
        <View style={styles.view}>
            <View style={styles.body}>
                <View style={styles.row}>
                    <Image source={pic} style={styles.img} />
                    <View style={styles.name} >
                        <Text style={styles.text_name}>{name}</Text>
                        <Text style={styles.date}>{date}</Text>
                    </View>
                    <View style={styles.Star}>
                        <Star />
                    </View>
                </View>
                <Text style={styles.text}>{text}</Text>
                <View style={styles.row}>
                    <Heart style={styles.icon} />
                    <Text style={styles.num}>0</Text>
                    <Comment style={styles.icon} />
                    <Text style={styles.num}>20</Text>
                </View>
            </View>

        </View>
    )

}