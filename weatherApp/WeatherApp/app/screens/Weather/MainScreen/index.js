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
import {getCurrentSelector,getForecastedSelector,selectedIdSelector,isForestWeatherFetchingSelector,isCurrentWeatherFetchingSelector} from '../../../reducers/selectors';

const MainScreen = ({navigation}) => {
  const currentWeather = useSelector(getCurrentSelector);
  const forestWeather = useSelector(getForecastedSelector);
  const isCurrentWeatherFetching = useSelector(isCurrentWeatherFetchingSelector);
  const isForestWeatherFetching = useSelector(isForestWeatherFetchingSelector);
  const selectedId = useSelector(selectedIdSelector);

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
      {!isCurrentWeatherFetching &&
        currentWeather.length > 0 && (
          <ImageWeather
            source={
              currentWeather[selectedId].icon
                ? Images.weather[currentWeather[selectedId].icon]
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
                currentWeather[selectedId].icon
                  ? Images.weather[
                      currentWeather[selectedId].icon
                    ].iconName
                  : null
              }
              dayWeek={currentWeather[selectedId].weekday}
              temperature={
                currentWeather[selectedId].temp
                  ? `${currentWeather[selectedId].temp} ºC`
                  : null
              }
              typeWeather={
                currentWeather[selectedId].description
              }
              city={
                currentWeather[selectedId].city
                  ? currentWeather[selectedId].city
                  : null
              }
            />
          </ImageWeather>
        )}
      <ForestContainer>
        {isForestWeatherFetching && (
          <Fetching
            animating={isForestWeatherFetching}
            color={theme.colors.keppel}
          />
        )}
        {!isForestWeatherFetching &&
          forestWeather.length > 0 && (
            <WeatherList forecast={forestWeather[selectedId]} />
          )}
      </ForestContainer>
    </Container>
  );
};
export default MainScreen;
