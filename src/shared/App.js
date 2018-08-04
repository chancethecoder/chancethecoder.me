import React from 'react';
import { Switch } from 'react-router-dom';
import { injectGlobal } from 'styled-components';
import MainLayout from 'layouts';
import {
  Welcome,
  About,
  Skill,
  Project,
  NotFound,
} from 'pages';
import RouteWithLayout from 'components/RouteWithLayout';
import 'normalize.css';
import 'antd/dist/antd.css';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @font-face {
    font-family: Cereal;
    font-weight: 300;
    src: url('./assets/fonts/AirbnbCereal-Light.ttf') format('truetype');
  }
  @font-face {
    font-family: Cereal;
    font-weight: 400;
    src: url('./assets/fonts/AirbnbCereal-Book.ttf') format('truetype');
  }
  @font-face {
    font-family: Cereal;
    font-weight: 500;
    src: url('./assets/fonts/AirbnbCereal-Medium.ttf') format('truetype');
  }
  @font-face {
    font-family: Cereal;
    font-weight: 600;
    src: url('./assets/fonts/AirbnbCereal-Bold.ttf') format('truetype');
  }
  @font-face {
    font-family: Cereal;
    font-weight: 700;
    src: url('./assets/fonts/AirbnbCereal-ExtraBold.ttf') format('truetype');
  }
  @font-face {
    font-family: Cereal;
    font-weight: 800;
    src: url('./assets/fonts/AirbnbCereal-Black.ttf') format('truetype');
  }

  html,
  p,
  a,
  span,
  button {
    font: 400 16px/1.7 Cereal,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, p {
    margin: 0;
  }

  a {
    text-decoration: none;
  }
`;

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
