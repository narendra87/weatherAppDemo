import NetInfo from "@react-native-community/netinfo";
import React, { Component } from 'react';
import { Alert, SectionList, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import ListRow from '../atoms/ListRow';
import SearchBar from '../atoms/SearchBar';
import { GET_WEATHER, GET_STORED_WEATHER } from '../utils/const';
import Snackbar from "react-native-snackbar";

class WeatherInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchZip: '',
            errorMessage: "",
        }
    }
    componentDidMount() {
        if (this.props.weatherDataList.length==0) {
            this.props.getSavedData();
        }
    }
    getTimeFromTemestamp(timestamp) {
        var a = new Date(timestamp * 1000);
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
            'Thursday', 'Friday', 'Saturday',
        ];
        var year = a.getFullYear();
        var day = a.getDay();
        return days[day];
    }
    getWeatherForZip = () => {
        NetInfo.fetch().then(state => {
            if (state.isConnected) {
                if (this.state.searchZip.length > 4) {
                    this.props.getWeatherData(this.state.searchZip);
                    setTimeout(() => {
                        this.setState({ errorMessage: this.props.error })
                    }, 1000);
                } else {
                    this.showSnackBar("Please enter a valid zip code")
                }
            } else {
                this.showAlert('You are offline please connect to network or check your network connection');
            }
        });
    }
    showSnackBar(message) {
        Snackbar.show({
            text: message,
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor: 'red',
        });
        if (this.state.errorMessage) {
            this.setState({ errorMessage: '' })
        }
    }
    showAlert(message) {
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

    render() {
        let sectionDict = {};
        let dataArray = [];

        this.props.weatherDataList.map((data) => {
            const day = this.getTimeFromTemestamp(data.dt);

            if (sectionDict[day]) {
                let sectionarray = sectionDict[day];
                sectionDict[day] = sectionarray.concat(data);
            } else {
                sectionDict[day] = [data];
            }
        });

        Object.entries(sectionDict).map(([key, value]) => {
            console.log(key);
            const main = { title: key, data: value };
            dataArray.push(main);
        });

        return (
            <View style={styles.parent} >
                <SearchBar zipCode={this.state.searchZip}
                    onZipChange={(newZip) => this.setState({
                        searchZip: newZip
                    })}
                    onSubmit={() =>
                        this.getWeatherForZip(this.state.searchZip)
                    }
                />
                {this.state.errorMessage ? this.showSnackBar(this.state.errorMessage) : null}
                {this.props.cityName ? <Text style={styles.heading}>{this.props.cityName}</Text> : null}
                <SectionList
                    style={{ marginBottom: 20 }}
                    sections={dataArray}
                    renderItem={({ item }) => {
                        return <View>
                            <ListRow item={item} />
                        </View>
                    }}
                    renderSectionHeader={({ section }) => (
                        <Text style={styles.sectionHeader}>{section.title}</Text>
                    )}
                    keyExtractor={(item, index) => index}
                />

            </View>

        );
    }
};

const styles = StyleSheet.create({
    parent: {
        backgroundColor: '#b0eef7',
        flex: 1,
    },
    heading: {
        fontSize: 20,
        color: '#0d3f61',
        paddingLeft: 16,
        paddingRight: 16,
        marginTop: 10,
        fontWeight: 'bold',
    },
    error: {
        fontSize: 16,
        color: 'red',
        paddingLeft: 16,
        paddingRight: 16,
        marginTop: 10,
    },
    sectionHeader: {
        paddingTop: 10,
        paddingLeft: 16,
        paddingRight: 16,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#0d3f61',
        backgroundColor: '#b0eef7',
    },
})

const mapStateToProps = (state) => {
    const { weather } = state.weatherResponse;
    let weatherDataList = []
    let cityName = ''
    let error = ''
    if (weather) {
        error = weather.errormessage;
        if (weather.result) {
            const { list, city } = weather.result;
            weatherDataList = list;
            if (city) {
                const { name } = city;
                cityName = name;
            }
        }
    }
    return {
        weatherDataList,
        cityName,
        error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getWeatherData: (zipCode) => {
            return dispatch({
                type: GET_WEATHER,
                value: zipCode,
            })
        },
        getSavedData: () => {
            return dispatch({
                type: GET_STORED_WEATHER,
                value: 1
            })
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherInfo);