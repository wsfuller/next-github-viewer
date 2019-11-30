import styled, { css } from 'styled-components';
import { pxToRem, theme } from '../_theme';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const heroStyles = {
  default: css`
    height: 35vh;

    @media screen and (min-width: ${theme.variables.breakpoints.medium}px) {
      height: ${pxToRem(500)};
    }

    @media screen and (min-width: ${theme.variables.breakpoints.xLarge}px) {
      height: ${pxToRem(700)};
    }
  `
};

export const StyledHeroCarousel = styled(AutoplaySlider)`
  ${heroStyles.default};
  ${({ theme }) => css`
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 10;
      background: rgba(0, 0, 0, 0.4);
    }
  `}
`;

export const StyledHeroSearch = styled.div`
  ${heroStyles.default};
  ${({ theme }) => css`
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
  `}
`;

export const StyledHero = styled.div``;
