import styled, { css } from 'styled-components';
import { pxToRem, theme } from '../_theme';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const heroStyles = {
  default: css`
    height: 35vh;
    color: ${theme.variables.colors.grayScale.white};
    background: ${theme.variables.colors.primary.default};
    background: linear-gradient(
      to right,
      ${theme.variables.colors.secondary.default},
      ${theme.variables.colors.primary.default}
    );

    @media screen and (min-width: ${theme.variables.breakpoints.medium}px) {
      height: ${pxToRem(250)};
    }

    @media screen and (min-width: ${theme.variables.breakpoints.xLarge}px) {
      height: ${pxToRem(300)};
    }

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: ${theme.variables.zIndex.one};
    }
  `
};

export const StyledHeroCarousel = styled(AutoplaySlider)`
  ${heroStyles.default};
  ${({ theme }) => css`
    position: relative;
  `}
`;

export const StyledHero = styled.div`
  ${heroStyles.default};
  ${({ theme, dividerOpacity }) => css`
    position: relative;
    margin-bottom: ${pxToRem(theme.variables.baseUnit * 3)};
    form {
      position: absolute;
      top: 40%;
      right: 0;
      left: 0;
      margin: auto;
      text-align: center;
      z-index: 100;
    }

    &::after {
      background: rgba(0, 0, 0, ${dividerOpacity});
    }
  `}
`;

export const StyledHeroContent = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  padding: 0 ${pxToRem(theme.variables.baseUnit * 2)};
  z-index: ${theme.variables.zIndex.two};
`;
