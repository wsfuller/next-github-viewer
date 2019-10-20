import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

import Head from 'next/head';
import App, { Container } from 'next/app';

import { theme } from '../components/_theme';

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
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap-reboot.min.css"
            integrity="sha256-dARYuC3pd0wa/7R4Hkt/sR2zfLHCgbnVAQ2sPwhNe0A="
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Lato:400,700|Roboto:300,400,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Fragment>
    );
  }
}

export default Application;
