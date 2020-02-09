import styled, { css } from 'styled-components';
import { pxToRem } from '../_theme';

export const StyledSection = styled.section`
  ${({ theme }) => css`
    padding: ${pxToRem(theme.variables.baseUnit * 2)} 0;

    @media screen and (min-width: ${theme.variables.breakpoints.large}px) {
      padding: ${pxToRem(theme.variables.baseUnit * 4)} 0;
    }
  `}
`;

export const StyledSectionHeader = styled.h2`
  ${({ theme }) => css`
    display: inline-grid;
    grid-template-columns: min-content auto;
    align-items: center;
    white-space: nowrap;
    color: ${theme.variables.colors.secondary.light};

    &::after {
      content: '';
      margin-left: ${pxToRem(16)};
      border-bottom: ${pxToRem(2)} solid ${theme.variables.colors.grayScale.grayTwo};
    }
  `}
`;
