import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { media } from 'utils/style-utils';

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

  ${media.max.tablet`
    flex-direction: column;
  `}
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const MainLayout = props => (
  <Fragment>
    <Helmet>
      <title>Main</title>
      <meta name="description" content="chancethecoder's website" />
    </Helmet>
    <Top />
    <Wrapper>
      <Sider />
      <Content>
        {props.children}
      </Content>
    </Wrapper>
    <BackTop />
  </Fragment>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
