import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

const NotFound = () => (
  <Fragment>
    <Helmet>
      <title>404 page not found</title>
    </Helmet>
    <div padding="1.5rem 3rem">
      <h1 id="project">404 page not found</h1>
      <p>
        I&apos;m sorry but the page you are looking for does not exist.
      </p>
    </div>
  </Fragment>
);

export default NotFound;
