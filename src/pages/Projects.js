import React from 'react';
import styled from 'styled-components';
import Flex from 'components/Flex';

const StyledHeader = styled.h4`
  font-size: 2.5rem;
  font-weight: 600;
`;

const Projects = () => (
  <Flex valign="center" direction="column">
    <StyledHeader>Projects</StyledHeader>
  </Flex>
);

export default Projects;
