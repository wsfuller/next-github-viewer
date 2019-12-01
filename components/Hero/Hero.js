import PropTypes from 'prop-types';

import { StyledHero, StyledHeroContent } from './Hero.styles';
import { Container, Grid } from '../Grid';
import Typography from '../Typography';
import { theme } from '../_theme';

const Hero = ({ dividerOpacity, title }) => (
  <StyledHero dividerOpacity={dividerOpacity}>
    <StyledHeroContent>
      <Typography variant="h2" color={theme.variables.colors.primary.light}>
        {title}
      </Typography>
    </StyledHeroContent>
  </StyledHero>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  dividerOpacity: PropTypes.number
};

Hero.defaultProps = {
  dividerOpacity: 0.6
};

export default Hero;
