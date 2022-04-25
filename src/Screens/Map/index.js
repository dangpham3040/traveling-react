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
    TouchableOpacity,
    TouchableWithoutFeedback,
    ScrollView
} from 'react-native';

import Hearder from '../../Components/header_type'
import Item_map from '../../Components/item_map'
import { Colors } from '../../Utils/Color';
import { styles } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import MapView, { Marker } from 'react-native-maps';


const initCamera = {
    center: {
        // latitude: 10.9560368,
        // longitude: 106.7989811
        latitude: 10.964112,
        longitude: 106.856461,
    },
    zoom: 8.5,
    heading: 0,
    pitch: 0,
    altitude: 0
}

export default function App({ navigation }) {

    // const [location , setlocation] = useState ({
    //     _location : {
    //         latitude: 0,
    //         longitude: 1,
    //         latitudeDelta: 0.0922,
    //         longitudeDelta: 0.0421,
    //     }
    // })

    const TYPE = useSelector(state => state.root.TYPES)
    const l =  useSelector(state => state.root.location)
    const [temp,settemp]=useState()
  
    const itemMap = [
        {
            name: 'SAIGON CENTRAL POST OFFICE',
            address: '123 Nguyen Huu Canh, Ward 22, Binh Thanh district',
            distance: 1,
            pic: require('../../static/images/map1.jpeg'),
            _location : {
                latitude: 10.964112,
            longitude: 106.856461,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }
            
            
        },
        {
            name: 'Ben Thanh Maket',
            address: '123 Nguyen Huu Canh, Ward 22, Binh Thanh district',
            distance: 1,
            pic: require('../../static/images/map2.jpeg'),
            _location : {
                latitude: 10.964112,
            longitude: 106.856461,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }
        },
        {
            name: 'Nguyen Hue Walking Street',
            address: '123 Nguyen Huu Canh, Ward 22, Binh Thanh district',
            distance: 1,
            pic: require('../../static/images/map3.jpeg'),
            _location : {
                latitude: 10.964112,
                longitude: 106.856461,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }
        },

    ]
    const renderItem_type = ({ item }) => (
        <Item_type name={item} index={TYPE.indexOf(item) + 1} />
    );
    const Item_type = ({ name }) => (
        <View style={styles.item_type}>
            <Text style={styles.item_type_name} >{name}</Text>
        </View>
    );
    const renderItem_map = ({ item }) => (
        <Item_map name={item.name} pic={item.pic} address={item.address} distance={item.distance} _location={item._location}/>
    );
    useEffect(() => {
        settemp(l.latitude)
        // console.log(testw)
    }, [])
    return (
        <ScrollView style={styles.full}>
            <Hearder name={'Map'} ishave />
            <FlatList
                numColumns={1}
                data={TYPE}
                renderItem={renderItem_type}
                horizontal={true}
                scrollEnabled
                showsHorizontalScrollIndicator={false}
                pagingEnabled
            />
            <View>
                
            </View>
            <MapView style = {styles.map}
                 showsUserLocation= {true}
                 showsMyLocationButton={true}
                 zoomControlEnabled={true}

                //  provider={PROVIDER_GOOGLE}
                 // provider='google'
                 initialCamera={initCamera}
            >
                {/* if ( {l.latitude}!=0) {
                     <Marker
                     coordinate={l}
                     
                 /> */}

                 
                }
               
                
            </MapView>
            <FlatList
                numColumns={1}
                data={itemMap}
                renderItem={renderItem_map}
                scrollEnabled
                showsHorizontalScrollIndicator={false}
                pagingEnabled
            />
        </ScrollView>
    );
}







