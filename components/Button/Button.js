import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import StyledButton from './Button.styles';

const Button = ({children, url, htmlAttributes }) => (
  <StyledButton src={url} attributes={htmlAttributes} >{children}</StyledButton>
);

Button.propTypes = {
  htmlAttributes: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  })
};

export default Button;
