import React from 'react';
import { render } from 'react-dom'
import rootReducer from "./Data/DataSources/slices"
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';

import App from './App';

const store = configureStore({ reducer: rootReducer });

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
