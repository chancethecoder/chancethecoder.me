import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Layout, Space } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

const { Header } = Layout;

const BaseHeader = () => (
  <Header style={{
    background: 'none',
    padding: '0 1rem',
  }}>
    <Space size="small">
      <NavLink to='/'>
        <Button type="default" shape="circle" icon={<HomeOutlined />} size={"large"} />
      </NavLink>
    </Space>
  </Header>
);

export default BaseHeader;
