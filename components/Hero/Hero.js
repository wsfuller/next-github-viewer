import PropTypes from 'prop-types';

import { StyledHero, StyledHeroContent } from './Hero.styles';
import { Container, Grid } from '../Grid';
import Typography from '../Typography';
import { theme } from '../_theme';

const Hero = ({ children, dividerOpacity, title }) => {
  let heroContent;
  if (title) {
    heroContent = (
      <StyledHeroContent>
        <Typography variant="h2" color={theme.variables.colors.primary.light}>
          {title}
        </Typography>
      </StyledHeroContent>
    );
  } else {
    heroContent = children;
  }
  return <StyledHero dividerOpacity={dividerOpacity}>{heroContent}</StyledHero>;
};

Hero.propTypes = {
  title: PropTypes.string,
  dividerOpacity: PropTypes.number,
  children: PropTypes.node
};

Hero.defaultProps = {
  children: null,
  title: '',
  dividerOpacity: 0.6
};

export default Hero;
