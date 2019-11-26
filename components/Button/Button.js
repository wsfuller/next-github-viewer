import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import StyledButton from './Button.styles';

const Button = ({children, url, htmlAttributes }) => (
  <StyledButton src={url} attributes={htmlAttributes} >{children}</StyledButton>
);

Button.propTypes = {
  source: PropTypes.string.isRequired,
  htmlAttributes: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  })
};

export default Button;
