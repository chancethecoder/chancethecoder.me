import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import {
  AnimatedGrid,
  Grid,
  GridItem,
  H1,
  Paragraph,
} from 'components';

const Project = () => (
  <Fragment>
    <Helmet>
      <title>Project</title>
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
            <H1 id="project">
            project
            </H1>
          </GridItem>
          <GridItem>
            <Paragraph>
              my projects
            </Paragraph>
          </GridItem>
        </GridItem>
      </AnimatedGrid>
    </Grid>
  </Fragment>
);

export default Project;
