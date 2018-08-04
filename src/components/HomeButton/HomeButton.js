import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  display: block;
  font-size: 0.9rem;
  font-weight: 700;
  font: 700 .85rem/1.5 Cereal,-apple-system,BlinkMacSystemFont,Arial,sans-serif;
  color: #000;
`;

const HomeButton = () => (
  <StyledNavLink exact to="/" >
    chancethecoder.me
  </StyledNavLink>
);

export default HomeButton;
