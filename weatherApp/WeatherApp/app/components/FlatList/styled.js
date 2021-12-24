import styled from 'styled-components';

export const Wrapper = styled.View`
  flex: 1;
`;
export const Listings = styled.FlatList`
  ${({theme}) => theme.fonts.semiBold()};
  font-size: ${({theme}) => theme.sizes.s16};
  color: ${({theme}) => theme.colors.mineShaft};
`;
export const Item = styled.Text`
  ${({theme}) => theme.fonts.regular()};
  font-size: ${({theme}) => theme.sizes.s16};
  color: ${({theme}) => theme.colors.blue};
`;
