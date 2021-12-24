import styled from 'styled-components';

export const Container = styled.View`
  flex: 6;
`;
export const CurrentContainer = styled.View`
  flex: 3;
`;
export const ForestContainer = styled.View`
  flex: 3;
`;
export const ImageWeather = styled.ImageBackground`
  flex: 4;
  resize-mode: cover;
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
