import React from 'react';
import styled from 'styled-components';

import Link from 'next/link';

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export default ({ children, ...props }) => (
  <Link {...props}>
    <StyledLink>{children}</StyledLink>
  </Link>
);
