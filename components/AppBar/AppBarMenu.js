import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { IoIosClose } from 'react-icons/io';

import {
  StyledAppBarMenuOverlay,
  StyledAppBarMenu,
  StyledMenuHeader,
  StyledAppBarMenuButton
} from './AppBar.styles';
import Link from '../Link';
import Image from '../Image';

import Logo from '../../static/logo-text-icon.svg';

const AppBarMenu = ({ menu, toggleMenu }) => {
  return (
    <Fragment>
      <StyledAppBarMenu showMenu={menu}>
        <StyledMenuHeader>
          <Link href="/">
            <Image source={Logo} maxWidth={150} htmlAttributes={{ alt: 'Logo' }} />
          </Link>
          <StyledAppBarMenuButton onClick={() => toggleMenu()}>
            <IoIosClose />
          </StyledAppBarMenuButton>
        </StyledMenuHeader>
        This is the app menu
      </StyledAppBarMenu>
      <StyledAppBarMenuOverlay showMenu={menu} />
    </Fragment>
  );
};

AppBarMenu.propTypes = {
  menu: PropTypes.bool.isRequired
};

export default AppBarMenu;
