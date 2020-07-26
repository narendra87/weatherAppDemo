// Imports: Dependencies
import { all, fork} from 'redux-saga/effects';
// Imports: Redux Sagas
import { getWeatherData, getSavedData} from './weatherSaga';
// Redux Saga: Root Saga
export function* rootSaga () {
  yield all([
    fork(getWeatherData),
    fork(getSavedData),
  ]);
};