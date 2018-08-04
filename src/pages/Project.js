import React from 'react';
import styled from 'styled-components';
import { media, appearsOut } from 'utils/style-utils';

import {
  Grid,
  GridItem,
} from 'components';

const AnimatedGrid = styled(Grid)`
  opacity: 0;
  animation: ${appearsOut} .55s forwards .15s;
  min-height: 60vh;
`;

const ParagraphWrapper = styled(GridItem)`
  ${media.min.desktop`
    grid-column: 1 / span 14;
  `}

  ${media.min.laptop`
    grid-column: 1 / span 18;
  `}
`;

const StyledHeader = styled.h1`
  font-weight: 700;
  font-size: 13vw;
  letter-spacing: -1.4px;
  line-height: 1.1;
  display: block;
  margin-bottom: 0.75em;

  ${media.min.tablet`
    font-size: 5.5vw;
    letter-spacing: -0.02em;
  `}
`;

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
    width="100vw"
    padding="0"
    margin="0"
  >
    <AnimatedGrid>
      <GridItem column="1/span 24" row="1">
        <GridItem column="1/span 16">
          <StyledHeader id="project">
            project
          </StyledHeader>
        </GridItem>
        <ParagraphWrapper>
          <StyledParagraph>
            my projects
          </StyledParagraph>
        </ParagraphWrapper>
      </GridItem>
    </AnimatedGrid>
  </Grid>
);

export default Project;
