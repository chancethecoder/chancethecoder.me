import React from 'react';
import { Helmet } from 'react-helmet';
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

const PlaygroundLayout = props => (
  <main>
    <Helmet>
      <title>Playground | Chancethecoder</title>
      <meta name="description" content="chancethecoder's website" />
    </Helmet>
    <Menu />
    <Background>
      <MovingBallCursor />
    </Background>
    {props.children}
  </main>
);

PlaygroundLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlaygroundLayout;
