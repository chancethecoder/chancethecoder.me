import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import {
  Grid,
  H1,
  Paragraph,
} from 'components';

const NotFound = () => (
  <Fragment>
    <Helmet>
      <title>Error</title>
      <meta name="description" content="chancethecoder's website" />
    </Helmet>
    <Grid padding="1.5rem 3rem">
      <H1 id="project">404 page not found</H1>
      <Paragraph>
        I&apos;m sorry but the page you are looking for does not exist.
      </Paragraph>
    </Grid>
  </Fragment>
);

export default NotFound;
