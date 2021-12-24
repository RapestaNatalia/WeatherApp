import styled from 'styled-components';
import theme from 'config/theme';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.white};
  flex: 1;
  justify-content: center;
  flex-direction: column;
  padding: 8px;
`;
export const Item = styled.Text`
  ${({theme}) => theme.fonts.regular()};
  font-size: ${({theme}) => theme.sizes.s15};
  color: ${({theme}) => theme.colors.mineShaft};
`;
export const LocalityOption = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 5px;
  margin-bottom: 8px;
  padding: 8px;
  background-color: ${(props) =>
    props.selected ? theme.colors.dustyGray : theme.colors.white};
`;
