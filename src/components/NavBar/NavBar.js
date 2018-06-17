import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Flex from 'components/Flex';

const StyledList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const StyledListItem = styled.li`
  display: inline;
  margin-right: 10px;
`;

const StyledAnchor = styled(NavLink)`
  text-decoration: none;
`;

const NavBar = () => (
  <Flex type="nav">
    <StyledList>
      <StyledListItem>
        <StyledAnchor exact to="/" >home</StyledAnchor>
      </StyledListItem>
      <StyledListItem>
        <StyledAnchor exact to="/profile" >profile</StyledAnchor>
      </StyledListItem>
      <StyledListItem>
        <StyledAnchor exact to="/project" >project</StyledAnchor>
      </StyledListItem>
      <StyledListItem>
        <StyledAnchor to="/playground" >playground</StyledAnchor>
      </StyledListItem>
    </StyledList>
  </Flex>
);

export default NavBar;
