import styled from 'styled-components';

export const Container = styled.View`
  flex: 3;
  background-color: ${({ theme }) => theme.colors.white};
`;
export const ForecastContainer = styled.View`
  flex-direction: row;
  border: 0.5px solid ${({ theme }) => theme.colors.dustyGray};
  height: 64px;
  width:100%
  align-items: center;
`;
export const TempContainer = styled.View`
  flex-direction: row;
  left: 16px;
  width: 30%;
  padding: 5px;
`;
export const MaxTemp = styled.Text`
  ${({ theme }) => theme.fonts.semiBold()};
  font-size: ${({ theme }) => theme.sizes.s16};
  color: ${({ theme }) => theme.colors.emperor};
`;
export const MinTemp = styled.Text`
  ${({ theme }) => theme.fonts.semiBold()};
  font-size: ${({ theme }) => theme.sizes.s13};
  color: ${({ theme }) => theme.colors.emperor};
  margin-top: 3px;
`;
export const DayAndType = styled.View`
  width: 40%;
  left: 30px;
  font-size: ${({ theme }) => theme.sizes.s14};
  text-align: center;
  color: ${({ theme }) => theme.colors.keppel};
`;
export const DayWeek = styled.Text`
  ${({ theme }) => theme.fonts.semiBold()};
  font-size: ${({ theme }) => theme.sizes.s14};
  text-align: center;
  color: ${({ theme }) => theme.colors.tundora};
  background-color: ${({ theme }) => theme.colors.white};
`;
export const TypeWeather = styled.Text`
  ${({ theme }) => theme.fonts.semiBold()};
  font-size: ${({ theme }) => theme.sizes.s16};
  text-align: center;
  color: ${({ theme }) => theme.colors.genoa};
`;
export const WeatherImageContainer = styled.View`
  width: 40%;
`;
