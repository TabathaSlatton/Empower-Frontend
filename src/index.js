import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';

// allows us to replace window.__Redux_devtools
import { composeWithDevTools } from 'redux-devtools-extension';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// allows us to make async actions in redux (allows us to use them outside of that class)
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
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
); 
