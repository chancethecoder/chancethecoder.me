import React from 'react';
import { Switch } from 'react-router-dom';
import { MainLayout, PlaygroundLayout } from 'layouts';
import { Welcome, Profile, Playground, NotFound } from 'pages';
import RouteWithLayout from 'layouts/components/RouteWithLayout';

const App = () => (
  <Switch>
    <RouteWithLayout exact path="/" layout={MainLayout} component={Welcome} />
    <RouteWithLayout exact path="/profile" layout={MainLayout} component={Profile} />
    <RouteWithLayout path="/playground" layout={PlaygroundLayout} component={Playground} />
    <RouteWithLayout layout={MainLayout} component={NotFound} />
  </Switch>
);

export default App;
