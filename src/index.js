import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.min.css';
import 'isomorphic-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
