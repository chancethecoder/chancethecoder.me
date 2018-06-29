import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from 'utils/style-utils';
import HomeButton from 'layouts/components/HomeButton';
import NavBar from 'layouts/components/NavBar';
import ToggleButton from 'layouts/components/Menu/ToggleButton';

const Wrapper = styled.div`
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
`;

const Padder = styled.div`
  display: flex;
  padding: 1.5rem 2.5rem;
  align-items: center;
  justify-content: space-between;

  ${media.max.laptop`
    padding: 1.5rem;
  `}
`;

const NavWrapper = styled.div`
  display: flex;
`;

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navToggled: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ navToggled: !this.state.navToggled });
  }

  render() {
    return (
      <Wrapper>
        <Padder>
          <HomeButton />
          <NavWrapper>
            <NavBar show={this.state.navToggled} />
            <ToggleButton handleClick={this.toggle} />
          </NavWrapper>
        </Padder>
      </Wrapper>
    );
  }
}

export default Menu;
