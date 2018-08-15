import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  BackTop,
  Layout,
  Menu,
} from 'antd';

import * as actions from 'actions/screenResizeActions';

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
  background: none !important;
  box-shadow: 0 2px 8px #f0f1f2;
`;

const HomeLink = styled(NavLink)`
  font: 600 0.85rem/1.5 Cereal, -apple-system, BlinkMacSystemFont, Arial, sans-serif;
  color: rgb(0, 0, 0, 0.85);
  line-height: 64px;
`;

const StyledLink = styled(NavLink)`
  line-height: 64px;
  font-size: 1rem;
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
    this.props.actions.screenResize(window.innerWidth);
  }

  render() {
    return (
      <BaseLayout>
        <StyledHeader>
          <HomeLink to="/">chancethecoder.me</HomeLink>
          <Menu
            mode="horizontal"
            selectedKeys={[window.location.pathname]}
          >
            <Menu.Item key="/portfolio">
              <StyledLink to="/portfolio">portfolio</StyledLink>
            </Menu.Item>
          </Menu>
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
          ©2018 Created by Youngkyun Kim
        </StyledFooter>
        <BackTop />
      </BaseLayout>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  screen: PropTypes.shape({
    width: PropTypes.number,
  }).isRequired,
  actions: PropTypes.shape({
    screenResize: PropTypes.function,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    screen: state.screen,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainLayout);
