import * as React from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function HomeScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={{ flex: 4 }}>
                <Text style={styles.txtStyle}>
                    Welcome to weather forcast. You  can check here the forcost condition 
                    for next five days by providing your area zip/postal code.
                </Text>
            </View>
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={styles.buttonStyle}
                    onPress={() => { navigation.navigate("Weather") }}
                >
                    <Text style={styles.buttonTxtStyle}>
                        Check Weather
                   </Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 5,
        backgroundColor: '#76c2f5',
    },
    buttonStyle: {
        backgroundColor: '#0d3f61',
        borderRadius: 10,
        alignSelf: 'center',
        width: '80%',
    },
    buttonTxtStyle: {
        fontSize: 18,
        color: '#b0eef7',
        alignSelf: 'center',
        padding: 10,
    },
    txtStyle: {
        fontSize: 22,
        color: '#0d3f61',
        alignSelf: 'center',
        padding: 10,
        marginTop:100,
    }
});