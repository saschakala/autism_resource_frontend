import React from 'react';
import ReactDOM from 'react-dom';
// import './App.scss';

// allows for use of  basic bootstrap stylesheet
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './containers/App';
import { createStore, applyMiddleware } from 'redux';

// allows us to replace window.__Redux_devtools
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import bookReducer from './reducers/bookReducer';


let store = createStore(
  bookReducer, 
  composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
