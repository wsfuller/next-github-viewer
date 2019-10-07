import styled, { css } from 'styled-components';
import { theme } from '../_theme';

const { variables } = theme;

const headerStyles = {
  default: css`
    color: ${variables.colors.primary.dark};
    font-family: ${variables.typography.headers.family};
    font-weight: ${variables.typography.headers.weights.bold};
  `
};

const bodyStyles = {
  default: css`
    color: ${variables.colors.grayScale.grayThree};
    font-family: ${variables.typography.body.family};
  `
};

const typographyStyles = {
  h1: css`
    ${headerStyles.default};
    font-size: ${variables.typography.headers.h2.size};
    line-height: ${variables.typography.headers.h1.lineHeight};
    @media only screen and (min-width: ${variables.breakpoints.medium}px) {
      font-size: ${variables.typography.headers.h1.size};
    }
  `,
  h2: css`
    ${headerStyles.default};
    font-size: ${variables.typography.headers.h3.size};
    line-height: ${variables.typography.headers.h2.lineHeight};
    @media only screen and (min-width: ${variables.breakpoints.medium}px) {
      font-size: ${variables.typography.headers.h2.size};
    }
  `,
  h3: css`
    ${headerStyles.default};
    font-size: ${variables.typography.headers.h3.size};
    line-height: ${variables.typography.headers.h3.lineHeight};
  `,
  h4: css`
    ${headerStyles.default};
    font-size: ${variables.typography.headers.h4.size};
    line-height: ${variables.typography.headers.h4.lineHeight};
  `,
  subtitle: css`
      ${bodyStyles.default}
      font-size: ${variables.typography.body.size.subtitle};
      line-height: ${variables.typography.body.lineHeight.subtitle};
    `,
  p: css`
    ${bodyStyles.default};
  `
};

export const StyledH1 = styled.h1`
  ${typographyStyles.h1};
`;

export const StyledH2 = styled.h2`
  ${typographyStyles.h2};
`;

export const StyledH3 = styled.h3`
  ${typographyStyles.h3};
`;

export const StyledH4 = styled.h4`
  ${typographyStyles.h4};
`;

export const StyledSubtitle = styled.p`
  ${typographyStyles.subtitle};
  font-weight: ${variables.typography.body.weights.default};
`;

export const StyledBody = styled.p`
  ${typographyStyles.p};
  font-size: ${props =>
    props.small ? variables.typography.body.size.small : variables.typography.body.size.default};
  font-weight: ${props =>
    props.bold
      ? variables.typography.body.weights.bold
      : variables.typography.body.weights.default};
  line-height: ${props =>
    props.small
      ? variables.typography.body.lineHeight.small
      : variables.typography.body.lineHeight.default};
  text-transform: ${props => props.transform};
`;
