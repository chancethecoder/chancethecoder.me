import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  MainLayout,
} from '.';

const RouteWithLayout = ({ layout=MainLayout, page, ...rest } = {}) => (
  <Route
    {...rest}
    render={
        props => React.createElement(layout, props, React.createElement(page, props))
      }
  />
);

RouteWithLayout.propTypes = {
  layout: PropTypes.func.isRequired,
  page: PropTypes.func.isRequired,
};

export default RouteWithLayout;
