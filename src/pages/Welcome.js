import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import {
  AnimatedGrid,
  Grid,
  GridItem,
  H1,
  Paragraph,
} from 'components';

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
          <H1 id="welcome">Welcome!</H1>
          <Paragraph>
              Hi. My name is Youngkyun Kim, a developer based in South Korea.
          </Paragraph>
          <Paragraph>
              I am a programmer who can proudly call myself an enthusiast.
          </Paragraph>
          <Paragraph>
              Let&apos;s go to the next step.
          </Paragraph>
        </GridItem>
      </AnimatedGrid>
    </Grid>
  </Fragment>
);

export default Welcome;
