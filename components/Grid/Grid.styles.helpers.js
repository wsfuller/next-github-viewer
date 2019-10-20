import { css } from 'styled-components';
import { pxToRem, theme } from '../_theme';

const {
  variables: { baseUnit }
} = theme;

export const rows = rows => css`
  grid-template-rows: ${rows};
`;

export const gridGaps = (direction, gap) => {
  if (direction === 'column') {
    return css`
      column-gap: ${pxToRem(gap * baseUnit)};
    `;
  } else {
    return css`
      row-gap: ${pxToRem(gap * baseUnit)};
    `;
  }
};

export const gridBreakpoint = (breakpoint, template, size) => css`
  @media only screen and (min-width: ${breakpoint}px) {
    grid-template-columns: ${template[size].columns};
    ${template[size].rowGap && gridGaps('row', template[size].rowGap)}
    ${template[size].columnGap && gridGaps('column', template[size].columnGap)}
  }
`;
