import { ButtonContainer, ButtonText } from './styled';
import React from 'react';

const Button = ({ onPress, primary, title }) => (
  <ButtonContainer onPress={() => onPress()} primary={primary}>
    <ButtonText primary={primary}>{title}</ButtonText>
  </ButtonContainer>
);

export default Button;
