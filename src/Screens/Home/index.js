/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { Silders } from './Silder'
import {
    Text,
    SafeAreaView,
    FlatList,
    ImageBackground,
    View,
    TextInput,
    Image,
    ScrollView,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';
import Undot from '../../Icons/_undot'
import Dot from '../../Icons/_dot'
import Cloud from '../../Icons/cloud'
import Location from '../../Icons/location'
import Seach from '../../Icons/seach'
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
const DATA = Silders.DATA
const TYPE = Silders.TYPE
const HOTNEW = Silders.HOTNEW
const TOPPLACE = Silders.TOPPLACE
const TOPPOP = Silders.TOPPOP
export default function App({ navigation }) {

    var _dot = [];
    const find = (u) => {
        for (let i = 0; i < DATA.length; i++) {
            var temp = (
                <View key={i}>
                    {
                        DATA.indexOf(DATA[i]) === u ? <Dot style={styles.dot} /> : <Undot style={styles.dot} />
                    }
                </View>
            )
            _dot[i] = temp

        }
    }
    const Item = ({ pic, position, temperature, place, name_place }) => (
        <ImageBackground source={pic} style={styles.ImageBackground}>
            <View style={styles.item}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Image source={require('../../static/images/avt.jpeg')} style={styles.avatar} />
                </TouchableOpacity>
                <View style={styles.view_cloud}>
                    <Cloud onPress={() => navigation.navigate('HotNew')} />
                    <Text style={styles.text_temperature}>{temperature + "\u00b0"}C</Text>
                </View>
                <View style={styles.view_location}>
                    <View style={styles.Location}>
                        <Location />
                        <Text style={styles.Location_text}>{place}</Text>
                    </View>
                    <Text style={styles.name_place}>{name_place}</Text>
                </View>
                <View style={styles.view_dot}>
                    {find(position)}
                    {_dot}
                </View>
            </View>
        </ImageBackground>
    );
    const renderItem = ({ item }) => (
        <Item title={item.title} pic={item.pic} position={DATA.indexOf(item)} temperature={item.temperature} place={item.place} name_place={item.name_place} />
    );
    const Item_type = ({ pic, name,index }) => (
        <TouchableOpacity style={styles.view_type_item} onPress={() => navigation.navigate('Category', { name: name,index: index })}>
            <Image source={pic} style={styles.item_pic} />
            <Text style={styles.item_name}>{name}</Text>
        </TouchableOpacity>
    );
    const renderItem_type = ({ item }) => (
        <Item_type pic={item.pic} name={item.name} index={TYPE.indexOf(item)}/>
    );
    const Item_Hotniew = ({ pic, position }) => (
        <Image source={pic} style={position === HOTNEW.length ? styles.Image_hotnew_last : styles.Image_hotnew} />
    );
    const renderItem_Hotniew = ({ item }) => (
        <Item_Hotniew pic={item.pic} position={HOTNEW.indexOf(item) + 1} />
    );
    const Item_TopPlaces = ({ pic }) => (
        <Image source={pic} style={styles.Image_top} />
    );
    const renderItem_TopPlaces = ({ item }) => (
        <Item_TopPlaces pic={item.pic} />
    );
    // const switchcase = (position, pic) => {
    //     switch (position) {
    //         case 0:
    //             return (<Image source={pic} style={styles.Image_1} />)
    //         case 1:
    //             return (<Image source={pic} style={styles.Image_2} />)
    //         case 2:
    //             return (<Image source={pic} style={styles.Image_3} />)
    //         case 3:
    //             return (<Image source={pic} style={styles.Image_3} />)
    //     }
    // }
    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={styles.full}>

                <View style={{ height: 230 }}>
                    <FlatList
                        numColumns={1}
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        scrollEnabled
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        bounces={false}

                    />
                </View>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Seach')}>
                    <View style={[styles.view_seach, styles.shadow]} >
                        <View style={styles.Seach}>
                            <Seach />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.view_type}>
                    <FlatList
                        numColumns={1}
                        data={TYPE}
                        renderItem={renderItem_type}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        scrollEnabled
                        keyExtractor={item => item.id}
                    />
                </View>
                <View style={styles.view_hotnew}>
                    <View style={styles.Category}>
                        <Text style={styles.titleCategory}>Hot New</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Category', { name: 'Hot New', index:5})}>
                            <Text style={styles.view_all}>View All</Text>
                        </TouchableOpacity>

                    </View>
                </View>

                <FlatList
                    numColumns={1}
                    data={HOTNEW}
                    renderItem={renderItem_Hotniew}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEnabled
                />

                <View style={styles.view_hotnew}>
                    <View style={styles.Category}>
                        <Text style={styles.titleCategory}>Top Places</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Category', { name: 'Top Places',index:6})}>
                            <Text style={styles.view_all}>View All</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <FlatList
                    numColumns={1}
                    data={TOPPLACE}
                    renderItem={renderItem_TopPlaces}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEnabled
                />
                <View style={styles.view_hotnew}>
                    <View style={styles.Category}>
                        <Text style={styles.titleCategory}>Top popular</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Category', { name: 'Top popular', index:7})}>
                            <Text style={styles.view_all} >View All</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.view_TopPop}>
                    <Image source={TOPPOP[0].pic} style={styles.Image_1} />
                    <View style={{ flexDirection: 'column' }}>
                        <Image source={TOPPOP[1].pic} style={styles.Image_2} />
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={TOPPOP[2].pic} style={styles.Image_3} />
                            <Image source={TOPPOP[3].pic} style={styles.Image_3} />
                        </View>
                    </View>
                </View>
                <Image source={require('../../static/images/map.png')} style={styles.map_image} />

            </ScrollView>
            {/* <TabNavigation/> */}
        </View>
    )

}