import React, { Component, Fragment } from 'react';

import Head from 'next/head';

import { Container, Row, GridItem, Grid } from '../components/Grid';
import SearchBar from '../components/Search/SearchBar';
import SectionHeader from '../components/SectionHeader';

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

        <SearchBar />
        {/* Hero Search */}
        <h1>Hero w/ Searchbar Component</h1>
        {/* Section Options */}
        <section>
          <Container>
            <SectionHeader title="Popular Projects" />
            Next | Bootstrap | freeCodeCamp | You-Dont-Know-JS
            {/* https://www.freecodecamp.org/news/the-10-github-repos-people-mention-the-most-in-freecodecamps-main-chat-room-189750600fa4/ */}
          </Container>
        </section>
        <section>
          <Container>
            <SectionHeader title="Developed by" />
            {/* https://stripe.com/ lifting cards section*/}
          </Container>
        </section>
        <section>
          <Container>
            <SectionHeader title="GitHub" />
            {/* https://stripe.com/ right below lifting card section*/}
          </Container>
        </section>
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
