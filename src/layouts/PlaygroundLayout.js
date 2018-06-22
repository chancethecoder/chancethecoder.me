import React from 'react';
import PropTypes from 'prop-types';
import Menu from 'layouts/components/Menu';

const PlaygroundLayout = props => (
  <main>
    <Menu />
    {props.children}
  </main>
);

PlaygroundLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlaygroundLayout;
