import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { StyledButton, StyledButtonLink } from './Button.styles';

const Button = ({ text, variant }) => {
  if (variant === 'link') {
    return <StyledLinkButton href={href}>{text}</StyledLinkButton>;
  } else {
    return <StyledButton type={submit}>{text}</StyledButton>;
  }
};
Button.propTypes = {
  htmlAttributes: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number
  })
};

export default Button;
