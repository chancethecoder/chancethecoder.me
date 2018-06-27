import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import 'normalize.css';

import Root from './client/Root';
import registerServiceWorker from './registerServiceWorker';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @font-face {
    font-family: Cereal;
    font-weight: 300;
    src: url('./fonts/AirbnbCereal-Light.ttf') format('truetype');
  }
  @font-face {
    font-family: Cereal;
    font-weight: 400;
    src: url('./fonts/AirbnbCereal-Book.ttf') format('truetype');
  }
  @font-face {
    font-family: Cereal;
    font-weight: 500;
    src: url('./fonts/AirbnbCereal-Medium.ttf') format('truetype');
  }
  @font-face {
    font-family: Cereal;
    font-weight: 600;
    src: url('./fonts/AirbnbCereal-Bold.ttf') format('truetype');
  }
  @font-face {
    font-family: Cereal;
    font-weight: 700;
    src: url('./fonts/AirbnbCereal-ExtraBold.ttf') format('truetype');
  }
  @font-face {
    font-family: Cereal;
    font-weight: 800;
    src: url('./fonts/AirbnbCereal-Black.ttf') format('truetype');
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

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
