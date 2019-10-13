import React, { Component, Fragment } from 'react';

import Link from 'next/link';
import Head from 'next/head';

import SearchBar from '../components/Search/SearchBar';
import SearchResults from '../components/Search/Results';

const SearchPage = ({ searchResults }) => {
  return (
    <Fragment>
      <Head>
        <title>Next GitHub Viewer | Search Results</title>
      </Head>

      <SearchBar />
      {searchResults.errors ? <h1>error</h1> : <SearchResults results={searchResults} />}
    </Fragment>
  );
};

SearchPage.getInitialProps = async ({ req, query }) => {
  const { q } = query;
  const res = await fetch(`https://api.github.com/search/users?q=${query.q}&per_page=10`);
  const json = await res.json();
  return { searchResults: json };
};

export default SearchPage;
