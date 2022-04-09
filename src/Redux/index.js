
// import counterReducer from "./counter";
// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { configureStore } from "@reduxjs/toolkit";
// import logger from 'redux-logger';
// const persistConfig = {
//     key: 'root',
//     storage: AsyncStorage,
//     version: 0
// }

// //Combine all the sub reducers
// const rootReducer = combineReducers({
//     myCounter: counterReducer,
// })
// const persistedReducer = persistReducer(persistConfig, rootReducer)
// const store = createStore(persistedReducer, applyMiddleware(logger));
// export const persistor = persistStore(store)
// export default store;

import { combineReducers } from "redux";
import { counterReducer } from "./counter";
const allReducter = combineReducers({ myCounter:counterReducer });
export default allReducter