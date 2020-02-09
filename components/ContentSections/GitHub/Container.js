import PropTypes from 'prop-types';

import Section from '../../Section';
import { Container, Row, GridItem, Grid } from '../../Grid';

const PopularProjectsContainer = ({ projects }) => (
  <Section>
    <Container>
      <Section.Header title="Project Code" />
      Wanting to see the code? Checkout the GitHub Repo to find out more.
    </Container>
  </Section>
);

PopularProjectsContainer.propTypes = {
  projects: PropTypes.array.isRequired
};

export default PopularProjectsContainer;
