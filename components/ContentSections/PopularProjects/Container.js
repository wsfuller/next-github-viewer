import PropTypes from 'prop-types';

import Section from '../../Section';
import { Container, Row, GridItem, Grid } from '../../Grid';
import List from './List';

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
