import React from 'react';

import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import theme from 'config/theme';
import icoMoonConfig from '../../assets/fonts/selection.json';

import { PlainWrapper, TouchableWrapper } from './styled';

export { default as IconNames } from './iconNames';

const IcomoonIcon = createIconSetFromIcoMoon(icoMoonConfig);

const Icon = ({
  name,
  className,
  size = 24,
  color = theme.colors.blue,
  onPress,
  left,
  right,
  enabled = true
}) => {
  const Wrapper = onPress ? TouchableWrapper : PlainWrapper;
  const active = enabled?enabled:true
  return (
    <Wrapper
      className={className}
      onPress={() => onPress()}
      left={left}
      right={right}
      enabled={active}>
      <IcomoonIcon name={name} size={size} color={color} />
    </Wrapper>
  );
};

export default Icon;
