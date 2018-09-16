import React from 'react';
import { Switch } from 'react-router-dom';
import MainLayout from 'layouts';
import {
  About,
  NotFound,
  Playground,
  Resume,
} from 'pages';
import RouteWithLayout from 'components/RouteWithLayout';
import 'normalize.css';
import 'antd/dist/antd.css';
import './App.css';

const App = () => (
  <Switch>
    <RouteWithLayout exact path="/" layout={MainLayout} component={Resume} />
    <RouteWithLayout exact path="/about" layout={MainLayout} component={About} />
    <RouteWithLayout exact path="/playground" layout={MainLayout} component={Playground} />
    <RouteWithLayout layout={MainLayout} component={NotFound} />
  </Switch>
);

export default App;
