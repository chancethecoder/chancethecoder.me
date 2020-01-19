import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Layout } from 'antd';

const { Header } = Layout;

const StyledHeader = styled(Header)`
  background: none !important;
  margin: auto;
`;

const StyledNavLink = styled(NavLink)`
  color: rgb(0, 0, 0, 0.85);
`;

const BaseHeader = props => (
  <StyledHeader>
    <StyledNavLink to="/">
      <b>chancethecoder.me</b>
    </StyledNavLink>
  </StyledHeader>
);

export default BaseHeader;
