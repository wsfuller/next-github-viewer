import React, { Component, Fragment } from 'react';

import Link from 'next/link';
import Head from 'next/head';
import { IoIosMenu } from 'react-icons/io';

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
        {/* <Header></Header> */}
        <h1>
          Header <IoIosMenu />
        </h1>
        <SearchBar />
        {/* Hero Search */}
        <h1>Hero w/ Searchbar Component</h1>
        {/* Section Options */}
        <h1>Popular Projects/Repos</h1>
        Next | Bootstrap | freeCodeCamp | You-Dont-Know-JS
        {/* https://www.freecodecamp.org/news/the-10-github-repos-people-mention-the-most-in-freecodecamps-main-chat-room-189750600fa4/ */}
        <h1>Developed By Cards:</h1>
        {/* https://stripe.com/ lifting cards section*/}
        <h1>Github Docs</h1>
        {/* https://stripe.com/ right below lifting card section*/}
        <h1>Footer</h1>
        {/* <Footer></Footer> */}
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
