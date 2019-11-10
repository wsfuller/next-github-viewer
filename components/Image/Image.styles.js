import styled, { css } from 'styled-components';
import { pxToRem } from '../_theme';

const StyledImage = styled.img`
  width: 100%;
  ${({ maxWidth }) =>
    maxWidth &&
    css`
        max-width: ${pxToRem(maxWidth)};
      }
    `}
  height: auto;
  display: inline-block;
  border-radius: ${props => props.theme.borderRadius.small};
`;

export default StyledImage;
