import { Fragment } from 'react';

const Profile = ({ user: { user, followers } }) => {
  return (
    <Fragment>
      <h1>Login: {user.login}</h1>
      <img src={user.avatar_url} />
      <p>Location: {user.location}</p>
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
