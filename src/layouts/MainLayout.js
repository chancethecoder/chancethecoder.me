import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Menu from 'layouts/components/Menu';
import MovingBallCursor from 'layouts/components/MovingBallCursor';

const Background = styled.div`
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

const MainLayout = props => (
  <main>
    <Menu />
    <Background>
      <MovingBallCursor />
    </Background>
    {props.children}
  </main>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
