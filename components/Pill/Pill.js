import PropTypes from 'prop-types';

import { StyledPill, StyledIcon, StyledValue, StyledIconValue } from './Pill.styles';

const Pill = ({ filled, value, icon, iconPosition }) => {
  const renderContent = () => {
    if (icon) {
      return (
        <StyledIconValue iconPosition={iconPosition}>
          <StyledValue iconPosition={iconPosition}>{value}</StyledValue>
          <StyledIcon iconPosition={iconPosition}>{icon}</StyledIcon>
        </StyledIconValue>
      );
    } else {
      return <StyledValue>{value}</StyledValue>;
    }
  };
  return <StyledPill filled={filled}>{renderContent()}</StyledPill>;
};

Pill.propTypes = {
  filled: PropTypes.bool,
  value: PropTypes.string.isRequired,
  icon: PropTypes.node,
  iconPosition: PropTypes.string
};

Pill.defaultProps = {
  filled: false,
  icon: null,
  iconPosition: 'left'
};

export default Pill;
