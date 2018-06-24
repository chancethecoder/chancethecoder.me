import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  display: block;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  color: #000;
`;

const HomeNav = () => (
  <StyledNavLink exact to="/" >
    chancethecoder &hearts; me
  </StyledNavLink>
);

export default HomeNav;
