import React from 'react';
import { Switch } from 'react-router-dom';
import MainLayout from 'layouts';
import {
  Welcome,
  About,
  Skill,
  Project,
  NotFound,
} from 'pages';
import RouteWithLayout from 'components/RouteWithLayout';
import './global-style';

const App = () => (
  <Switch>
    <RouteWithLayout exact path="/" layout={MainLayout} component={Welcome} />
    <RouteWithLayout exact path="/about" layout={MainLayout} component={About} />
    <RouteWithLayout exact path="/skill" layout={MainLayout} component={Skill} />
    <RouteWithLayout exact path="/project" layout={MainLayout} component={Project} />
    <RouteWithLayout layout={MainLayout} component={NotFound} />
  </Switch>
);

export default App;
