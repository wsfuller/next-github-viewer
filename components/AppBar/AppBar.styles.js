import styled, { css } from 'styled-components';
import { pxToRem } from '../_theme';

export const StyledAppBar = styled.div`
  width: 100%;
  height: ${pxToRem(45)};
  ${({
    theme: {
      variables: { colors }
    }
  }) => css`
    color: ${colors.grayScale.white};
    background: ${colors.primary.default};
  `};
`;

const AppBarMenuStyles = {
  default: css`
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    width: ${pxToRem(280)};
    overflow: hidden;
    ${({ theme: { variables } }) => `
      background: ${variables.colors.primary.dark}
      transition: transform ${variables.transitions.fast} ease-in-out
    `}
    z-index: 10000;
  `
};

export const StyledAppBarMenu = styled.div`
  ${AppBarMenuStyles.default};
  transform: ${props => (props.showMenu ? 'translateX(0%)' : 'translateX(-100%)')};
`;
