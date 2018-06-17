import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from 'components/Container';
import NavBar from 'components/NavBar';
import BaseLayout from 'layouts/BaseLayout';
import media from 'utils/style-utils';

const MainContainer = styled(Container)`
  width: 60vw;
  height: 80vh;
  padding: 1rem;
  border-radius: 1.25rem;
  background: #f1f1f1;

  ${media.tablet`width: 80vw;`}
  ${media.phone`width: 100vw;`}
`;

const MainLayout = props => (
  <BaseLayout halign="center" valign="center">
    <MainContainer>
      <NavBar />
      {props.children}
    </MainContainer>
  </BaseLayout>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
