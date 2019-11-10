import React, { useEffect, useState } from 'react';

import { IoIosMenu } from 'react-icons/io';

import { pxToRem } from '../_theme';
import { Container, Grid } from '../Grid';
import { StyledAppBar, StyledAppBarButton } from './AppBar.styles';
import AppBarMenu from './AppBarMenu';

const AppBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <StyledAppBar>
      <Container fullHeight>
        <Grid
          template={{
            base: {
              columns: `${pxToRem(40)} 1fr ${pxToRem(40)}`,
              columnGap: 1,
              alignItems: 'center'
            }
          }}
        >
          <StyledAppBarButton onClick={() => toggleMenu()}>
            <IoIosMenu />
          </StyledAppBarButton>
          App Bar fdas
        </Grid>

        <AppBarMenu menu={showMenu} toggleMenu={toggleMenu}>
          Our menu
        </AppBarMenu>
      </Container>
    </StyledAppBar>
  );
};

export default AppBar;
