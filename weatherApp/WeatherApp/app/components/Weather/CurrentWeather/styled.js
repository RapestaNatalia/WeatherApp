import styled from 'styled-components';

export const Container = styled.View`
  flex-direction: column;
  flex: 3;
  align-items: center;
  justify-content: center;
`;
export const TypeWeather = styled.Text`
  ${({ theme }) => theme.fonts.semiBold()};
  font-size: ${({ theme }) => theme.sizes.s16};
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

export const DayWeek = styled.Text`
  ${({ theme }) => theme.fonts.regular()};
  font-size: ${({ theme }) => theme.sizes.s16};
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;
export const City = styled.Text`
  ${({ theme }) => theme.fonts.regular()};
  font-size: ${({ theme }) => theme.sizes.s16};
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;
export const ImageWeather = styled.View`
  height: 56px;
  margin: 8px;
`;
export const Temperature = styled.Text`
  ${({ theme }) => theme.fonts.semiBold()};
  font-size: ${({ theme }) => theme.sizes.s50};
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;
