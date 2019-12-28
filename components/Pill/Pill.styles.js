import styled, { css } from 'styled-components';
import { pxToRem, theme } from '../_theme';

const StyledPill = styled.div`
  ${({ filled, theme }) => css`
    display: inline-flex;
    justify-content: center;
    position: relative;
    padding: ${pxToRem(theme.variables.baseUnit)};
    border: ${pxToRem(1)} solid ${theme.variables.colors.primary.default};
    border-radius: ${theme.borderRadius.large};
    margin-bottom: ${pxToRem(theme.variables.baseUnit * 3)};
    ${filled
      ? css`
          color: ${theme.variables.colors.grayScale.white};
          background: ${theme.variables.colors.primary.default};
        `
      : css`
          color: ${theme.variables.colors.primary.dark};
        `}
  `}
`;

export default StyledPill;
