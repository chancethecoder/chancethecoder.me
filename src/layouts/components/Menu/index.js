import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from 'utils/style-utils';
import Flex from 'components/Flex';
import HomeButton from 'layouts/components/HomeButton';
import NavBar from 'layouts/components/NavBar';
import ToggleButton from 'layouts/components/Menu/ToggleButton';

const StyledWrapper = styled.div`
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
`;

const StyledPadder = styled(Flex)`
  padding: 1.5rem 2.5rem;
  align-items: center;
  justify-content: space-between;

  ${media.max.laptop`
    padding: 1.5rem;
  `}
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
      <StyledWrapper>
        <StyledPadder>
          <HomeButton />
          <Flex>
            <NavBar show={this.state.navToggled} />
            <ToggleButton handleClick={this.toggle} />
          </Flex>
        </StyledPadder>
      </StyledWrapper>
    );
  }
}

export default Menu;
