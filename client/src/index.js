import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import theme from './utils/theme';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} resetCSS={true} theme={theme}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
