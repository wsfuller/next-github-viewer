import { Fragment } from 'react';
import fetch from 'isomorphic-unfetch';

import Head from 'next/head';
import Link from 'next/link';

import Stat from '../../components/Stat';

import hasUrlProtocol from '../../common/hasUrlProtocol';

const Profile = ({ user: { user, followers } }) => {
  return (
    <Fragment>
      <Head>
        <title>NGHV | {user.login}</title>
      </Head>
      {/* PROFILE HEADER: Image, Username, Bio, Type, Meta data */}
      <section>
        <h1>
          <a href={`https://github.com/${user.login}`}>{user.login}</a>
        </h1>
        <img src={user.avatar_url} />
        <p>{user.bio}</p>
        {/* meta data */}
        <ul>
          <li>Location: {user.location}</li>
          <li>Company: {user.company}</li>
          <li>
            <a href={hasUrlProtocol(user.blog)}>Website</a>
          </li>
        </ul>
      </section>

      {/* STATS: Followers, Following, Repos, Gists */}
      <section>
        <Stat title="Followers" figure={user.followers} />
        <Stat title="Following" figure={user.following} />
        <Stat title="Repos" figure={user.public_repos} />
        <Stat title="Gists" figure={user.public_gists} />
      </section>
      {/* Top 30 Following */}
      <section>
        <ul>
          {followers.map(follower => (
            <li key={follower.id}>
              <Link href={`/user/${follower.id}`}>
                <a>
                  <img src={follower.avatar_url} />
                  <p>{follower.login}</p>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Fragment>
  );
};

Profile.getInitialProps = async ({ query }) => {
  const getUser = await fetch(`https://api.github.com/user/${query.id}`);
  const user = await getUser.json();
  const getFollowers = await fetch(user.followers_url);
  const followers = await getFollowers.json();

  return Object.assign({ user: { user, followers } });
};

export default Profile;
