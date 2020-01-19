import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Layout } from 'antd';

const { Header } = Layout;

const StyledHeader = styled(Header)`
  background-color: #24292e !important;
  padding: 0 1rem !important;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
`;

const BaseHeader = props => (
  <StyledHeader>
    <StyledNavLink to="/">
      <b>chancethecoder.me</b>
    </StyledNavLink>
  </StyledHeader>
);

export default BaseHeader;
