import React from 'react';

import {Wrapper, Title} from './styled';

const HeaderTitle = ({title, left, right}) => {
  return (
    <Wrapper left={left} right={right}>
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default HeaderTitle;
