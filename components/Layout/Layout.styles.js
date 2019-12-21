import styled, { css } from 'styled-components';
import { pxToRem } from '../_theme';

const StyledLayout = styled.div`
  display: grid;
  height: 100%;
  min-height: 100%;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
`;

export default StyledLayout;
