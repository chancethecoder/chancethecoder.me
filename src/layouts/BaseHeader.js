import React from 'react';
import { NavLink } from 'react-router-dom';
import { Layout } from 'antd';

const { Header } = Layout;

const BaseHeader = () => (
  <Header style={{
    backgroundColor: '#24292e',
    padding: '0 1rem',
  }}>
    <NavLink to='/' style={{ color: 'white' }}>
      <b>chancethecoder.me</b>
    </NavLink>
  </Header>
);

export default BaseHeader;
