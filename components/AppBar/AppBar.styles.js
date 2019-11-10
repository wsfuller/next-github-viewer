import styled, { css } from 'styled-components';
import { pxToRem } from '../_theme';

export const StyledAppBar = styled.div`
  width: 100%;
  height: ${pxToRem(64)};
  ${({
    theme: {
      variables: { colors }
    }
  }) => css`
    color: ${colors.primary.default};
    background: ${colors.grayScale.white};
  `};
  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14);
`;

const AppBarButton = {
  default: css`
    display: grid;
    width: ${pxToRem(40)};
    height: ${pxToRem(40)};
    font-size: ${pxToRem(24)};
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.variables.colors.primary.default};
    ${({ theme: { borderRadius, variables } }) => `
      transition: all ${variables.transitions.fast} ease-in-out;
      border-radius: ${borderRadius.small};
    `}

    &:focus {
      outline: 0;
    }
  `
};

export const StyledAppBarMenuButton = styled.button`
  ${AppBarButton.default};
  &:hover {
    color: ${({ theme }) => theme.variables.colors.grayScale.white};
    background: ${({ theme }) => theme.variables.colors.primary.dark};
  }
`;

export const StyledAppBarButton = styled.button`
  ${AppBarButton.default};
  &:hover {
    color: ${({ theme }) => theme.variables.colors.grayScale.white};
    background: ${({ theme }) => theme.variables.colors.primary.dark};
  }
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
