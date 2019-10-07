import React, { Fragment } from 'react';
import styled from 'styled-components';

import Typography from '../Typography';

const Stat = ({ title, figure }) => (
  <Fragment>
    <Typography variant="h1" data-testid="statTitle">
      {title}
    </Typography>
    <Typography variant="body1" data-testid="statFigure">
      {figure}
    </Typography>
  </Fragment>
);

export default Stat;
