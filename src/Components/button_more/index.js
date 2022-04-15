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
    Modal,
    TouchableOpacity,
    TextInput,

} from 'react-native';
import { styles } from './styles';
import { Colors } from '../../Utils/Color';
import About from '../../Icons/about_us'
import Tour from '../../Icons/tour'
import Review from '../../Icons/review'
import Visa from '../../Icons/visa'
import Safety from '../../Icons/safety'
import Emergency from '../../Icons/emergency'
import Embassy from '../../Icons/embassy'
import Money_changers from '../../Icons/money_changers'
import Language from '../../Icons/language'
import Logout from '../../Icons/logout'
import allReducter from '../../Redux';
import { useNavigation } from '@react-navigation/native';
import { createStore } from 'redux';

export default function App({ name, type }) {
    const store = createStore(allReducter);
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    var icon = null
    var handl = () => null
    switch (type) {
        case 0:
            icon = <About />
            break;
        case 1:
            icon = <Tour />
            break;
        case 2:
            icon = <Review />
            break;
        case 3:
            icon = <Visa />
            handl = () => { navigation.navigate('Visa') }
            break;
        case 4:
            icon = <Safety />
            handl = () => { navigation.navigate('Safety') }
            break;
        case 5:
            icon = <Emergency />
            handl = () => { navigation.navigate('Emergency') }
            break;
        case 6:
            icon = <Embassy />
            handl = () => { navigation.navigate('Embassy') }
            break;
        case 7:
            icon = <Money_changers />
            handl = () => { navigation.navigate('Money_Changers') }
            break;
        case 8:
            icon = <Language />
            handl = () => { navigation.navigate('Language') }
            break;
        case 9:
            icon = <Logout />
            handl = () => { setModalVisible(!modalVisible) }
            break;
    }

    return (
        <View style={styles.full}>
            <TouchableOpacity onPress={() => handl()}>
                <View style={styles.view}>
                    {icon}
                </View>
            </TouchableOpacity>
            <Text style={styles.text}>{name}</Text>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}  >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Are you sure you want to
                            {'\n'}logout?</Text>
                        <View style={styles.view_button}>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonColor1]}
                                onPress={() => setModalVisible(!modalVisible)}  >
                                <Text style={styles.textStyle}>NO</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonColor2]}
                                onPress={() => setModalVisible(!modalVisible) & store.dispatch({
                                    type: 'logout'
                                })}  >
                                <Text style={styles.textStyle}>YES</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </Modal>
        </View>
    )

}