import PropTypes from 'prop-types';

import { StyledHeroSearch } from './Hero.styles';
import { Container } from '../Grid';

const Hero = ({ title }) => (
  <StyledHeroSearch>
    <Container>
      <h1>{title}</h1>
    </Container>
  </StyledHeroSearch>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired
};

export default Hero;
