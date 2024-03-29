import styled from 'styled-components';

export const Container = styled.View`
  flex: 6;
`;
export const IconContainer = styled.View`
  flex: 1;
`;
export const FlatListContainer = styled.View`
  flex: 5;
  margin: 16px;
`;
export const Item = styled.Text`
  ${({theme}) => theme.fonts.regular()};
  font-size: ${({theme}) => theme.sizes.s15};
  color: ${({theme}) => theme.colors.mineShaft};
  padding: 16px;
`;
export const RightButtons = styled.TouchableHighlight``;
export const LocalityOption = styled.TouchableOpacity`
flex-direction: row;
border: 1px solid ${({theme}) => theme.colors.dustyGray};
height: 64px;
width:100%
background: ${({theme}) => theme.colors.catskillWhite};
align-items: center;`;

export const WeatherImageContainer = styled.View`
  width: 20%;
`;
export const CityContainer = styled.View`
  width: 50%;
`;
export const TempContainer = styled.View`
  width: 30%;
`;
export const ButtonContainer = styled.View`
  flex-direction: row;
  right: 0px;
  ${({theme}) => theme.fonts.semiBold()};
  font-size: ${({theme}) => theme.sizes.s24};
  padding: 8px;
  border-radius: 300px;
  justify-content: flex-end;
  align-items: flex-end;
`;
