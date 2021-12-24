import React, {useEffect} from 'react';
import {
  Container,
  ImageWeather,
  ButtonContainer,
  ForestContainer,
} from './styled';
import theme from 'config/theme';
import WeatherList from 'components/Weather/WeatherList/';
import CurrentWeather from 'components/Weather/CurrentWeather/';
import {
  getCurrentWeatherPosition,
  getForecastWeatherPosition,
  refreshValuesFromWeather,
} from 'actions/weather';
import Images from 'assets/images/index/';
import {useSelector, useDispatch} from 'react-redux';
import Fetching from 'components/ActivityIndicator/';
import IconNames from 'components/Icon/iconNames';
import Icon from 'components/Icon';
import ScreenRoutes from 'config/constants/screenRoutes';
const MainScreen = ({navigation}) => {
  const weatherReducer = useSelector((state) => state.weatherReducer);
  const {selectedId} = useSelector((state) => state.weatherReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentWeatherPosition());
    dispatch(getForecastWeatherPosition());
  }, []);
  function searchLocation() {
    dispatch(refreshValuesFromWeather());
    navigation.navigate(ScreenRoutes.SEARCH_LOCATIONS_SCREEN);
  }
  return (
    <Container>
      {!weatherReducer.isCurrentWeatherFetching &&
        weatherReducer.currentWeather.length > 0 && (
          <ImageWeather
            source={
              weatherReducer.currentWeather[selectedId].icon
                ? Images.weather[weatherReducer.currentWeather[selectedId].icon]
                    .background
                : null
            }>
            <ButtonContainer>
              <Icon
                name={IconNames.Search}
                size={36}
                color={theme.colors.black}
                onPress={searchLocation}>
              </Icon>
            </ButtonContainer>
            <CurrentWeather
              iconName={
                weatherReducer.currentWeather[selectedId].icon
                  ? Images.weather[
                      weatherReducer.currentWeather[selectedId].icon
                    ].iconName
                  : null
              }
              dayWeek={weatherReducer.currentWeather[selectedId].weekday}
              temperature={
                weatherReducer.currentWeather[selectedId].temp
                  ? `${weatherReducer.currentWeather[selectedId].temp} ºC`
                  : null
              }
              typeWeather={
                weatherReducer.currentWeather[selectedId].description
              }
              city={
                weatherReducer.currentWeather[selectedId].city
                  ? weatherReducer.currentWeather[selectedId].city
                  : null
              }
            />
          </ImageWeather>
        )}
      <ForestContainer>
        {weatherReducer.isForestWeatherFetching && (
          <Fetching
            animating={weatherReducer.isForestWeatherFetching}
            color={theme.colors.keppel}
          />
        )}
        {!weatherReducer.isForestWeatherFetching &&
          weatherReducer.forestWeather.length > 0 && (
            <WeatherList forecast={weatherReducer.forestWeather[selectedId]} />
          )}
      </ForestContainer>
    </Container>
  );
};
export default MainScreen;
