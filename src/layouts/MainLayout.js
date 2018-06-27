import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Menu from 'layouts/components/Menu';

const MainLayout = props => (
  <main>
    <Helmet>
      <title>Main | Chancethecoder</title>
      <meta name="description" content="chancethecoder's website" />
    </Helmet>
    <Menu />
    {props.children}
  </main>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
