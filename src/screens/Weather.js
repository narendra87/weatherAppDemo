import React, { useState,useEffect } from 'react'
import { Text, View, StyleSheet} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import useResults from '../hooks/useResults'
import SearchBar from '../atoms/SearchBar';
import ListRow from '../atoms/ListRow';

const Weather = () => {
    const [searchZip, setZipCode] = useState('');
    const [searchApi, result, city,errorMessage] = useResults();

    // filterDataByDate=(date)=>{
    // return result.filter(result =>{
    //     return result.dt_txt.indexOf(date)>=0;
    // })
    // };
    // useEffect(()=>{
    //     // write code want to run first time
    //     retrieveData();
    //     },[]
    //     );
    return (
        <View>
            <SearchBar zipCode={searchZip}
                onZipChange={(newZip) => setZipCode(newZip)}
                onSubmit={() => searchApi(searchZip)}
            />
            {errorMessage ? <Text > {errorMessage}</Text> : null}
            {city ? <Text style={styles.heading}>City is: {city}</Text> : null}


            <FlatList
                data={result}
                keyExtractor={(data) => data.dt}
                renderItem={({ item }) => {
                    return <View>
                        <ListRow item={item} />
                    </View>
                }

                } />
        </View>

    );
};

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        color: '#000000',
        alignSelf: 'center',
        padding: 10,
    },
})
export default Weather;