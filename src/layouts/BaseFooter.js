import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const BaseFooter = () => (
  <Footer style={{
    background: 'none',
    padding: '24px 0',
    textAlign: 'center',
  }}>
    &copy; 2020 by Youngkyun Kim
  </Footer>
);

export default BaseFooter;
