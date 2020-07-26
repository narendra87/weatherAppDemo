// Imports: Dependencies
import { createStore, applyMiddleware,combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import weatherReducer from '../reducers/weatherReducer';
// add for persist data
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

// Imports: Redux Root Saga
import { rootSaga } from '../../src/sagas/index';
const rootReducer = combineReducers(
    { weatherResponse: weatherReducer }
    );

    const persistConfig = {
      key: 'root',
      storage: AsyncStorage,
      whitelist: ['weather'] // which reducer want to store
    };
    const pReducer = persistReducer(persistConfig, rootReducer);

// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();
// Redux: Store
const weatherStore = createStore(
  pReducer,
  applyMiddleware(
    sagaMiddleware,
    createLogger(),
  ),
);
// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);
const persistor = persistStore(weatherStore);
// Exports
export {
    persistor,weatherStore
}

