import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Main from '@pages/Main';

import { store } from '@store/rootStore';
import '@theme/styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Provider store={store}>
      <HashRouter basename='/index.html'>
        <Main />
      </HashRouter>
    </Provider>
  </StrictMode>
);
