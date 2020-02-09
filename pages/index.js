import React, { Component, Fragment } from 'react';

import Head from 'next/head';

import { Container, Row, GridItem, Grid } from '../components/Grid';
import { Hero, HeroCarousel } from '../components/Hero';
import SearchBar from '../components/Search/SearchBar';

import popularProjects from '../common/popularProjects';

import PopularProjects from '../components/ContentSections/PopularProjects';
import GitHub from '../components/ContentSections/GitHub';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
  }

  render() {
    const { projects } = this.props;

    return (
      <Fragment>
        <Head>
          <title>Home</title>
        </Head>
        <Hero dividerOpacity={0.4}>
          <SearchBar />
          <HeroCarousel />
        </Hero>

        <PopularProjects projects={projects} />
        <GitHub />

        <section>
          <Container>
            {/* <SectionHeader title="Developed by" /> */}
            {/* https://stripe.com/ lifting cards section*/}
          </Container>
        </section>
      </Fragment>
    );
  }
}

Home.getInitialProps = async ({ req }) => {
  // const popularProjects = await getPopularProjects();
  return { projects: popularProjects };
  // return { projects };
};

export default Home;
