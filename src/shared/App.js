import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainLayout from 'layouts';
import {
  AboutMe,
  NotFound,
} from 'pages';
import RouteWithLayout from 'components/RouteWithLayout';
import 'antd/dist/antd.css';
import './App.css';

const App = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/aboutme"/>
    </Route>
    <RouteWithLayout exact path="/aboutme" layout={MainLayout} component={AboutMe} />
    <RouteWithLayout layout={MainLayout} component={NotFound} />
  </Switch>
);

export default App;
