import React, { useEffect, useState } from 'react';

import { IoIosMenu } from 'react-icons/io';

import { Container } from '../Grid';
import { StyledAppBar } from './AppBar.styles';
import AppBarMenu from './AppBarMenu';

const AppBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <StyledAppBar>
      <Container>
        <button onClick={() => toggleMenu()}></button>
        <IoIosMenu />
        App Bar fdas
        <AppBarMenu menu={showMenu}>Our menu</AppBarMenu>
      </Container>
    </StyledAppBar>
  );
};

export default AppBar;
