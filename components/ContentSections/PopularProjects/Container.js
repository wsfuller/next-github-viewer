import PropTypes from 'prop-types';

import List from './List';

import Section from '../../Section';
import { Container, Row, GridItem, Grid } from '../../Grid';

const PopularProjectsContainer = ({ projects }) => (
  <Section>
    <Container>
      <Section.Header title="Popular Projects" />
      <List data={projects} />
    </Container>
  </Section>
);

PopularProjectsContainer.propTypes = {
  projects: PropTypes.array.isRequired
};

export default PopularProjectsContainer;
