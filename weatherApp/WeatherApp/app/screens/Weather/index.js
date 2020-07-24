import React from 'react';
import theme from 'config/theme'
import screenRoutes from 'config/constants/screenRoutes'
import { createStackNavigator } from '@react-navigation/stack';
const WeatherStack = createStackNavigator();
import MainScreen from 'screens/Weather/MainScreen';
import NewLocationScreen from 'screens/Weather/NewLocationScreen';
import strings from 'config/constants/strings';
import HeaderTitle from 'components/HeaderTitle';
const WeatherStackNavigator = () => {
    return (
      <WeatherStack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: theme.colors.concrete }
        }}>
        <WeatherStack.Screen
          name={screenRoutes.MAIN_WEATHER_SCREEN}
          component={MainScreen}
          options={({ navigation }) => ({
            headerTitle: () => <HeaderTitle title={strings.headerTitle} />
          })}
        />
            <WeatherStack.Screen
          name={screenRoutes.SEARCH_LOCATIONS_SCREEN}
          component={NewLocationScreen}
          options={({ navigation }) => ({
            headerTitle: () => <HeaderTitle title={strings.headerTitle} />
          })}
        />
      </WeatherStack.Navigator>
    );
  };
  const WeatherScreen = () => {
    return <WeatherStackNavigator />;
  };
  
  export default WeatherScreen;