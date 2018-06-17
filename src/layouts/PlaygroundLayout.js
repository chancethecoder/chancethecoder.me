import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from 'components/Container';
import NavBar from 'components/NavBar';
import BaseLayout from 'layouts/BaseLayout';

const PlaygroundContainer = styled(Container)`
  width: 80vw;
`;

const PlaygroundLayout = props => (
  <BaseLayout>
    <PlaygroundContainer>
      {props.children}
      <NavBar />
    </PlaygroundContainer>
  </BaseLayout>
);

PlaygroundLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlaygroundLayout;
