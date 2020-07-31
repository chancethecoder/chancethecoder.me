import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import MainLayout from './MainLayout';

const RouteWithLayout = ({ layout=MainLayout, page, ...rest } = {}) => (
  <Route
    {...rest}
    render={
        props => React.createElement(layout, props, React.createElement(page, props))
      }
  />
);

RouteWithLayout.propTypes = {
  page: PropTypes.func.isRequired,
};

export default RouteWithLayout;
