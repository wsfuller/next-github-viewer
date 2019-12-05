import styled, { css } from 'styled-components';
import { pxToRem } from '../_theme';
import Link from 'next/link';

const buttonStyles = {
  default: css`
    display: inline-block;
    height: auto;
    margin-right: ${pxToRem(8)};
    /* ...all the styles for both buttons go in here because they are the same thing */
    &:hover {
      /* hover styles here */
    }
  `
};

export const StyledButton = styled.button`
  ${buttonStyles.default};
  /* ${({ theme }) => css`
    background: linear-gradient(
      to left,
      ${theme.variables.colors.primary.default} 50%,
      ${theme.variables.colors.secondary.default}
    );
    border-radius: ${theme.borderRadius.small};
    color: ${theme.variables.colors.grayScale.white}; 
    width: ${attributes.width ? pxToRem(attributes.width) : pxToRem(50)}; */

  /* `} */
`;

export const StyledButtonLink = styled.a`
  ${buttonStyles.default};
  /* ${({ theme }) => css`
    color: ${theme.variables.colors.primary.dark};
    &:hover {
      color: ${theme.variables.colors.primary.light};
    }
  `} */
`;
