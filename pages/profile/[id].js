import { Fragment } from 'react';

const Profile = ({ user }) => {
  return (
    <Fragment>
      {console.log('USER: ', user)}
      <h1>Login: {user.login}</h1>
      <p>Location: {user.location}</p>
    </Fragment>
  );
};

Profile.getInitialProps = async ({ query }) => {
  const res = await fetch(`https://api.github.com/users/${query.id}`);
  const json = await res.json();
  return { user: json };
};

export default Profile;
