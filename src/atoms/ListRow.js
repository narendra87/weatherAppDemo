import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const ListRow = ({ item }) => { 
    const weather = item.weather;
    const weathetType = (weather) ? weather[0].main : null;
    const wind = item.wind.speed;
    return (
        <View style={styles.viewCpontainer}>
            <View style={styles.viewLeft}>
                <Text style={styles.textHeading}>Tempture: <Text style={styles.text}>{item.main.temp} °C</Text></Text>
                <Text style={styles.textHeading}>Min Tempture: <Text style={styles.text}>{item.main.temp_min}°C</Text></Text>
                <Text style={styles.textHeading}>Max Tempture: <Text style={styles.text}>{item.main.temp_max}°C</Text></Text>
                <Text style={styles.textHeading}>Humidity: <Text style={styles.text}>{item.main.humidity}%</Text></Text>
                <Text style={styles.textHeading}>Pressure: <Text style={styles.text}>{item.main.pressure} hPa</Text></Text>
                <Text style={styles.textHeading}>Wind: <Text style={styles.text}>{wind} meter/sec</Text></Text>
            </View>
            <View style={styles.viewRight}>
                <Text style={styles.weatherStyle}>{getTimeFromTemestamp(item.dt)}</Text>
                <Text style={styles.weatherStyle}>{weathetType}</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    viewCpontainer: {
        flex: 3,
        flexDirection: 'row',
        borderRadius: 5,
        backgroundColor: '#76c2f5',
        marginHorizontal: 15,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,

    },
    viewLeft: {
        flex: 2,
        flexDirection: 'column',
    },
    viewRight: {
        flex: 1,
        flexDirection: 'column',
        alignItems:'center'
    },
    textHeading: {
        fontSize: 18,
        marginTop: 10,
        marginStart: 15,
    },
    weatherStyle: {
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold',
        color: '#0d3f61',
    },
    text: {
        fontSize: 14,
        marginTop: 10,
    },

});

getTimeFromTemestamp = (timestamp) => {
    var a = new Date(timestamp * 1000);
    var hour = a.getHours();
    var min = a.getMinutes();
    var time;
    if (hour > 12) {
        time = hour - 12 + ':' + min + " " + "PM";
    } else {
        time = hour + ':' + min + " " + "AM";
    }

    return time;
}
export default ListRow;