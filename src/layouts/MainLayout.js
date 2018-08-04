import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  BackTop,
} from 'antd';

import {
  Sider,
  Top,
} from 'components';

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  margin: auto;
  padding: 1.5rem 2.5rem;
`;

const MainLayout = props => (
  <Fragment>
    <Helmet>
      <title>Home</title>
      <meta name="description" content="chancethecoder's website" />
    </Helmet>
    <Top />
    <Wrapper>
      <Sider />
      {props.children}
    </Wrapper>
    <BackTop />
  </Fragment>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
