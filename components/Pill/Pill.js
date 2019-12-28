import PropTypes from 'prop-types';

import StyledPill from './Pill.styles';

const Pill = ({ filled, value }) => <StyledPill filled={filled}>{value}</StyledPill>;

Pill.propTypes = {
  filled: PropTypes.bool,
  value: PropTypes.string.isRequired
};

Pill.defaultProps = {
  filled: false
};

export default Pill;
