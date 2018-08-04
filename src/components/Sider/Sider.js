import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {
  Affix,
  Menu,
} from 'antd';
import { media } from 'utils/style-utils';

const Wrapper = styled.div`
  ${media.min.laptop`
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    min-width: 20%;
  `}
`;

const StyledLink = styled(NavLink)`
  font-size: 1rem;
  line-height: 40px;
`;

const Sider = () => (
  <Wrapper>
    <Affix offsetTop={10}>
      <Menu
        mode="inline"
        selectedKeys={[window.location.pathname]}
        style={{
          borderRight: 'none',
        }}
      >
        <Menu.Item key="/">
          <StyledLink to="/">welcome</StyledLink>
        </Menu.Item>
        <Menu.Item key="/about">
          <StyledLink to="/about">about</StyledLink>
        </Menu.Item>
        <Menu.Item key="/skill">
          <StyledLink to="/skill">skill</StyledLink>
        </Menu.Item>
        <Menu.Item key="/project">
          <StyledLink to="/project">project</StyledLink>
        </Menu.Item>
      </Menu>
    </Affix>
  </Wrapper>
);

export default Sider;
