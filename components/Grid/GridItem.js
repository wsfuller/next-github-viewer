import React from 'react';
import PropTypes from 'prop-types';

import { StyledGridItem } from './Grid.styles';

const GridItem = ({ children, demo, gridArea }) => {
  return (
    <StyledGridItem demo={demo} gridArea={gridArea}>
      {children}
    </StyledGridItem>
  );
};

GridItem.propTypes = {
  demo: PropTypes.bool,
  gridArea: PropTypes.string
};

GridItem.defaultProps = {
  demo: false,
  gridArea: ''
};

export default GridItem;
