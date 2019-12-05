import React from 'react';

import { Container } from '../Grid';
import Typography from '../Typography';
import Button from '../Button';

const ButtonExample = () => (
  <Container>
    <Typography variant="h1">Button</Typography>
    <Button htmlAttributes={{width: 100}}>Follow</Button>
  </Container>
);

export default ButtonExample; 