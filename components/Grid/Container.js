import React from 'react';
import PropTypes from 'prop-types';

import { StyledContainer } from './Grid.styles';

const Container = ({ children, fullHeight }) => {
  return <StyledContainer fullHeight={fullHeight}>{children}</StyledContainer>;
};

Container.propTypes = {
  fullHeight: PropTypes.bool
};

Container.defaultProps = {
  fullHeight: false
};

export default Container;
