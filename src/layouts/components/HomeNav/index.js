import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  display: block;
  padding: 0.25em 1em;
  margin: 0 1.5em;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  color: #166191;
`;

const HomeNav = () => (
  <StyledNavLink exact to="/" >
    chancethecoder &hearts; me
  </StyledNavLink>
);

export default HomeNav;
