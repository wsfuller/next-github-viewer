import styled, { css } from 'styled-components';
import { pxToRem } from '../_theme';

const StyledIcon = styled()`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.variables.colors.grayScale.white};
    border-radius: ${theme.borderRadius.small};
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3),
      0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  `}
`;

export default StyledIcon;
