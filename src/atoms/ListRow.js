import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const ListRow = ({item}) => {
    return (
        <View style={styles.viewCpontainer}>
            <Text style={styles.text}>Date: {item.dt_txt}</Text>
            <Text style={styles.text}>Tempture: {item.main.temp} °C</Text>
            <Text style={styles.text}>Min Tempture: {item.main.temp_min}°C</Text>
            <Text style={styles.text}>Max Tempture: {item.main.temp_max}°C</Text>
            <Text style={styles.text}>Humidity: {item.main.humidity}%</Text>
            <Text style={styles.text}>Pressure: {item.main.pressure}hPa</Text>
            
        </View>
    );
};
const styles = StyleSheet.create({
    viewCpontainer: {
        borderRadius: 5,
        backgroundColor: '#e5e5e5',
        marginHorizontal: 15,
        marginVertical: 5,
        paddingTop:10,
        paddingBottom:10,
        
    },
    text: {
        fontSize: 18,
        marginTop:10,
        marginStart: 15,
    },
    bigtext: {
        fontSize: 20,
        marginTop:10,
        marginStart: 15,
    },
    icon: {
        fontSize: 25,
        alignSelf: 'center',
        marginStart: 15,
    }

});
export default ListRow;