import React, { Fragment } from 'react';

import Typography from '../Typography';
import { Container, GridItem, Grid } from '../Grid';

const GridExample = () => (
  <Container>
    {/* TODO: Needs to be replaced with Section Compnent */}
    <Typography variant="h1">Grid System</Typography>
    <Grid
      template={{
        base: {
          columns: 'repeat(4, 1fr)',
          rows: '30px 60px 120px',
          columnGap: 1,
          rowGap: 1
        },
        small: {
          columns: 'repeat(4, 1fr)',
          columnGap: 2,
          rowGap: 2
        },
        medium: {
          columns: 'repeat(4, 1fr)',
          columnGap: 4,
          rowGap: 4
        },
        large: {
          columns: 'repeat(4, 1fr)',
          columnGap: 8,
          rowGap: 8
        },
        xLarge: {
          columns: 'repeat(4, 1fr)',
          columnGap: 16,
          rowGap: 16
        }
      }}
    >
      <GridItem gridColumnStart={2} demo>
        C1
      </GridItem>
      <GridItem demo>C2</GridItem>
      <GridItem demo>C3</GridItem>
      <GridItem demo>C4</GridItem>
      <GridItem demo>C5</GridItem>
      <GridItem demo>C6</GridItem>
      <GridItem demo>C7</GridItem>
      <GridItem demo>C8</GridItem>
      <GridItem demo>C9</GridItem>
      <GridItem demo>C10</GridItem>
      <GridItem demo>C11</GridItem>
      <GridItem demo>C12</GridItem>
    </Grid>
  </Container>
);

export default GridExample;
