import React from 'react';
import { Switch } from 'react-router-dom';
import MainLayout from 'layouts';
import {
  Resume,
  Welcome,
  NotFound,
} from 'pages';
import RouteWithLayout from 'components/RouteWithLayout';
import 'normalize.css';
import 'antd/dist/antd.css';
import './App.css';

const App = () => (
  <Switch>
    <RouteWithLayout exact path="/" layout={MainLayout} component={Resume} />
    <RouteWithLayout exact path="/about" layout={MainLayout} component={Welcome} />
    <RouteWithLayout layout={MainLayout} component={NotFound} />
  </Switch>
);

export default App;
