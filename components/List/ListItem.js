import React from 'react';
import PropTypes from 'prop-types';

import { StyledListItem } from './List.styles';

const ListItem = ({ children, ...props }) => {
  return <StyledListItem {...props}>{children}</StyledListItem>;
};

ListItem.propTypes = {
  striped: PropTypes.bool,
  hover: PropTypes.bool
};

ListItem.defaultProps = {
  striped: false,
  hover: false
};

export default ListItem;
