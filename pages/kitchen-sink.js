import React, { Component, Fragment } from 'react';

import Link from 'next/link';
import Head from 'next/head';

import { TypographyExample, GridExample } from '../components/KitchenSinkExamples';

import Avatar from '../components/Avatar';
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

    <Container>
      <Grid
        template={{
          base: {
            areas: '"header header header header" "main main.sidebar"'
          }
        }}
      >
        <GridItem gridArea="header">
          <Typography variant="h1">Avatar</Typography>
        </GridItem>
        <GridItem gridArea="main">
          <Grid
            template={{
              base: {
                columns: 'repeat(4, 1fr)',
                rows: 'auto',
                columnGap: 1,
                rowGap: 1
              }
            }}
          >
            <Avatar source="http://placehold.it/300x300" htmlAttributes={{ alt: 'placeholder' }} />
            <Avatar source="http://placehold.it/300x300" htmlAttributes={{ alt: 'placeholder' }} />
            <Avatar source="http://placehold.it/300x300" htmlAttributes={{ alt: 'placeholder' }} />
            <Avatar source="http://placehold.it/300x300" htmlAttributes={{ alt: 'placeholder' }} />
            <Avatar source="http://placehold.it/300x300" htmlAttributes={{ alt: 'placeholder' }} />
            <Avatar source="http://placehold.it/300x300" htmlAttributes={{ alt: 'placeholder' }} />
            <Avatar source="http://placehold.it/300x300" htmlAttributes={{ alt: 'placeholder' }} />
            <Avatar source="http://placehold.it/300x300" htmlAttributes={{ alt: 'placeholder' }} />
            <Avatar source="http://placehold.it/300x300" htmlAttributes={{ alt: 'placeholder' }} />
            <Avatar source="http://placehold.it/300x300" htmlAttributes={{ alt: 'placeholder' }} />
            <Avatar source="http://placehold.it/300x300" htmlAttributes={{ alt: 'placeholder' }} />
            <Avatar source="http://placehold.it/300x300" htmlAttributes={{ alt: 'placeholder' }} />
          </Grid>
        </GridItem>
        <GridItem gridArea="sidebar">Sidebar</GridItem>
      </Grid>
    </Container>
  </Fragment>
);

export default KitchenSink;
