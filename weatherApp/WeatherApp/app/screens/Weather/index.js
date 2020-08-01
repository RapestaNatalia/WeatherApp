import React from 'react';
import theme from 'config/theme'
import screenRoutes from 'config/constants/screenRoutes'
import { createStackNavigator } from '@react-navigation/stack';
const WeatherStack = createStackNavigator();
import MainScreen from 'screens/Weather/MainScreen';
import NewLocationScreen from 'screens/Weather/NewLocationScreen';
import CityListScreen from 'screens/Weather/CityListScreen';
import strings from 'config/constants/strings';
import HeaderTitle from 'components/HeaderTitle';
import IconNames from 'components/Icon/iconNames';
import Icon from 'components/Icon';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Warning: componentWillReceiveProps has been renamed',
  'Warning: componentWillMount has been renamed',
  'Module RCTImageLoader requires',
]);
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
            headerTitle: () => <HeaderTitle right={20} title={strings.headerTitle} />,
            headerLeft: () => (
              <Icon
                left={10}
                name={IconNames.ChevronLeft}
                size={18}
                color={theme.colors.mineShaft}
                onPress={() => navigation.goBack()}
              />
            )
          })}
        />
        <WeatherStack.Screen
          name={screenRoutes.CITY_LIST_SCREEN}
          component={CityListScreen}
          options={({ navigation }) => ({
            headerTitle: () => <HeaderTitle right={20} title={strings.headerTitle} />,
            headerLeft: () => (
              <Icon
                left={10}
                name={IconNames.ChevronLeft}
                size={18}
                color={theme.colors.mineShaft}
                onPress={() => navigation.goBack()}
              />
            )
          })}
        />
      </WeatherStack.Navigator>
    );
  };
  const WeatherScreen = () => {
    return <WeatherStackNavigator />;
  };
  
  export default WeatherScreen;