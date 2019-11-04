import React from 'react';

import { Container } from '../Grid';
import Typography from '../Typography';
import Avatar from '../Avatar';

const AvatarExample = () => (
  <Container>
    <Typography variant="h1">Avatar</Typography>
    <Avatar source="http://placehold.it/300x300" htmlAttributes={{ alt: 'placeholder' }} />
  </Container>
);

export default AvatarExample;
