import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from 'components/Container';
import Menu from 'layouts/components/Menu';
import BaseWrapper from 'layouts/components/BaseWrapper';
import media from 'utils/style-utils';

const MainContainer = styled(Container)`
  height: 100vh;
  width: 60vw;

  ${media.tablet`width: 80vw;`}
  ${media.phone`width: 100vw;`}
`;

const MainLayout = props => (
  <BaseWrapper direction="column" halign="center" valign="between">
    <Menu />
    <MainContainer>
      {props.children}
    </MainContainer>
  </BaseWrapper>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
