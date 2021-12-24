import {
  Container,
  ForecastContainer,
  MaxTemp,
  MinTemp,
  DayAndType,
  DayWeek,
  TypeWeather,
  WeatherImageContainer,
  TempContainer,
} from './styled';
import React from 'react';
import FlatList from 'components/FlatList/';
import theme from 'config/theme/';
import Icon from 'components/Icon/';
import Images from 'assets/images/';
const WeatherList = ({forecast}) => {
  const renderItem = ({item}) => {
    return (
      <ForecastContainer>
        <TempContainer>
          <MaxTemp>{`${item.maxTemp} ºC `}</MaxTemp>
          <MinTemp>{` ${item.minTemp} ºC`}</MinTemp>
        </TempContainer>
        <DayAndType>
          <DayWeek>{item.weekday}</DayWeek>
          <TypeWeather numberOfLines={1} ellipsizeMode={'tail'}>
            {item.weatherText}
          </TypeWeather>
        </DayAndType>
        <WeatherImageContainer>
          <Icon
            name={Images.weather[item.icon].iconName}
            size={18}
            enabled={false}
            color={theme.colors.genoa}
          />
        </WeatherImageContainer>
      </ForecastContainer>
    );
  };
  return (
    <Container>
      <FlatList data={forecast} renderItem={renderItem} />
    </Container>
  );
};
export default WeatherList;
