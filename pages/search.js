import React, { Component, Fragment } from 'react';

import Link from 'next/link';
import Head from 'next/head';

import { Container } from '../components/Grid';
import { Hero } from '../components/Hero';
import SearchBar from '../components/Search/SearchBar';
import SearchResults from '../components/Search/Results';

const SearchPage = ({ searchResults }) => {
  return (
    <Fragment>
      <Head>
        <title>Next GitHub Viewer | Search Results</title>
      </Head>
      <Hero title="Search Results" />

      <SearchBar />
      <Container>
        {searchResults.errors ? <h1>error</h1> : <SearchResults results={searchResults} />}
      </Container>
    </Fragment>
  );
};

SearchPage.getInitialProps = async ({ req, query }) => {
  try {
    const { q } = query;
    const res = await fetch(`https://api.github.com/search/users?q=${query.q}&per_page=10`);
    const json = await res.json();
    return { searchResults: json };
  } catch (error) {
    console.warn('There was an error fetching data: ', error);
    return { searchResults: { error: error } };
  }
};

export default SearchPage;
