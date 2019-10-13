import styled, { css } from 'styled-components';
import { pxToRem } from '../_theme';

export const StyledContainer = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${({ theme }) => pxToRem(theme.variables.baseUnit * 2)};
  padding-right: ${({ theme }) => pxToRem(theme.variables.baseUnit * 2)};
  ${({ theme }) => css`
    @media only screen and (min-width: ${theme.variables.breakpoints.xLarge}px) {
      max-width: 1200px;
    }
  `};
`;
