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
    TextInput
} from 'react-native';
import { styles } from './styles';
import { Colors } from '../../Utils/Color';
export default function App() {
    const [modalVisible, setmodalVisible] = useState(false)
    const handle_modalVisible = () => {
        modalVisible ? setmodalVisible(false) : setmodalVisible(true)
    }
    return (
        <View>
            <TouchableOpacity onPress={handle_modalVisible}>
                <View style={styles.view}>
                    <Text style={styles.text}>
                        +  Ask
                    </Text>
                </View>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}  >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Aks a question or share your tips</Text>
                        <View style={styles.line} />
                        <TextInput
                            style={styles.input}
                            placeholder={'Type your massage'}
                        />
                        <TouchableOpacity
                            onPress={() => setmodalVisible(!modalVisible)}  >
                            <View style={[styles.button]}>
                                <Text style={styles.textStyle}>Add</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )

}