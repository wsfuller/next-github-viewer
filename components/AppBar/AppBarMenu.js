import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { StyledAppBarMenu } from './AppBar.styles';

const AppBarMenu = ({ menu }) => {
  return <StyledAppBarMenu showMenu={menu}>This is the app menu</StyledAppBarMenu>;
};

AppBarMenu.propTypes = {
  menu: PropTypes.bool.isRequired
};

export default AppBarMenu;
