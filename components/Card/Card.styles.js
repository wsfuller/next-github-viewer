import styled, { css } from 'styled-components';
import { pxToRem } from '../_theme';

import Typography from '../Typography';

export const StyledCard = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.variables.colors.grayScale.white};
    border-radius: ${theme.borderRadius.small};
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3),
      0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  `}
`;

export const StyledCardContent = styled.div`
  ${({ theme }) => css`
    padding: ${pxToRem(theme.variables.baseUnit * 2)};
  `}
`;

export const StyledCardTitle = styled(Typography)`
  ${({ theme }) => css`
    margin-bottom: ${pxToRem(theme.variables.baseUnit * 2)};
  `}
`;
