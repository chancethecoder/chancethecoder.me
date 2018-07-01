import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StrokeLine = styled.div`
  width: 2rem;
  height: 0.25rem;
  background-color: #333;
  margin: 0.25rem 0;
  transition: 0.4s;

  ${props => (props.toggled && props.first ? 'transform: translate(0, 0.5rem) rotate(45deg)' : '')}
  ${props => (props.toggled && props.second ? 'opacity: 0' : '')}
  ${props => (props.toggled && props.third ? 'transform: translate(0, -0.5rem) rotate(135deg)' : '')}
`;

const Wrapper = styled.div`
  display: inline-block;
  cursor: pointer;
`;

const ToggleButton = props => (
  <Wrapper toggled={props.toggled} onClick={props.handleClick}>
    <StrokeLine first toggled={props.toggled} />
    <StrokeLine second toggled={props.toggled} />
    <StrokeLine third toggled={props.toggled} />
  </Wrapper>
);

ToggleButton.defaultProps = {
  toggled: undefined,
};

ToggleButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  toggled: PropTypes.bool,
};

export default ToggleButton;
