import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { BackTop, Layout } from 'antd';

import BaseFooter from './BaseFooter';
import BaseHeader from './BaseHeader';

const { Content } = Layout;

const MainLayout = props => (
  <Layout style={{
    minHeight: '100vh',
    background: 'none',
  }}>
    <Helmet>
      <title>chancethecoder.me</title>
      <meta name="description" content="chancethecoder's website" />
    </Helmet>
    <Content style={{
      margin: props.margin || 'auto',
    }}>
      <BaseHeader/>
      <div style={{ padding: '1rem' }}>
        {props.children}
      </div>
      <BaseFooter/>
    </Content>
    <BackTop />
  </Layout>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;