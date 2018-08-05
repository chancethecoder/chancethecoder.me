import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import {
  AnimatedGrid,
  Grid,
  GridItem,
  H1,
  Paragraph,
} from 'components';

const NotFound = () => (
  <Fragment>
    <Helmet>
      <title>Error</title>
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
          <H1 id="project">404 page not found</H1>
          <Paragraph>
            I&apos;m sorry but the page you are looking for does not exist.
          </Paragraph>
        </GridItem>
      </AnimatedGrid>
    </Grid>
  </Fragment>
);

export default NotFound;
