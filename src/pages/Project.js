import React from 'react';
import styled from 'styled-components';
import { media } from 'utils/style-utils';

import {
  AnimatedGrid,
  Grid,
  GridItem,
  H1,
} from 'components';

const StyledParagraph = styled.p`
  margin-bottom: 1em;
  font-size: 1rem;
  line-height: 1.2;

  ${media.min.laptop`
    font-size: 1.25rem;
  `}
`;

const Project = () => (
  <Grid
    padding="0"
    margin="0"
  >
    <AnimatedGrid
      padding="1.5rem"
      margin="1.5rem"
    >
      <GridItem column="1/span 24" row="1">
        <GridItem column="1/span 16">
          <H1 id="project">
            project
          </H1>
        </GridItem>
        <GridItem>
          <StyledParagraph>
            my projects
          </StyledParagraph>
        </GridItem>
      </GridItem>
    </AnimatedGrid>
  </Grid>
);

export default Project;
