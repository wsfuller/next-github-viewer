import { Fragment } from 'react';

import AppBar from '../AppBar';

const Layout = ({ children }) => (
  <Fragment>
    <AppBar />
    {children}
    <h1>Footer</h1>
    {/* <Footer></Footer> */}
  </Fragment>
);

export default Layout;
