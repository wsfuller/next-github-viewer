import React, { Component, Fragment } from "react";

import Link from "next/link";
import Head from "next/head";

import SearchBar from "../components/SearchBar";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
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
        {/* <SearchResults /> */}
      </Fragment>
    );
  }
}

Home.getInitialProps = async ({ req }) => {
  const res = await fetch("https://api.github.com/repos/zeit/next.js");
  const json = await res.json();
  return { stars: json.stargazers_count };
};

export default Home;
