import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BackTop, Layout } from 'antd';

import { BaseHeader, BaseFooter} from '.';

const { Content } = Layout;

const BaseLayout = styled(Layout)`
  background: none !important;
  min-height: 100vh;
`;

const Container = styled(Content)`
  margin: auto;
`;

const Wrapper = styled.div`
  padding: 0 1rem;
`;

const MainLayout = props => (
  <BaseLayout>
    <Container>
      <BaseHeader/>
      <Wrapper>
        {props.children}
      </Wrapper>
      <BaseFooter/>
    </Container>
    <BackTop />
  </BaseLayout>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;