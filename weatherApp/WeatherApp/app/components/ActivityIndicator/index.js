import { FetchingIndicator } from './styled';
import React from 'react';
const Fetching = ({ animating, color }) => {
  return <FetchingIndicator size="large" animating={animating} color={color} />;
};
export default Fetching;
