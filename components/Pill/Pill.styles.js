import styled, { css } from 'styled-components';
import { pxToRem, theme } from '../_theme';

export const StyledPill = styled.div`
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

export const StyledIcon = styled.div`
  ${({ theme, iconPosition }) => css`
    display: inline-block;
    justify-content: center;
    position: relative;
    order: ${iconPosition === 'left' ? 1 : 2};
    ${iconPosition === 'left'
      ? `margin-right: ${pxToRem(theme.variables.baseUnit)}`
      : `margin-right: ${pxToRem(theme.variables.baseUnit)}`};
    font-size: ${pxToRem(theme.variables.baseUnit * 2.5)};
  `}
`;

export const StyledValue = styled.div`
  ${({ iconPosition }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    order: ${iconPosition === 'left' ? 2 : 1};
  `}
`;

export const StyledIconValue = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export default StyledPill;
