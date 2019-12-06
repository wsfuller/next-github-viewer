import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { StyledButton, StyledButtonLink } from './Button.styles';
import { prototype } from 'events';

const Button = ({ text, variant, href, submit }) => {
  if (variant === 'link') {
    return <StyledButtonLink href={href}>{text}</StyledButtonLink>;
  } else {
    return <StyledButton type={submit} >{text}</StyledButton>;
  }
};
Button.propTypes = {
  htmlAttributes: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number
  }),
  href: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string.isRequired

};


export default Button;
