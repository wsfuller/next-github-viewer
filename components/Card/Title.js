import PropTypes from 'prop-types';

import { StyledCardTitle } from './Card.styles';

const CardTitle = ({ title }) => <StyledCardTitle variant="h4">{title}</StyledCardTitle>;

CardTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default CardTitle;
