import styled, { css } from 'styled-components';
import { pxToRem } from '../_theme';

const StyledSectionHeader = styled.h2`
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

export default StyledSectionHeader;
