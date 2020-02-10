import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { IoIosClose } from 'react-icons/io';
import Modal from 'react-modal';

import Logo from '../../static/logo-text-icon.svg';
import {
  StyledAppBarMenuOverlay,
  StyledAppBarMenu,
  StyledMenuHeader,
  StyledAppBarMenuButton
} from './AppBar.styles';
import Image from '../Image';
import { List, ListItem } from '../List';

const customStyles = {
  overlay: {
    zIndex: 10000
  }
};

const AppBarMenu = ({ menu, toggleMenu }) => {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const menuLinks = [
    {
      text: 'About',
      href: '#'
    },
    {
      text: 'Technology',
      href: '#'
    },
    {
      text: 'GitHub Repo',
      href: '#'
    }
  ];

  function handleModal(whichModal) {
    setModal(true);
    setModalContent(whichModal);
  }

  useEffect(() => {
    Modal.setAppElement('#__next');
    if (modal) {
      // set modal content here
      console.log('use effect modal: ', modalContent.toLowerCase());
    }
  }, [modal]);

  return (
    <Fragment>
      <StyledAppBarMenu showMenu={menu}>
        <StyledMenuHeader>
          <Link href="/">
            <a>
              <Image source={Logo} maxWidth={150} htmlAttributes={{ alt: 'Logo' }} />
            </a>
          </Link>
          <StyledAppBarMenuButton onClick={() => toggleMenu()}>
            <IoIosClose />
          </StyledAppBarMenuButton>
        </StyledMenuHeader>
        <List>
          {menuLinks.map((link, i) => (
            <ListItem key={`menu-link-${i}`} hover onClick={() => handleModal(link.text)}>
              {link.text}
            </ListItem>
          ))}
        </List>
      </StyledAppBarMenu>
      <StyledAppBarMenuOverlay showMenu={menu} />
      <Modal isOpen={modal} style={customStyles} contentLabel={modalContent}>
        Modal Content for: {modalContent}
        <button onClick={() => setModal(false)}>close</button>
      </Modal>
    </Fragment>
  );
};

AppBarMenu.propTypes = {
  menu: PropTypes.bool.isRequired
};

export default AppBarMenu;
