import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import reducer from './components/app/reducer';

import App from './components/app/App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


const loggerMiddleware = store => next => action => {
  const result = next(action);
  console.log('Middleware', store.getState());
  return result;
}

const store = createStore(reducer, applyMiddleware(loggerMiddleware));

root.render(
  <StrictMode >
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);

