import styled, { css } from 'styled-components';
import { pxToRem } from '../_theme';


const buttonStyles = {
  default: css `
    background: linear-gradient(
      to left,
      ${theme.variables.colors.primary.default} 50%,
      ${theme.variables.colors.secondary.default}
    );
    border-radius: ${theme.borderRadius.small};
    color: ${theme.variables.colors.grayScale.white};
    display: inline-block;
    height: auto;
    margin-right: ${pxToRem(8)};
    width: ${attributes.width ? pxToRem(attributes.width) : pxToRem(50)};
  `
};


export default buttonStyles;
