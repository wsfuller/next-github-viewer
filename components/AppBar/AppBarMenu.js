import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { IoIosClose } from 'react-icons/io';

import { StyledAppBarMenu, StyledAppBarMenuButton } from './AppBar.styles';

const AppBarMenu = ({ menu, toggleMenu }) => {
  return (
    <StyledAppBarMenu showMenu={menu}>
      This is the app menu
      <StyledAppBarMenuButton onClick={() => toggleMenu()}>
        <IoIosClose />
      </StyledAppBarMenuButton>
    </StyledAppBarMenu>
  );
};

AppBarMenu.propTypes = {
  menu: PropTypes.bool.isRequired
};

export default AppBarMenu;
