import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';

// allows us to replace window.__Redux_devtools
import { composeWithDevTools } from 'redux-devtools-extension';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// allows us to make async actions in redux 
import thunk from 'redux-thunk'

import { rootReducer } from './reducers/rootReducer';
import { BrowserRouter as Router} from 'react-router-dom'

// store accepts 1. reducer 2. dev tools/middleware
const store= createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(thunk)) 
  )

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
    </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
