import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  BackTop,
  Button,
  Layout,
  Menu,
} from 'antd';

import * as localeActions from 'actions/localeActions';
import * as resizeActions from 'actions/resizeActions';

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
  font-weight: 500;
  color: rgb(0, 0, 0, 0.85);
  line-height: 64px;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

const StyledContent = styled(Content)`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyledFooter = styled(Footer)`
  text-align: center;
`;

class MainLayout extends Component {
  constructor() {
    super();

    this.updatePredicate = this.updatePredicate.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updatePredicate);
  }

  updatePredicate() {
    this.props.actions.resizeActions.screenResize(window.innerWidth);
  }

  render() {
    return (
      <BaseLayout>
        <StyledHeader>
          <HomeLink to="/">chancethecoder.me</HomeLink>
          <HeaderRight>
            <Menu
              mode="horizontal"
              selectedKeys={[window.location.pathname]}
              style={{
                borderBottom: 'none',
                marginRight: '16px',
              }}
            />
            <Button
              size="small"
              onClick={this.props.actions.localeActions.toggleLocale}
            >
              {this.props.locale.lang}
            </Button>
          </HeaderRight>
        </StyledHeader>
        <Layout
          style={{
            background: 'none',
            padding: (this.props.screen.width > 768) ? '2rem 26px' : '0.5rem',
          }}
        >
          <StyledContent>
            {this.props.children}
          </StyledContent>
        </Layout>
        <StyledFooter>
          © 2018 by Youngkyun Kim
        </StyledFooter>
        <BackTop />
      </BaseLayout>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

function mapStateToProps(state) {
  return {
    screen: state.screen,
    locale: state.locale,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      localeActions: bindActionCreators(localeActions, dispatch),
      resizeActions: bindActionCreators(resizeActions, dispatch),
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainLayout);
