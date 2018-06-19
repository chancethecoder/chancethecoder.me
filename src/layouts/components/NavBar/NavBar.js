import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import List from 'components/List';
import ListItem from 'components/ListItem';

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #166191;
`;

const StyledList = styled(List)`
  padding: 0 1em;
  margin: 0 1.5em;
`;

const StyledListItem = styled(ListItem)`
  margin-right: 2.25rem;
`;

const NavBar = () => (
  <StyledList>
    <StyledListItem>
      <StyledNavLink exact to="/profile" >profile</StyledNavLink>
    </StyledListItem>
    <StyledListItem>
      <StyledNavLink exact to="/project" >project</StyledNavLink>
    </StyledListItem>
    <StyledListItem>
      <StyledNavLink to="/playground" >playground</StyledNavLink>
    </StyledListItem>
  </StyledList>
);

export default NavBar;
