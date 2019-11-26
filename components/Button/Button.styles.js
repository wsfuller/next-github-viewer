import styled, { css } from 'styled-components';
import { pxToRem } from '../_theme';

const StyledButton = styled.button`
  background: linear-gradient(to left,${props => props.theme.variables.colors.primary.default} 50%,${props => props.theme.variables.colors.secondary.default});
  border-radius: ${props => props.theme.borderRadius.small};
  color: ${props => props.theme.variables.colors.grayScale.white};
  display: inline-block;
  font-size: ${pxToRem(16)};  
  height: auto;  
  width: ${props => (props.attributes.width ? pxToRem(props.attributes.width) : pxToRem(50))};
  margin-right: ${pxToRem(8)};
  `;

export default StyledButton;
