import React, { Component, Fragment } from 'react';

import Head from 'next/head';

import { Container, Row, GridItem, Grid } from '../components/Grid';
import { Hero, HeroCarousel } from '../components/Hero';
import SearchBar from '../components/Search/SearchBar';
import Section from '../components/Section';

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
        <Hero dividerOpacity={0.4}>
          <SearchBar />
          <HeroCarousel />
        </Hero>

        <Section>
          <Container>
            <Section.Header title="Popular Projects" />
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
  const baseUrl = 'https://api.github.com/repos';
  // Visual Code, Free code camp, Bootstrap, React
  const visualStudioCode = await fetch(`${baseUrl}/microsoft/vscode`);
  const bootstrap = await fetch(`${baseUrl}/microsoft/vscode`);
  const freeCodeCamp = await fetch(`${baseUrl}/freeCodeCamp/freeCodeCamp`);
  const react = await fetch(`${baseUrl}/facebook/react`);
  // try {
  //   const nextJS = await fetch('https://api.github.com/repos/zeit/next.js');
  //   const
  //   const json = await res.json();
  // }
  // return { stars: json.stargazers_count };
};

export default Home;
