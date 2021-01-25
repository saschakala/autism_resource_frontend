import React from 'react';
import ReactDOM from 'react-dom';

// allows for use of  basic bootstrap stylesheet
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './containers/App';
import { createStore, applyMiddleware } from 'redux';

// allows us to replace window.__Redux_devtools
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
// import { rootReducer } from './reducers/rootReducer';
import {BrowserRouter as Router} from "react-router-dom";


import sourceReducer from './reducers/sourceReducer';


let store = createStore(
  sourceReducer, 
  composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
