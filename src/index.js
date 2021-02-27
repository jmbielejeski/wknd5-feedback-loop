import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// import redux and logger
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';


// Create store
const storeInstance = createStore(
  combineReducers({

  }),
  // Redux logger!
  applyMiddleware(logger)
); // end store


ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
