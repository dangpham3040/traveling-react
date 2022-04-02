/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import NavigaionStack from './src/routing/'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducter from './src/Redux';

const store = createStore(allReducter, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default function app() {
  return (
    <Provider store={store}>
      <NavigaionStack />
    </Provider>
  );
};




