
import { takeLatest, put } from 'redux-saga/effects'
import { GET_WEATHER_ASYNC, GET_WEATHER, UNIT, API_KEY, COUNTRY_CODE, GET_STORED_WEATHER } from '../utils/const';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
var weatherResponse = { errormessage: "", result: null };

function* getWeatherDataAsync(action) {
    var url = `http://api.openweathermap.org/data/2.5/forecast?zip=${action.value},${COUNTRY_CODE}&appid=${API_KEY}&units=${UNIT}`;
    yield axios.get(url)
        .then((response) => {
            var responseJson = response.data;
            if (responseJson != null && responseJson.list != null) {
                weatherResponse.result = responseJson;
                weatherResponse.errormessage = "";
                var res = JSON.stringify(responseJson)
                AsyncStorage.setItem('response', res);
            } else if (responseJson != null && responseJson.message != null) {
                weatherResponse.errormessage = responseJson.message;
            }
        })
        .catch((error) => {
            if (((error.message).toString()).includes("404") || ((error.message).toString()).includes("400")) {
                weatherResponse.errormessage = "City not found";
            } else {
                weatherResponse.errormessage = error.message;
            }
        });
    yield put({
        type: GET_WEATHER_ASYNC,
        value: weatherResponse,
    })
}

function* getStoredWeatherData() {
    try {
        yield AsyncStorage.getItem('response').then((response) => {
            var responseJson = JSON.parse(response);
            weatherResponse.result = responseJson;
            weatherResponse.errormessage = "";
        });
        yield put({
            type: GET_WEATHER_ASYNC,
            value: weatherResponse,
        })
    } catch (error) {
        console.log("Error while retriving data from async storage", error)
    }
}
export function* getWeatherData() {
    yield takeLatest(GET_WEATHER, getWeatherDataAsync);
}
export function* getSavedData() {
    yield takeLatest(GET_STORED_WEATHER, getStoredWeatherData);
}