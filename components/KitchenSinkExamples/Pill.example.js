import React from 'react';

import { Container } from '../Grid';
import Typography from '../Typography';
import Pill from '../Pill';

const PillExample = () => (
  <Container>
    <Typography variant="h1">Pills</Typography>
    <Pill value="Pill default" />
    <Pill value="Pill w/ fill" filled />
  </Container>
);

export default PillExample;
