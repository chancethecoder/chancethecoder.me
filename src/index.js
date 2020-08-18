import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './shared/Root';
import configureStore, { history } from './store/configureStore';
import 'antd/dist/antd.css';
import './index.css';

const store = configureStore();

ReactDOM.render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept('./shared/Root', () => {
    /* eslint-disable global-require */
    const NewRoot = require('./shared/Root').default;
    ReactDOM.render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('root'),
    );
  });
}
