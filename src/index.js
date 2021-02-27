import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// import redux and logger
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// Reducer to store each feedback answer as it is given
const feedbackReducer = (state ={}, action) => {
  switch (action.type) {
    case 'SET_FEELING_FEEDBACK':
      return {
        ...state,
        Feeling: action.payload
      };
    case 'SET_UNDERSTANDING_FEEDBACK':
      return {
        ...state,
        Understanding: action.payload
      }
    default:
      return state;
  }
 
}

// Create store
const storeInstance = createStore(
  combineReducers({
    feedbackReducer,
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
