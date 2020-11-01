// from packages
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

// from files 
import App from './App';
import "./styles/App.css"

import { reducer } from './state/reducers'

const store = createStore(reducer, applyMiddleware(
  thunk,
  logger
))


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="root">

      <App />
      </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
