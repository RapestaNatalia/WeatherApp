import React from 'react';
import { Listings, Wrapper } from './styled';

const FlatList = ({ data, renderItem }) => {
  return (
    <Wrapper>
      <Listings
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </Wrapper>
  );
};
export default FlatList;
