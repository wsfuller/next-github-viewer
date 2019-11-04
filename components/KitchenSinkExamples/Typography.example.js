import React, { Fragment } from 'react';

import { Container } from '../Grid';
import Typography from '../Typography';

const TypographyExample = () => (
  <Container>
    <Typography variant="h1">Typography</Typography>
    <Typography variant="h1">h1: Header 1</Typography>
    <Typography variant="h2">h2: Header 2</Typography>
    <Typography variant="h3">h3: Header 3</Typography>
    <Typography variant="h4">h4: Header 4</Typography>
    <Typography variant="subtitle1">subtitle1</Typography>
    <Typography variant="body1">body1</Typography>
  </Container>
);

export default TypographyExample;
