import React, { Component, Fragment } from 'react';

import Link from 'next/link';
import Head from 'next/head';

import {
  TypographyExample,
  GridExample,
  AvatarExample,
  ListExample,
  StatExample,
  ButtonExample
} from '../components/KitchenSinkExamples';

import Typography from '../components/Typography';
import SearchBar from '../components/Search/SearchBar';
import { Container, Row, GridItem, Grid } from '../components/Grid';

const KitchenSink = () => (
  <Fragment>
    <Head>
      <title>Kitchen Sink</title>
    </Head>
    <Container>
      <Typography variant="h1">Kitchen Sink</Typography>
      <Typography variant="body1">
        The Kitchen Sink contains all components for this application
      </Typography>
    </Container>
    <TypographyExample />
    <GridExample />
    <AvatarExample />
    <ListExample />
    <StatExample />
    <ButtonExample />
  </Fragment>
);

export default KitchenSink;
