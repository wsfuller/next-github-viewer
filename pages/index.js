import React, { Component, Fragment } from 'react';

import Link from 'next/link';
import Head from 'next/head';

import { Container, Row, GridItem, Grid } from '../components/Grid';
import SearchBar from '../components/Search/SearchBar';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
  }

  render() {
    const { stars } = this.props;
    return (
      <Fragment>
        <Head>
          <title>Home</title>
        </Head>

        <Link href="/profile">
          <a>Profile page</a>
        </Link>

        <SearchBar />
        <div>Next Stars: {stars}</div>
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
  }
}

Home.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js');
  const json = await res.json();
  return { stars: json.stargazers_count };
};

export default Home;
