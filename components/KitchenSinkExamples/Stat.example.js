import React from 'react';

import Stat from '../Stat';
import Typography from '../Typography';
import { Container, Grid, GridItem } from '../Grid';

const StatExample = () => (
  <Container>
    <Typography variant="h1">Stats</Typography>
    <Grid
      template={{
        base: {
          columns: 'repeat(1, 1fr)'
        },
        small: {
          columns: 'repeat(2, 1fr)'
        },
        medium: {
          columns: 'repeat(4, 1fr)'
        }
      }}
    >
      <GridItem>
        <Stat title="Stat#1" figure="10k" />
      </GridItem>
      <GridItem>
        <Stat title="Stat#2" figure="100k" />
      </GridItem>
      <GridItem>
        <Stat title="Stat#3" figure="400,000" />
      </GridItem>
      <GridItem>
        <Stat title="Stat#4" figure="4,000,000" />
      </GridItem>
    </Grid>
  </Container>
);

export default StatExample;
