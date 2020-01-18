import styled, { css } from 'styled-components';
import { pxToRem, theme } from '../_theme';

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
    text-align: center;
    padding: 10px 0;
    margin-bottom: 5px;
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);

    &:hover {
      transform: translateY(-1px);
    }
  `
};

export const StyledButton = styled.button`
  ${buttonStyles.default};
`;

export const StyledButtonLink = styled.a`
  ${buttonStyles.default};
  /* any extra classes to make it behave like the button */
`;
