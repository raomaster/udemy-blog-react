import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import promise from 'redux-promise';
import store, { history } from './store';
import App from './containers/app';

import 'sanitize.css/sanitize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);
