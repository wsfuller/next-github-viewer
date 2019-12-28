import React, { Component, Fragment } from 'react';

import Head from 'next/head';

import { Container, Row, GridItem, Grid } from '../components/Grid';
import { Hero, HeroCarousel } from '../components/Hero';
import SearchBar from '../components/Search/SearchBar';
import Section from '../components/Section';
import Pill from '../components/Pill';

import getPopularProjects from '../common/getPopularProjects';
import popularProjects from '../common/popularProjects';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
  }

  render() {
    console.log('index page props: ', this.props);
    return (
      <Fragment>
        <Head>
          <title>Home</title>
        </Head>
        <Hero dividerOpacity={0.4}>
          <SearchBar />
          <HeroCarousel />
        </Hero>

        <Section>
          <Container>
            <Section.Header title="Popular Projects" />
            <Pill value="3,569" />
            VS Code | Bootstrap | freeCodeCamp | React
            {/* https://www.freecodecamp.org/news/the-10-github-repos-people-mention-the-most-in-freecodecamps-main-chat-room-189750600fa4/ */}
          </Container>
        </Section>
        <section>
          <Container>
            {/* <SectionHeader title="Developed by" /> */}
            {/* https://stripe.com/ lifting cards section*/}
          </Container>
        </section>
        <section>
          <Container>
            {/* <SectionHeader title="GitHub" /> */}
            {/* https://stripe.com/ right below lifting card section*/}
          </Container>
        </section>
      </Fragment>
    );
  }
}

Home.getInitialProps = async ({ req }) => {
  // const popularProjects = await getPopularProjects();
  // return { projects: popularProjects };
  return { projects: popularProjects };
};

export default Home;
