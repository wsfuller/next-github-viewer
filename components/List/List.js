import React from 'react';
import styled from 'styled-components';

import { StyledList } from './List.styles';

const List = ({ children }) => {
  return <StyledList>{children}</StyledList>;
};

export default List;
