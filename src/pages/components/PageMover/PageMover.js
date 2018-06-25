import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LeftButton from './LeftButton';
import RightButton from './RightButton';

const StyledShrinker = styled.div`
  flex-shrink: 0;
  margin: 0 1.5rem 1.5rem 2.5rem;
  padding: 0;
`;

const PageMover = props => (
  <StyledShrinker>
    <LeftButton to={props.left} />
    <RightButton to={props.right} />
  </StyledShrinker>
);

PageMover.propTypes = {
  left: PropTypes.string.isRequired,
  right: PropTypes.string.isRequired,
};

export default PageMover;
