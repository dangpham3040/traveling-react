/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState, useContext } from 'react';
import NavigaionStack from './src/routing/'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Provider } from 'react-redux';
import { LogBox,PermissionsAndroid } from 'react-native';
import { store, persistor } from './src/Redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Geocoder from 'react-native-geocoding';
import { Checkbox } from 'semantic-ui-react';
//  const store = createStore(allReducter, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default function app() {
  const requestPermissions = async () => {
    if (Platform.OS === 'ios') {
        Geolocation.requestAuthorization();
        Geolocation.setRNConfiguration({
            skipPermissionRequests: false,
            authorizationLevel: 'whenInUse',
        });
    }

    if (Platform.OS === 'android') {
        await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
    }
}
  
    useEffect(() => {
        requestPermissions()
    }, [])
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {LogBox.ignoreAllLogs()}
        <NavigaionStack />
      </PersistGate>
    </Provider>
  );
};

 