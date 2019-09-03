import React, { Fragment } from "react";
import fetch from "isomorphic-unfetch";

import Link from "next/link";
import Head from "next/head";

const Profile = ({ stars }) => (
  <Fragment>
    <Head>
      <title>Profile Page</title>
    </Head>
    <h1>Profile Page</h1>
    <div>Next stars: {stars}</div>
  </Fragment>
);

Profile.getInitialProps = async ({ req }) => {
  const res = await fetch("https://api.github.com/repos/zeit/next.js");
  const json = await res.json();
  return { stars: json.stargazers_count };
};

export default Profile;
