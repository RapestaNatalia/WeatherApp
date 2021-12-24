import styled from 'styled-components';

export const ButtonContainer = styled.TouchableOpacity`
  background: ${({theme, primary}) =>
    primary ? theme.colors.keppel : theme.colors.white};
  border-radius: 5px;
  border-color: ${({theme}) => theme.colors.keppel};
  border-width: 1px;
`;

export const ButtonText = styled.Text`
  color: ${({theme, primary}) =>
    primary ? theme.colors.white : theme.colors.keppel};
  ${({theme}) => theme.fonts.semiBold()};
  font-size: ${({theme}) => theme.sizes.s16};
  display: flex;
  align-items: center;
  text-align: center;
  padding: 16px;
`;
