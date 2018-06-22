import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MainLayout, PlaygroundLayout } from 'layouts';
import { Welcome, Profile, Playground, NotFound } from 'pages';

function RouteWithLayout({ layout, component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        React.createElement(layout, props, React.createElement(component, props))
      }
    />
  );
}

RouteWithLayout.propTypes = {
  layout: PropTypes.func.isRequired,
  component: PropTypes.func.isRequired,
};

const App = () => (
  <Switch>
    <RouteWithLayout exact path="/" layout={MainLayout} component={Welcome} />
    <RouteWithLayout exact path="/profile" layout={MainLayout} component={Profile} />
    <RouteWithLayout path="/playground" layout={PlaygroundLayout} component={Playground} />
    <RouteWithLayout layout={MainLayout} component={NotFound} />
  </Switch>
);

export default App;
