import { injectGlobal } from 'styled-components';
import 'normalize.css';
import 'antd/dist/antd.css';

import CerealLight from '../assets/fonts/AirbnbCereal-Light.ttf';
import CerealBook from '../assets/fonts/AirbnbCereal-Book.ttf';
import CerealMedium from '../assets/fonts/AirbnbCereal-Medium.ttf';
import CerealBold from '../assets/fonts/AirbnbCereal-Bold.ttf';
import CerealExtraBold from '../assets/fonts/AirbnbCereal-ExtraBold.ttf';
import CerealBlack from '../assets/fonts/AirbnbCereal-Black.ttf';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @font-face {
    font-family: Cereal;
    font-weight: 300;
    src: url(${CerealLight}) format('truetype');
  }
  @font-face {
    font-family: Cereal;
    font-weight: 400;
    src: url(${CerealBook}) format('truetype');
  }
  @font-face {
    font-family: Cereal;
    font-weight: 500;
    src: url(${CerealMedium}) format('truetype');
  }
  @font-face {
    font-family: Cereal;
    font-weight: 600;
    src: url(${CerealBold}) format('truetype');
  }
  @font-face {
    font-family: Cereal;
    font-weight: 700;
    src: url(${CerealExtraBold}) format('truetype');
  }
  @font-face {
    font-family: Cereal;
    font-weight: 800;
    src: url(${CerealBlack}) format('truetype');
  }

  html,
  p,
  a,
  span,
  button {
    font: 400 16px/1.7 Cereal,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: Cereal, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  }

  h1, h2, h3, p {
    margin: 0;
  }

  h1 { font-size: 2em; }
  h2 { font-size: 1.5em; }
  h3 { font-size: 1.3em; }
  h4 { font-size: 1em; }
  h5 { font-size: .8em; }
  h6 { font-size: .7em; }

  a {
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;
