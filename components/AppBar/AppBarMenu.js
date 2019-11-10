import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { IoIosClose } from 'react-icons/io';

import { StyledAppBarMenuOverlay, StyledAppBarMenu, StyledAppBarMenuButton } from './AppBar.styles';

const AppBarMenu = ({ menu, toggleMenu }) => {
  return (
    <Fragment>
      <StyledAppBarMenu showMenu={menu}>
        This is the app menu
        <StyledAppBarMenuButton onClick={() => toggleMenu()}>
          <IoIosClose />
        </StyledAppBarMenuButton>
      </StyledAppBarMenu>
      <StyledAppBarMenuOverlay showMenu={menu} />
    </Fragment>
  );
};

AppBarMenu.propTypes = {
  menu: PropTypes.bool.isRequired
};

export default AppBarMenu;
