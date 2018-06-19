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

const NotFound = () => (
  <Flex valign="center" direction="column">
    <StyledHeader>404 page not found</StyledHeader>
    <StyledParagraph>
      We are sorry but the page you are looking for does not exist.
    </StyledParagraph>
  </Flex>
);

export default NotFound;
