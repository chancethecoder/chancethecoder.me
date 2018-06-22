import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StrokeLine = styled.div`
  width: 2rem;
  height: 0.25rem;
  background-color: #333;
  margin: 0.25rem 0;
  transition: 0.4s;
`;

const Wrapper = styled.div`
  display: inline-block;
  cursor: pointer;
`;

const ToggleButton = props => (
  <Wrapper onClick={props.handleClick}>
    <StrokeLine />
    <StrokeLine />
    <StrokeLine />
  </Wrapper>
);

export default ToggleButton;

ToggleButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
