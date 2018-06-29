import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Menu from 'layouts/components/Menu';

const PlaygroundLayout = props => (
  <main>
    <Helmet>
      <title>Playground | Chancethecoder</title>
      <meta name="description" content="chancethecoder's website" />
    </Helmet>
    <Menu />
    {props.children}
  </main>
);

PlaygroundLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlaygroundLayout;
