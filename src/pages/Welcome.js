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
            My name is Youngkyun Kim, a software engineer based in South Korea.
          </Paragraph>
          <Paragraph>
            I am a person who is interested in cool things
            and is currently developing data-driven services.
          </Paragraph>
          <Paragraph>
            I hope my software can make a better world.
          </Paragraph>
        </GridItem>
      </AnimatedGrid>
    </Grid>
  </Fragment>
);

export default Welcome;
