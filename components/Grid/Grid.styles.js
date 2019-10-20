import styled, { css } from 'styled-components';
import { rows, gridBreakpoint, gridGaps } from './Grid.styles.helpers';
import { pxToRem } from '../_theme';

export const StyledContainer = styled.div`
  width: 100%;
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
      variables: { breakpoints }
    }
  }) => css`
    grid-template-columns: ${template.base.columns};
    ${template.base.rows && rows(template.base.rows)};
    ${template.base.rowGap && gridGaps('row', template.base.rowGap)}
    ${template.base.columnGap && gridGaps('column', template.base.columnGap)}
    ${'' /* Responsive Breakpoints */}
    ${template.small && gridBreakpoint(breakpoints.small, template, 'small')}
    ${template.medium && gridBreakpoint(breakpoints.medium, template, 'medium')}
    ${template.large && gridBreakpoint(breakpoints.large, template, 'large')}
    ${template.xLarge && gridBreakpoint(breakpoints.xLarge, template, 'xLarge')};
  `};
`;

export const StyledGridItem = styled.div`
  display: grid;
  background: blue;
  color: white;
`;
