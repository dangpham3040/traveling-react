// Imports: Dependencies
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
// Imports: Redux
import rootReducer from './index';
// Middleware: Redux Persist Config
const persistConfig = {
  // Root
  key: 'isfist',
  // Storage Method (React Native)
  storage: AsyncStorage,
  whitelist: ['isfist']
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);
// Redux: Store
const store = createStore(
  persistedReducer,
  applyMiddleware(
    createLogger(),
  ),
);
// Middleware: Redux Persist Persister
let persistor = persistStore(store);
// Exports
  

export {
  store,
  persistor,
};