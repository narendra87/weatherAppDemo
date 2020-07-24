import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import Weather from './src/screens/Weather';
import {Provider} from 'react-redux'
import {weatherStore} from './src/store/weatherStore';
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={weatherStore}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome to Weater' }}
        />
        <Stack.Screen name="Weather" component={Weather}
          options={{ title: '5 days weather', headerBackTitle: " " }} />
       
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

// import React from 'react';
// import {Provider} from 'react-redux'
// import Counter from './src/screens/Counter';
// import {store} from './src/store/ReduxStore';

// // React Native App
// export default function App() {
//   return (
//     // Redux: Global Store
//     <Provider store={store}>
//       <Counter />
//     </Provider>
//   );
// }