import React from 'react';

import { Container } from '../Grid';
import Typography from '../Typography';
import Button from '../Button';

const ButtonExample = () => (
  <Container>
    <Typography variant="h1">Button</Typography>
    <Button variant="link" href="http://www.google.com" htmlAttributes={{width: 100}} text="Follow"></Button>
    <Button variant="button" type="sumbit" htmlAttributes={{width: 100}} text="Follow"></Button>

  </Container>
);

export default ButtonExample; 