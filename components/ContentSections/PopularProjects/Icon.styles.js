import styled, { css } from 'styled-components';
import { pxToRem } from '../../_theme';

const StyledIcon = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: ${pxToRem(theme.variables.baseUnit * 8)};
    padding: ${pxToRem(theme.variables.baseUnit * 3.5)} ${pxToRem(theme.variables.baseUnit)} 0;
  `}
`;

export default StyledIcon;
