import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import { Provider } from 'react-redux'
import { weatherStore, persistor } from './src/store/weatherStore';
import WeatherInfo from './src/screens/WeatherInfo';
import { PersistGate } from 'redux-persist/integration/react';
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={weatherStore}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: 'Weather Forecast',
                headerBackTitle: " ",
                headerStyle: {
                  backgroundColor: '#0d3f61',
                },
                headerTitleStyle: {
                  fontSize: 16,
                  fontSize: 22,
                  fontWeight: 'bold',
                  color: '#b0eef7'
                }
              }}
            />
            <Stack.Screen name="Weather" component={WeatherInfo}
              options={{
                title: 'Weather Forecast',
                headerBackTitle: " ",
                headerStyle: {
                  backgroundColor: '#0d3f61',
                },
                headerTitleStyle: {
                  fontSize: 16,
                  fontSize: 22,
                  fontWeight: 'bold',
                  color: '#b0eef7'
                }
              }} />

          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
