import styled, { css } from 'styled-components';
import { rows, gridBreakpoint, gridGaps } from './Grid.styles.helpers';
import { pxToRem } from '../_theme';

export const StyledContainer = styled.div`
  width: 100%;
  display: grid;
  ${({ fullHeight }) =>
    css`
      ${fullHeight &&
        css`
          height: 100%;
        `}
    `}
  margin-left: auto;
  margin-right: auto;
  padding-left: ${({ theme }) => pxToRem(theme.variables.baseUnit * 2)};
  padding-right: ${({ theme }) => pxToRem(theme.variables.baseUnit * 2)};
  ${({ theme }) => css`
    @media only screen and (min-width: ${theme.variables.breakpoints.xLarge}px) {
      max-width: 1200px;
    }
  `};
`;

export const StyledGrid = styled.div`
  display: grid;
  ${({
    template,
    theme: {
      variables: { baseUnit, breakpoints }
    }
  }) => css`
    grid-template-columns: ${template.base.columns};
    ${template.base.rows && rows(template.base.rows)};
    ${template.base.rowGap &&
      css`
        row-gap: ${pxToRem(template.base.rowGap * baseUnit)};
      `}}
    ${template.base.columnGap &&
      css`
        column-gap: ${pxToRem(template.base.columnGap * baseUnit)};
      `}
    ${template.base.justifyItems &&
      css`
        justify-items: ${template.base.justifyItems};
      `}
    ${template.base.alignContent &&
      css`
        align-content: ${template.base.alignContent};
      `}
    ${template.base.alignItems &&
      css`
        align-items: ${template.base.alignItems};
      `}
    ${template.base.areas &&
      css`
        grid-template-areas: ${template.base.areas};
      `}
    ${'' /* Responsive Breakpoints */}
    ${template.small && gridBreakpoint(breakpoints.small, template, 'small')}
    ${template.medium && gridBreakpoint(breakpoints.medium, template, 'medium')}
    ${template.large && gridBreakpoint(breakpoints.large, template, 'large')}
    ${template.xLarge && gridBreakpoint(breakpoints.xLarge, template, 'xLarge')};
  `};
`;

export const StyledGridItem = styled.div`
  display: grid;
  ${({ demo, gridArea }) => css`
    ${!!demo &&
      css`
        background: blue;
        color: white;
      `}
    ${gridArea &&
      css`
        grid-area: ${gridArea};
      `}
  `}
`;
