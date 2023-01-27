import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import reducer from './components/app/reducer';

import App from './components/app/App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const store = createStore(reducer);


root.render(
  <StrictMode >
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);

