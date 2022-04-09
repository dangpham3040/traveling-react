// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import NavigaionStack from './src/routing/'
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import allReducter ,{persistor}from './src/Redux/index';
// import { LogBox } from 'react-native';
// import { PersistGate } from 'redux-persist/integration/react'
// const store = createStore(allReducter, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// export default function app() {
//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         {LogBox.ignoreAllLogs()}
//         <NavigaionStack />
//       </PersistGate>
//     </Provider>
//   );
// };

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
 import allReducter from './src/Redux/index';
 import { LogBox } from 'react-native';
 const store = createStore(allReducter, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
 export default function app() {
   return (
     <Provider store={store}>
       {LogBox.ignoreAllLogs()}
       <NavigaionStack />
     </Provider>
   );
 };
 
 
 
 


