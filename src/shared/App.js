import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';

import {
  AboutMe,
  NotFound,
} from 'pages';

import RouteWithLayout from 'layouts';

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
