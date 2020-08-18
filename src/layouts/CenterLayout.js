import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { BackTop, Layout } from 'antd';

const { Content } = Layout;

const CenterLayout = props => (
  <Layout style={{
    minHeight: '100vh',
    background: 'none',
  }}>
    <Helmet>
      <title>chancethecoder.me</title>
      <meta name="description" content="chancethecoder's website" />
    </Helmet>
    <Content style={{
      display: 'flex',
      margin: props.margin || 'auto',
      alignItems: props.alignItems || 'center',
      justifyContent: props.justifyContent || 'center',
    }}>
      {props.children}
    </Content>
    <BackTop />
  </Layout>
);

CenterLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CenterLayout;