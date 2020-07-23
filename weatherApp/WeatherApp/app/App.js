/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import WeatherScreen from 'screens/Weather'
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App: () => React$Node = () => {
  return (
      <SafeAreaProvider>
        <NavigationContainer>
           <WeatherScreen/>
        </NavigationContainer>
      </SafeAreaProvider>
  );
};



export default App;
