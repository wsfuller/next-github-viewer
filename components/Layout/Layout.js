import StyledLayout from './Layout.styles';
import AppBar from '../AppBar';
import Footer from '../Footer';

const Layout = ({ children }) => (
  <StyledLayout>
    <AppBar />
    <div>{children}</div>
    <Footer />
  </StyledLayout>
);

export default Layout;
