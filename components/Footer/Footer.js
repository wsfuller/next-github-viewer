import { FaHeart } from 'react-icons/fa';

import { pxToRem, theme } from '../_theme';
import StyledFooter from './Footer.styles';
import { Container, Grid, GridItem } from '../Grid';
import currentYear from '../../common/currentYear';

const Footer = () => (
  <StyledFooter>
    <Container>
      <Grid
        template={{
          base: {
            justifyItems: 'center'
          }
        }}
      >
        <div>
          Made with
          <span
            style={{
              position: 'relative',
              top: `${pxToRem(-2)}`,
              margin: `0 ${pxToRem(5)}`,
              color: `${theme.variables.colors.systemFeedback.error}`
            }}
          >
            <FaHeart />
          </span>
          {currentYear()}
        </div>
      </Grid>
    </Container>
  </StyledFooter>
);

export default Footer;
