import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StyledAvatar from './Avatar.styles';

const Avatar = ({ source, htmlAttributes }) => (
  <StyledAvatar src={source} alt={htmlAttributes.alt} attributes={htmlAttributes} />
);

Avatar.propTypes = {
  source: PropTypes.string.isRequired,
  htmlAttributes: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number
  })
};

export default Avatar;
