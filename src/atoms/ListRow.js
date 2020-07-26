import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const ListRow = ({ item }) => {

    return (
        <View style={styles.viewCpontainer}>
            <Text style={styles.textHeading}>Time: <Text style={styles.text}>{getTimeFromTemestamp(item.dt)}</Text></Text>
            <Text style={styles.textHeading}>Tempture: <Text style={styles.text}>{item.main.temp} °C</Text></Text>
            <Text style={styles.textHeading}>Min Tempture: <Text style={styles.text}>{item.main.temp_min}°C</Text></Text>
            <Text style={styles.textHeading}>Max Tempture: <Text style={styles.text}>{item.main.temp_max}°C</Text></Text>
            <Text style={styles.textHeading}>Humidity: <Text style={styles.text}>{item.main.humidity}%</Text></Text>
            <Text style={styles.textHeading}>Pressure: <Text style={styles.text}>{item.main.pressure} hPa</Text></Text>

        </View>
    );
};
const styles = StyleSheet.create({
    viewCpontainer: {
        borderRadius: 5,
        backgroundColor: '#76c2f5',
        marginHorizontal: 15,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,

    },
    textHeading: {
        fontSize: 18,
        marginTop: 10,
        marginStart: 15,
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