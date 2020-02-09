import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { IoIosMenu } from 'react-icons/io';

import { pxToRem } from '../_theme';
import { Container, Grid } from '../Grid';

import Image from '../Image';
import { StyledAppBar, StyledAppBarButton } from './AppBar.styles';
import AppBarMenu from './AppBarMenu';

import Logo from '../../static/logo-text-icon.svg';

const AppBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <StyledAppBar>
      <Container fullHeight>
        <Grid
          template={{
            base: {
              columns: `${pxToRem(40)} ${pxToRem(150)} 1fr ${pxToRem(40)}`,
              columnGap: 1,
              alignItems: 'center'
            }
          }}
        >
          <StyledAppBarButton onClick={() => toggleMenu()}>
            <IoIosMenu />
          </StyledAppBarButton>
          <Link href="/">
            <a>
              <Image source={Logo} htmlAttributes={{ alt: 'Logo' }} />
            </a>
          </Link>
        </Grid>

        <AppBarMenu menu={showMenu} toggleMenu={toggleMenu}>
          Our menu
        </AppBarMenu>
      </Container>
    </StyledAppBar>
  );
};

export default AppBar;
