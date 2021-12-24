import styled from 'styled-components';

export const Wrapper = styled.View`
  padding: 8px;
  ${({left}) => left && `margin-left: ${left}px;`}
  ${({right}) => right && `margin-right: ${right}px;`}
`;

export const Title = styled.Text`
  text-align: center;
  flex-wrap: wrap;
  justify-content: center;
  color: ${({theme}) => theme.colors.keppel};
  ${({theme}) => theme.fonts.semiBold()};
  font-size: ${({theme}) => theme.sizes.s18};
`;
