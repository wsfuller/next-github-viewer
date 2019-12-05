import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import styledButton from './Button.styles';

const Button = ({children, url, htmlAttributes }) => (
  <styledButton src={url} attributes={htmlAttributes} >{children}</styledButton>
);

Button.propTypes = {
  htmlAttributes: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  })
};

export default Button;
