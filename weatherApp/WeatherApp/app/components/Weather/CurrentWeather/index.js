import {
  Container,
  TypeWeather,
  ImageWeather,
  Temperature,
  DayWeek,
  City,
} from './styled';
import React from 'react';
import Icon from 'components/Icon/';
import theme from 'config/theme/';

const CurrentWeather = ({
  iconName,
  typeWeather,
  temperature,
  dayWeek,
  city,
}) => {
  return (
    <Container>
      <ImageWeather>
        <Icon
          name={iconName}
          size={60}
          color={theme.colors.white}
          enabled={false}
        />
      </ImageWeather>
      <TypeWeather>{typeWeather}</TypeWeather>
      <Temperature>{temperature}</Temperature>
      <DayWeek>{dayWeek}</DayWeek>
      <City>{city}</City>
    </Container>
  );
};
export default CurrentWeather;
