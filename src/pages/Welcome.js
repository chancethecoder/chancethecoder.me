import React from 'react';
import styled from 'styled-components';
import Flex from 'components/Flex';

const StyledHeader = styled.h4`
  font-size: 2.5rem;
  font-weight: 600;
`;

const StyledParagraph = styled.section`
  font-size: 1rem;
`;

const Welcome = () => (
  <Flex valign="center" direction="column">
    <StyledHeader>Welcome!</StyledHeader>
    <StyledParagraph>
      I am a programmer who can proudly call myself an enthusiast.<br />
      I like climbing, traveling and most of all I want to do my job well.<br />
      If you want to work together, please contact me.
    </StyledParagraph>
  </Flex>
);

export default Welcome;
