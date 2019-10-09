import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
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

Stat.propTypes = {
  title: PropTypes.string.isRequired,
  figure: PropTypes.node.isRequired
};

export default Stat;
