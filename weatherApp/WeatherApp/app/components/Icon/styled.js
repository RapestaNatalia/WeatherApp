import styled from 'styled-components';

export const TouchableWrapper = styled.TouchableOpacity`
  ${({ left }) => left && `margin-left: ${left}px;`}
  ${({ right }) =>
    right && `margin-right: ${right}px;`}
  justify-content: center;
  align-items: center;
`;

export const PlainWrapper = styled.View`
  ${({ left }) => left && `margin-left: ${left}px;`}
  ${({ right }) =>
    right && `margin-right: ${right}px;`}
  justify-content: center;
  align-items: center;
`;
