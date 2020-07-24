
import { delay, takeLatest, takeEvery, put } from 'redux-saga/effects'
import { GET_WEATHER_ASYNC, GET_WEATHER, UNIT, API_KEY } from '../utils/const';
import axios from 'axios';
var weatherResponse = null;

function* getWeatherDataAsync() {
    var url = "http://api.openweathermap.org/data/2.5/forecast?zip=110096,IN&appid=55bef35e2e101cb5349f89e1eb8be0f9&units=metric"
    yield fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            console.log("Response is:======>", responseJson)
            weatherResponse = responseJson;
        })
        .catch((error) => {
            console.log("Response is:======>", error)
        });
    yield put({
        type: GET_WEATHER_ASYNC,
        value: weatherResponse,
    })
}

export function* getWeatherData() {
    yield takeLatest(GET_WEATHER, getWeatherDataAsync);
}
