import React from 'react';

import { Wrapper, Title } from './styled';

const HeaderTitle = ({ title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default HeaderTitle;