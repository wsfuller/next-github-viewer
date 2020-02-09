import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { StyledButton, StyledButtonLink, StyledButtonExternalLink } from './Button.styles';

const Button = ({ children, text, variant, href, type }) => {
  if (variant === 'link') {
    return (
      <Link href={href} passHref>
        <StyledButtonLink href={href}>Styled button link</StyledButtonLink>
      </Link>
    );
  } else if (variant === 'external-link') {
    return <StyledButtonLink href={href}>{text}</StyledButtonLink>;
  } else {
    return <StyledButton type={type}>{text}</StyledButton>;
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
