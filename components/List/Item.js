import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { StyledListItem } from './List.styles';

const ListItem = ({ children, ...props }) => {
  return <StyledListItem {...props}>{children}</StyledListItem>;
};

ListItem.propTypes = {
  striped: PropTypes.bool
};

ListItem.defaultProps = {
  striped: false
};

export default ListItem;