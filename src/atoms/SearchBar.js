import React from 'react'
import { TextInput, View, Image, StyleSheet } from 'react-native'

const SearchBar = ({ zipCode, onZipChange, onSubmit }) => {
    return (
        <View style={styles.viewCpontainer}>
            <Image source={require('../assets/search.png')}
                style={styles.icon} />
            <TextInput style={styles.input}
                placeholder='Enter zip code to see the weather'
                value={zipCode}
                autoCapitalize='none'
                autoCorrect={false}
                maxLength={10}
                onChangeText={newZipCode => onZipChange(newZipCode)}
                onEndEditing={() => onSubmit()}
            ></TextInput>

        </View>
    );
};
const styles = StyleSheet.create({
    viewCpontainer: {
        borderRadius: 5,
        backgroundColor: '#76c2f5',
        marginHorizontal: 15,
        marginTop: 15,
        flexDirection: 'row',
        height: 50,
    },
    input: {
        fontSize: 18,
        flex: 1,
        marginStart: 15,
    },
    icon: {
        width: 25,
        height: 25,
        alignSelf: 'center',
        marginStart: 15,
    }

});
export default SearchBar;