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
     TouchableOpacity
 
 } from 'react-native';
 import Header from '../../Components/header'
 import Textinput from '../../Components/textinput'
 import { styles } from './styles';
 export default function App() {
     return (
         <View style={styles.full}>
             <Header name={'Forgot Password'} ishave />
             <View style={styles.info}>
 
             </View>
             <View style={styles.body}>
                 <Textinput icon={0} text={'Email'} />
                 <TouchableOpacity style={styles.button}>
                     <Text style={styles.text_button}>Save Changes</Text>
                     <View style={styles.line} />
                 </TouchableOpacity>
             </View>
         </View>
     );
 }
 
 
 
 
 
 
 
 