import React from 'react';
import PropTypes from 'prop-types';
import Menu from 'layouts/components/Menu';

const MainLayout = props => (
  <main>
    <Menu />
    {props.children}
  </main>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
