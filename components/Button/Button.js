import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import {styledButton, styledLink} from './Button.styles';


const Button = ({children, url, htmlAttributes, ...props }) => (

  <ButtonLink {...props} src={url} attributes={htmlAttributes} >{children}</ButtonLink>
);

Button.propTypes = {
  htmlAttributes: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  })
};

export default Button;
