import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import AboutMe from 'pages/AboutMe';
import Archive from 'pages/Archive';
import BlockudokuClone from 'pages/BlockudokuClone';
import NotFound from 'pages/NotFound';
import RouteWithLayout from 'layouts/RouteWithLayout';
import CenterLayout from 'layouts/CenterLayout';

const App = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/aboutme"/>
    </Route>
    <RouteWithLayout exact path="/aboutme" page={AboutMe} />
    <RouteWithLayout exact path="/archive/blockudoku" page={BlockudokuClone} layout={CenterLayout} />
    <RouteWithLayout exact path="/archive" page={Archive} />
    <RouteWithLayout page={NotFound} />
  </Switch>
);

export default App;
