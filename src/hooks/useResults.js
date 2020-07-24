import { useState } from 'react'
import { Alert } from 'react-native'
import { COUNTRY_CODE,API_KEY } from '../utils/const';
import { AsyncStorage } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import { useDispatch, useSelector } from "react-redux";
import {GET_WEATHER} from '../utils/const'
export default () => {
    // const [result, setResult] = useState([]);
    // const [city, setCity] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    var result  = [];
    var city = '';
    
    const weatherRes = useSelector(state => state.weatherResponse);
    console.log("weather response: =====>>>>>",weatherRes)
    const mainResponse = weatherRes.value;
     result  = mainResponse.list;
     city = mainResponse.city.name;
    const dispatch = useDispatch();
    const searchApi = (zipCode) => {

        NetInfo.fetch().then(state => {
            console.log("Connection type", state.type);
            console.log("Is connected?", state.isConnected);
            if (state.isConnected) {
               makeApiCall(zipCode);
            } else {
                showAlert('You are offline We are showing last stored data');
                //retrieveData();
            }
        });

    }
    makeApiCall = (zipCode) => {
       dispatch({
            type: GET_WEATHER,
            value: "110096,IN",
          })

        // var url = "http://api.openweathermap.org/data/2.5/forecast?zip=" + zipCode + "," + COUNTRY_CODE + "&appid=" + API_KEY + "&units=metric";
        // return fetch(url)
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //         if (responseJson != null && responseJson.list != null) {

        //             setResult(responseJson.list);
        //             setCity(responseJson.city.name)
        //             setErrorMessage('')
        //             storeData(responseJson)
        //         } else if (responseJson != null && responseJson.message != null) {
        //             setErrorMessage(responseJson.message);
        //         }
        //     })
        //     .catch((error) => {
        //         showAlert('Something went worng.')
        //     });
    }
   
    // storeData = async (responsedata) => {
    //     try {
    //         var res= JSON.stringify(responsedata)
    //         await AsyncStorage.setItem('response', res);
    //         console.log("value stored");

    //     } catch (error) {
    //         // Error saving data
    //         console.log(error.message)
    //         console.log("error in value stored");
    //     }
    // };

    // retrieveData = async () => {
    //     try {
    //         var stringResponse = await AsyncStorage.getItem('response');
    //         var response = JSON.parse(stringResponse)
    //         if (response != null) {
    //             setResult(response.list);
    //             setCity(response.city.name)
    //             setErrorMessage('')
    //         } else {
    //             setErrorMessage('There is no stored data')
    //         }
    //     } catch (error) {
    //         setErrorMessage('There is no stored data')
    //     }
    // };
    showAlert = (message) => {
        Alert.alert(
            'Alert',
        message,
            [
            {
                text: 'OK', onPress: () => {

                }
            }

            ]

        );
    }
    return [searchApi, result, city,errorMessage]
};