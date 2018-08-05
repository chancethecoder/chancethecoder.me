import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
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

const Welcome = () => (
  <Fragment>
    <Helmet>
      <title>Welcome</title>
      <meta name="description" content="chancethecoder's website" />
    </Helmet>
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
            <H1 id="welcome">
              Welcome!
            </H1>
          </GridItem>
          <GridItem>
            <StyledParagraph>
              Hi. My name is Youngkyun Kim, a developer based in South Korea.
            </StyledParagraph>
            <StyledParagraph>
              I am a programmer who can proudly call myself an enthusiast.
            </StyledParagraph>
            <StyledParagraph>
              Let&apos;s go to the next step.
            </StyledParagraph>
          </GridItem>
        </GridItem>
      </AnimatedGrid>
    </Grid>
  </Fragment>
);

export default Welcome;
