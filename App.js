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
import { LogBox } from 'react-native';
import { store, persistor } from './src/Redux/store';
import { PersistGate } from 'redux-persist/integration/react';
//  const store = createStore(allReducter, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default function app() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {LogBox.ignoreAllLogs()}
        <NavigaionStack />
      </PersistGate>
    </Provider>
  );
};

 