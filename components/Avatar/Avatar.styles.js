import styled, { css } from 'styled-components';
import { pxToRem } from '../_theme';

const StyledAvatar = styled.img`
  width: ${props => (props.attributes.width ? pxToRem(props.attributes.width) : pxToRem(50))};
  height: auto;
  display: inline-block;
  margin-right: ${pxToRem(8)};
  border-radius: ${props => props.theme.borderRadius.small};
`;

export default StyledAvatar;
