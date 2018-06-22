import React, { Component } from 'react';
import styled from 'styled-components';
import Flex from 'components/Flex';
import HomeNav from 'layouts/components/HomeNav';
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
          <HomeNav />
          <Flex column="column" valign="center">
            {
              this.state.navToggled && <NavBar />
            }
            <ToggleButton handleClick={this.toggle} />
          </Flex>
        </StyledPadder>
      </StyledWrapper>
    );
  }
}

export default Menu;

// const Menu = () => (
//   <StyledWrapper>
//     <StyledPadder>
//       <HomeNav />
//       <Flex column="column" valign="center">
//         <NavBar />
//         <ToggleButton />
//       </Flex>
//     </StyledPadder>
//   </StyledWrapper>
// );

// export default Menu;
