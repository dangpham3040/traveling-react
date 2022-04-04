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
    SafeAreaView,
    TouchableOpacity,

} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Logo from '../../Icons/logo'
import Background from '../../Icons/mark_logo'
import Google from '../../Icons/google'
import Apple from '../../Icons/apple'
import Facebook from '../../Icons/facebook'

import Textinput from '../../Components/textinput'
import allReducter from '../../Redux';
import { createStore } from 'redux';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function App() {
    const navigation = useNavigation();
    const [choose, setchoose] = useState(false)
    const handle_choose = () => {
        choose ? setchoose(false) : setchoose(true)

    }
    const store = createStore(allReducter);
    const dispatch = useDispatch();
    const email = useSelector(state => [state.Email])
    // const pass = useSelector(state => state.Password)
    return (
        <SafeAreaView style={styles.full}>
            <View style={styles.logo}>
                <Logo />
            </View>
            <View style={styles.Buttonpage}>
                <View style={styles.title_view}>
                    <TouchableOpacity style={choose === false ? styles.isclick : styles.isnotclick} onPress={handle_choose}>
                        <Text style={choose === false ? styles._title : styles.title} > Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={choose === true ? styles.isclick : styles.isnotclick} onPress={handle_choose}>
                        <Text style={choose === true ? styles._title : styles.title}> Sign Up</Text>
                    </TouchableOpacity>
                </View>
                {choose ?
                    <View style={styles.body}>
                        <Textinput text={'Username'} icon={2} type={0} />
                        <Textinput text={'Email'} icon={1} type={1} />
                        <Textinput text={'Password'} icon={1} type={2} />
                        <Textinput text={'Confirm Password'} icon={1} type={3} />
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.text_button}>Sign Up</Text>
                        </TouchableOpacity>
                        <View style={styles.terms}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.text}>By signing up, you agree to the</Text>
                                <Text style={styles.text_link}> Terms of service</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.text}>and</Text>
                                <Text style={styles.text_link}> Privacy Policy</Text>
                            </View>
                        </View>

                    </View>
                    :
                    <View style={styles.body}>
                        <Textinput text={'Email'} icon={0} type={1} />
                        <Textinput text={'Password'} icon={1} type={2} />
                        <Text style={styles.Forgot}>Forgot Password</Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.text_button} onPress={() =>navigation.navigate('Home')}>Login</Text>
                        </TouchableOpacity>
                        <View style={styles.or}>
                            <View style={styles.line} />
                            <Text style={styles.or_text}>or</Text>
                            <View style={styles.line} />
                        </View>
                        <View style={styles.signinto}>
                            <Google style={styles.company_logo} />
                            <Facebook style={styles.company_logo} />
                            <Apple style={styles.company_logo} />
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.skip}>Skip</Text>
                        </TouchableOpacity>
                    </View>}
            </View>
            <View style={styles.Background}>
                <Background />
            </View>

        </SafeAreaView>

    )

}







