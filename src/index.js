import React from 'react';
import ReactDOM from 'react-dom';

// allows for use of  basic bootstrap stylesheet
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import sourceReducer from './reducers/sourceReducer';


let store = createStore(
  sourceReducer, 
  composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root'));
