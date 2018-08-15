import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  BackTop,
  Button,
  Layout,
  Menu,
} from 'antd';

const {
  Header, Content, Footer,
} = Layout;

const HomeLink = styled(NavLink)`
  font: 600 0.85rem/1.5 Cereal, -apple-system, BlinkMacSystemFont, Arial, sans-serif;
  color: rgb(0, 0, 0, 0.85);
`;

const FloatRight = styled.div`
  float: right;
`;

const StyledLink = styled(NavLink)`
  line-height: 64px;
  font-size: 1rem;
`;

class MainLayout extends Component {
  constructor() {
    super();

    this.state = {
      collapsed: false,
      isLaptop: false,
    };

    this.toggle = this.toggle.bind(this);
    this.updatePredicate = this.updatePredicate.bind(this);
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener('resize', this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isLaptop: window.innerWidth > 768 });
  }

  toggle() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout
        style={{
          background: 'none',
          minHeight: '100vh',
        }}
      >
        <Header
          style={{
            background: 'none',
            boxShadow: '0 2px 8px #f0f1f2',
          }}
        >
          <HomeLink to="/">chancethecoder.me</HomeLink>
          <FloatRight>
            {
              !this.state.isLaptop && <Button
                onClick={this.toggle}
                type="primary"
                shape="circle"
                icon={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              />
            }
            <Menu
              mode="horizontal"
              selectedKeys={[window.location.pathname]}
            >
              <Menu.Item key="/portfolio">
                <StyledLink to="/portfolio">portfolio</StyledLink>
              </Menu.Item>
            </Menu>
          </FloatRight>
        </Header>
        <Layout
          style={{
            background: 'none',
            padding: this.state.isLaptop ? '2rem 26px' : '0.5rem',
          }}
        >
          <Layout
            style={{
              background: 'none',
            }}
          >
            <Content
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          ©2018 Created by Youngkyun Kim
        </Footer>
        <BackTop />
      </Layout>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
