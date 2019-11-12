import styled, { css } from 'styled-components';
import { pxToRem } from '../_theme';

export const StyledAppBar = styled.div`
  ${({
    theme: {
      variables: { colors },
      appBar
    }
  }) => css`
    height: ${appBar.default};
    color: ${colors.primary.default};
    background: ${colors.grayScale.white};
  `};
  width: 100%;
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

export const StyledAppBarMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  visibility: ${props => (props.showMenu ? 'visible' : 'hidden')};
  opacity: ${props => (props.showMenu ? '1' : '0')};
  transition: visibility 0.25s, opacity 0.25s ease-in-out;
  background: rgba(0, 0, 0, 0.75);
  overflow-y: hidden;
`;

export const StyledAppBarMenu = styled.div`
  ${({ theme: { variables } }) => `
      background: ${variables.colors.grayScale.white}
      transition: transform ${variables.transitions.fast} ease-in-out
    `}
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: ${pxToRem(280)};
  overflow: hidden;
  z-index: 10000;
  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14),
    0px 6px 30px 5px rgba(0, 0, 0, 0.12);
  transform: ${props => (props.showMenu ? 'translateX(0%)' : 'translateX(-100%)')};
`;

export const StyledMenuHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 50px;
  justify-items: center;
  align-items: center;
  ${({
    theme: {
      variables: { colors },
      appBar
    }
  }) => css`
    height: ${appBar.default};
    border-bottom: ${pxToRem(1)} solid ${colors.grayScale.grayOne};
  `};
`;
