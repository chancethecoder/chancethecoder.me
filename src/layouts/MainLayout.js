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
  Header, Content, Footer, Sider,
} = Layout;

const HomeLink = styled(NavLink)`
  font: 700 0.85rem/1.5 Cereal, -apple-system, BlinkMacSystemFont, Arial, sans-serif;
  color: rgb(0, 0, 0, 0.85);
`;

const FloatRight = styled.div`
  float: right;
`;

const StyledLink = styled(NavLink)`
  line-height: 40px;
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
          </FloatRight>
        </Header>
        <Layout
          style={{
            background: 'none',
            padding: this.state.isLaptop ? '1.5rem 2.5rem' : '0.5rem',
          }}
        >
          <Sider
            breakpoint="md"
            collapsedWidth="0"
            trigger={null}
            collapsed={this.isLaptop || this.state.collapsed}
            style={{
              background: 'none',
            }}
          >
            <Menu
              mode="inline"
              selectedKeys={[window.location.pathname]}
              style={{
                borderRight: 'none',
              }}
            >
              <Menu.Item key="/">
                <StyledLink to="/">welcome</StyledLink>
              </Menu.Item>
              <Menu.Item key="/about">
                <StyledLink to="/about">about</StyledLink>
              </Menu.Item>
              <Menu.Item key="/skill">
                <StyledLink to="/skill">skill</StyledLink>
              </Menu.Item>
              <Menu.Item key="/project">
                <StyledLink to="/project">project</StyledLink>
              </Menu.Item>
            </Menu>
          </Sider>
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
                minHeight: '100vh',
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
