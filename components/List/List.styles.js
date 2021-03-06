import styled, { css } from 'styled-components';
import { pxToRem } from '../_theme';

const StyledList = styled.ul`
  padding: 0;
  list-style: none;
`;

const StyledListItem = styled.li`
  display: grid;
  align-items: center;
  text-decoration: none;
  padding: ${pxToRem(8)};
  transition: ${({ theme }) => `all ${theme.variables.transitions.default} ease-in-out`};

  ${({ striped, theme }) =>
    striped &&
    `
    :nth-child(odd) {
      background: ${theme.variables.colors.grayScale.grayOne};
    }
  `}

  ${({ hover, theme }) =>
    hover &&
    css`
      :hover {
        background: ${({ theme }) => theme.variables.colors.primary.light};
      }
    `}

  a {
    text-decoration: none;
  }

  a p {
    margin-bottom: 0;
  }
`;

export { StyledList, StyledListItem };
