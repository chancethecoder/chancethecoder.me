import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BackTop, Layout } from 'antd';

import BaseHeader from './BaseHeader';
import BaseFooter from './BaseFooter';

const { Content } = Layout;

const BaseLayout = styled(Layout)`
  background: none !important;
  min-height: 100vh;
`;

const Container = styled(Content)`
  margin: auto;
  padding: 0 1.25rem;
`;

const MainLayout = props => (
  <BaseLayout>
    <Container>
      <BaseHeader/>
      {props.children}
      <BaseFooter/>
    </Container>
    <BackTop />
  </BaseLayout>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  locale: PropTypes.shape({
    lang: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  locale: state.locale,
});

export default connect(mapStateToProps)(MainLayout);
