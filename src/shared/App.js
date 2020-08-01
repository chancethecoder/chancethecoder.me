import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import AboutMe from 'pages/AboutMe';
import NotFound from 'pages/NotFound';
import RouteWithLayout from 'layouts/RouteWithLayout';

const App = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/aboutme"/>
    </Route>
    <RouteWithLayout exact path="/aboutme" page={AboutMe} />
    <RouteWithLayout page={NotFound} />
  </Switch>
);

export default App;
