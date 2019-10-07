import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledSubtitle,
  StyledBody
} from './Typography.styles';

const variantMapping = {
  h1: StyledH1,
  h2: StyledH2,
  h3: StyledH3,
  h4: StyledH4,
  subtitle1: StyledSubtitle,
  body1: StyledBody
};

const Typography = ({ children, ...props }) => {
  const Component = variantMapping[props.variant] ? variantMapping[props.variant] : 'span';

  return <Component {...props}>{children}</Component>;
};

Typography.propTypes = {
  variant: PropTypes.string.isRequired,
  bold: PropTypes.bool,
  transform: PropTypes.string,
  small: PropTypes.bool
};

Typography.defaultProps = {
  bold: null,
  transform: '',
  small: null
};

export default Typography;
