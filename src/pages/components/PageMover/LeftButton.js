import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  display: inline-block;
  font-size: 1rem;
  padding: 1rem 1.5rem;
  margin-left: 1.5rem;
  border-radius: 2px;
  border: 1px solid transparent;
  font-weight: 400;
  background: ${props => props.background};
  color: ${props => props.color};

  z-index: 100;
`;

const LeftButton = props => (
  <StyledNavLink
    /* eslint-disable react/jsx-max-props-per-line */
    exact to={props.to}
    background={props.background}
    color={props.color}
  >
    {props.label}
  </StyledNavLink>
);

LeftButton.defaultProps = {
  background: '#fff',
  color: '#000',
  label: 'Prev',
};

LeftButton.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  label: PropTypes.string,
  to: PropTypes.string.isRequired,
};

export default LeftButton;
