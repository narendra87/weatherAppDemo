import * as React from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'
import { getWeatherData } from '../sagas/weatherSaga';
import { useDispatch, useSelector } from "react-redux";
import {GET_WEATHER} from '../utils/const'

export default function HomeScreen({ navigation }) {
    // const weatherRes = useSelector(state => state.weatherResponse);
    // console.log("weather response: =====>>>>>",weatherRes.value)
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <View style={styles.buttonStyle}>
                <Button
                    title="Redux Example"
                    onPress={() => {
                        // dispatch({
                        //                 type: GET_WEATHER,
                        //                 value: "110096,IN",
                        //               })
                        navigation.navigate("Weather")
                    }} />
            </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        margin:20
    },
    buttonStyle: {
        marginTop: 20
    }
});
// const mapStateToProps= (state)=>{

// }

// const mapDispatchToProps = (dispatch) => {

//     return {
//         getWeatherData: (count) =>{
//          return dispatch(getWeatherData(count))
//       }

//     // // Action
//     // return {
      
//     //   getWeatherData: () => dispatch({
//     //     type: 'DECREASE_COUNTER',
//     //     value: "110096,IN",
//     //   }),
//     // };
// }
// }