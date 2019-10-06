import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

import Head from 'next/head';
import App, { Container } from 'next/app';

import { theme } from './_theme';

class Application extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Fragment>
        <Head>
          <title>Next GitHub Viewer</title>
        </Head>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Fragment>
    );
  }
}

export default Application;
