import styled, { css } from 'styled-components';
import { pxToRem, theme } from '../_theme';
import Link from 'next/link';

const buttonStyles = {
  default: css`
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
    box-shadow: 0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);
  
    &:hover {
      transform: translateY(-1px);
    }
  `
};

export const StyledButton = styled.button`
  ${buttonStyles.default};
  // ${({}) => css`
  //   width: ${attributes.width ? pxToRem(attributes.width) : pxToRem(50)};
  // `}
`;

export const StyledButtonLink = styled(Link)`
  ${buttonStyles.default};
`;
