import React from 'react';

import { StyledGrid } from './Grid.styles';

const Grid = ({ children, template }) => {
  return <StyledGrid template={template}>{children}</StyledGrid>;
};

export default Grid;
