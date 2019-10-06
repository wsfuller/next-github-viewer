import React, { Fragment } from 'react';
import styled from 'styled-components';

const StyledH3 = styled.h3`
  font-size: 36px;
`;

const Paragraph = styled.p`
  color: ${({ theme }) => {
    return 'blue';
  }};
`;

const Stat = ({ title, figure }) => (
  <Fragment>
    <StyledH3>{title}</StyledH3>
    <Paragraph>{figure}</Paragraph>
  </Fragment>
);

export default Stat;
