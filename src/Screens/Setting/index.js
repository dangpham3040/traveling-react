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
    Modal,
    TouchableOpacity

} from 'react-native';
import Header from '../../Components/header'
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
export default function App() {
    const navigation = useNavigation()
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={[styles.full,modalVisible?styles.full_dim:null]}>
            <Header name={'Setting'} isdim={modalVisible}/>
            <View style={styles.body}>
                <Text style={styles.title}>Account</Text>
                <View style={styles.choose}>
                    <Text style={styles.text_choose} onPress={() => navigation.navigate('Change_Password')}>Change Password</Text>
                    <View style={styles.line}></View>
                </View>
                <View style={styles.choose}>
                    <Text style={styles.text_choose}>Notification</Text>
                    <View style={styles.line}></View>
                </View>

                <Text style={styles.title}>Others</Text>
                <View style={styles.choose}>
                    <Text style={styles.text_choose}>Privacy Policy</Text>
                    <View style={styles.line}></View>
                </View>
                <View style={styles.choose}>
                    <Text style={styles.text_choose}>Terms & Conditions</Text>
                    <View style={styles.line}></View>
                </View>
                <View style={styles.choose}>
                    <Text style={styles.text_Logout} onPress={() => setModalVisible(true)}>Logout</Text>
                    <View style={styles.line}></View>
                </View>
            </View>
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
                                onPress={() => setModalVisible(!modalVisible)}  >
                                <Text style={styles.textStyle}>YES</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </Modal>
        </View>
    );
}







