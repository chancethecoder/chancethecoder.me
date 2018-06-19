import React from 'react';
import styled from 'styled-components';
import Flex from 'components/Flex';
import HomeNav from 'layouts/components/HomeNav';
import NavBar from 'layouts/components/NavBar';

const StyledWrapper = styled.div`
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
`;

const StyledInnerWrapper = styled(Flex)`
  height: 5rem;
  align-items: center;
  justify-content: space-between;
`;

const Menu = () => (
  <StyledWrapper>
    <StyledInnerWrapper>
      <HomeNav />
      <NavBar />
    </StyledInnerWrapper>
  </StyledWrapper>
);

export default Menu;
