import React, { Component, Fragment } from 'react';

import Link from 'next/link';
import Head from 'next/head';

import { Container, Row, GridItem, Grid } from '../components/Grid';
import SearchBar from '../components/Search/SearchBar';

const KitchenSink = () => (
  <Fragment>
    <Head>
      <title>Kitchen Sink</title>
    </Head>
    <Container>
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
        <GridItem gridColumnStart={2}>C1</GridItem>
        <GridItem>C2</GridItem>
        <GridItem>C3</GridItem>
        <GridItem>C4</GridItem>
        <GridItem>C5</GridItem>
        <GridItem>C6</GridItem>
        <GridItem>C7</GridItem>
        <GridItem>C8</GridItem>
        <GridItem>C9</GridItem>
        <GridItem>C10</GridItem>
        <GridItem>C11</GridItem>
        <GridItem>C12</GridItem>
      </Grid>
    </Container>
  </Fragment>
);

export default KitchenSink;
