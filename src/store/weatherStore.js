// Imports: Dependencies
import { createStore, applyMiddleware,combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import weatherReducer from '../reducers/weatherReducer';

// Imports: Redux Root Saga
import { rootSaga } from '../../src/sagas/index';
const rootReducer = combineReducers(
    { weatherResponse: weatherReducer }
    );
// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();
// Redux: Store
const weatherStore = createStore(
  rootReducer,
  applyMiddleware(
    sagaMiddleware,
    createLogger(),
  ),
);
// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);
// Exports
export {
    weatherStore,
}

