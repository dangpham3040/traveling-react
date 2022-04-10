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
    ScrollView

} from 'react-native';
import Hearder from '../../Components/hearder_info'
import { Colors } from '../../Utils/Color';
import { styles } from './styles';
export default function App({ navigation }) {

    const values = ["Avoid travelling if you have a fever and cough. If you have fever, cough, and difficulty breathing, alert health care services and share with them your recent travel history."
        , 'Maintain social distancing. Stay a metre or more away from others, especially those who are sneezing or coughing, or have fever. '
        , 'Wash your hands regularly with soap and running water. You can also use an alcohol-based hand-sanitizer to spray your hands as often as you like.'
        , 'Cover your mouth and nose with tissue when you cough or sneeze. Dispose of dirty tissues immediately and wash your hands after coughing or sneezing. '
        , 'Avoid contact with live animals. Wash your hands with soap and water if you touch live animals or animal products in markets.'
        , 'Eat only well-cooked food. Make sure your meals especially animal proteins and dairy products are thoroughly cooked and prepared in a sanitary environment. '
         ,'Discard single-use masks. If you choose to wear a single-use mask, ensure it covers your nose and mouth, avoid touching the mask, and wash your hands after removing it.']
    const Item = ({ text,index }) => (
        <Text style={styles.text}>{index}. {text}</Text>
    );
    const renderItem = ({ item }) => (
        <Item text={item} index = {values.indexOf(item)+1} />
    );
    return (
        <ScrollView style={styles.full}>
            <Hearder name={'Health and Safety precautions for travellers'} />
            <View style={styles.view}>

                {/* <Text style={styles.text}>{text}</Text> */}
                <Text style={styles.text}>Visitors in Vietnam are encouraged to take sensible precautions against COVID-19 during their trips.</Text>
                <Text style={styles.text}>The World Health Organization outlines these basic practices to keep yourself and your loved ones safe:</Text>
                <FlatList
                    numColumns={1}
                    data={values}
                    renderItem={renderItem}
                    showsHorizontalScrollIndicator={false}
                    scrollEnabled={false}
                />
                <View style={styles.line} />
                <Text style={[styles._text, styles.title]}>Online trackers and official government sites</Text>
                <Text style={styles._text}>Travellers looking for updated statistics on COVID-19 can use the</Text>
                <Text style={[styles._text, styles.link]}>
                    Coronavirus app.
                </Text>
                <Text style={styles._text}>Updates from the Vietnamese government: </Text>
                <Text style={[styles._text, styles.link]}>
                    https://ncov.moh.gov.vn
                </Text>
                <Text style={styles._text}>News updates from Vietnam Tourism: </Text>
                <Text style={[styles._text, styles.link]}>
                    https://vietnam.travel/media-industry
                </Text>

            </View>
        </ScrollView>
    );
}







