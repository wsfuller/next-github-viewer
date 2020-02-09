import PropTypes from 'prop-types';

import { StyledCard } from './Card.styles';

const Card = ({ children }) => <StyledCard>{children}</StyledCard>;

Card.propTypes = {
  children: PropTypes.node.isRequired
};

export default Card;
