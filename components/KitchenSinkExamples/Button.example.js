import React from 'react';

import { Container } from '../Grid';
import Typography from '../Typography';
import Button from '../Button';

const ButtonExample = () => (
  <Container>
    <Typography variant="h1">Button</Typography>
    <Button variant="link" href="/" text="internal link" />
    <Button variant="external-link" href="https://google.com" text="google breh" />
    <Button variant="button" type="sumbit" text="Follow"></Button>
  </Container>
);

export default ButtonExample;
