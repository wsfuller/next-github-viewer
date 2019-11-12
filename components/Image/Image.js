import React from 'react';
import PropTypes from 'prop-types';

import StyledImage from './Image.styles';

const Image = ({ source, htmlAttributes, maxWidth }) => (
  <StyledImage src={source} alt={htmlAttributes.alt} maxWidth={maxWidth} />
);

Image.propTypes = {
  source: PropTypes.string.isRequired,
  htmlAttributes: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number
  })
};

Image.defaultProps = {
  maxWidth: null
};

export default Image;
