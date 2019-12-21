import styled, { css } from 'styled-components';
import { pxToRem } from '../_theme';

const StyledFooter = styled.footer`
  ${({ theme }) => css`
    padding: ${pxToRem(theme.variables.baseUnit * 4)} 0;
    color: ${theme.variables.colors.grayScale.white};
    background: ${theme.variables.colors.primary.dark};

    @media only screen and (min-width: ${theme.variables.breakpoints.large}px) {
      padding: ${pxToRem(theme.variables.baseUnit * 8)} 0;
    }
  `}
`;

export default StyledFooter;
