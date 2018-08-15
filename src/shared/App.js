import React from 'react';
import { Switch } from 'react-router-dom';
import MainLayout from 'layouts';
import {
  Welcome,
  Portfolio,
  NotFound,
} from 'pages';
import RouteWithLayout from 'components/RouteWithLayout';
import 'normalize.css';
import 'antd/dist/antd.css';
import './App.css';

const App = () => (
  <Switch>
    <RouteWithLayout exact path="/" layout={MainLayout} component={Welcome} />
    <RouteWithLayout exact path="/portfolio" layout={MainLayout} component={Portfolio} />
    <RouteWithLayout layout={MainLayout} component={NotFound} />
  </Switch>
);

export default App;
