import { css } from 'styled-components';
import { pxToRem, theme } from '../_theme';

const {
  variables: { baseUnit }
} = theme;

export const rows = rows => css`
  grid-template-rows: ${rows};
`;

export const gridBreakpoint = (breakpoint, template, size) => css`
  @media only screen and (min-width: ${breakpoint}px) {
    grid-template-columns: ${template[size].columns};
    ${template[size].rowGap &&
      css`
        row-gap: ${pxToRem(template[size].rowGap * baseUnit)};
      `}
    ${template[size].columnGap &&
      css`
        column-gap: ${pxToRem(template[size].columnGap * baseUnit)};
      `}
    ${template[size].justifyItems &&
      css`
        justify-items: ${template[size].justifyItems};
      `}
  }
`;
