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
import { ThemeProvider } from 'styled-components';

import theme from 'config/theme';
const App: () => React$Node = () => {
  return (
    <ThemeProvider theme={theme}>

      <SafeAreaProvider>
        <NavigationContainer>
           <WeatherScreen/>
        </NavigationContainer>
      </SafeAreaProvider>
      </ThemeProvider>
  );
};



export default App;
