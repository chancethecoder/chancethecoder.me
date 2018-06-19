import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from 'components/Container';
import Menu from 'layouts/components/Menu';
import BaseWrapper from 'layouts/components/BaseWrapper';

const PlaygroundContainer = styled(Container)`
  height: 100vh;
  width: 80vw;
`;

const PlaygroundLayout = props => (
  <BaseWrapper>
    <Menu />
    <PlaygroundContainer>
      {props.children}
    </PlaygroundContainer>
  </BaseWrapper>
);

PlaygroundLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlaygroundLayout;
