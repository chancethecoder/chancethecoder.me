import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { media } from 'utils/style-utils';

import {
  Affix,
  BackTop,
  Layout,
} from 'antd';

import {
  TOC,
  LocaleToggle,
} from 'containers';

import {
  Grid,
} from 'components';

const {
  Header, Content, Footer,
} = Layout;

const BaseLayout = styled(Layout)`
  background: none !important;
  min-height: 100vh;
`;

const StyledHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none !important;
  box-shadow: 0 2px 8px #f0f1f2;
`;

const HomeLink = styled(NavLink)`
  font-size: 14px;
  font-weight: 500;
  color: rgb(0, 0, 0, 0.85);
  line-height: 64px;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

const Container = styled(Content)`
  display: flex;
  justify-content: space-between;
  ${media.min.laptop`
    width: 70%;
  `}
  align-self: center;
  width: 100%;
  background: none;
`;

const StyledFooter = styled(Footer)`
  text-align: center;
`;

const MainLayout = props => (
  <BaseLayout>
    <StyledHeader>
      <HomeLink to="/">chancethecoder.me</HomeLink>
      <HeaderRight>
        <LocaleToggle size="small">
          {props.locale.lang}
        </LocaleToggle>
      </HeaderRight>
    </StyledHeader>
    <Container>
      {props.children}
      <Grid margin="0">
        <Affix offsetTop={10}>
          <TOC />
        </Affix>
      </Grid>
    </Container>
    <StyledFooter>
      © 2018 by Youngkyun Kim
    </StyledFooter>
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
