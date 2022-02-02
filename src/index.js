import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'

import { Provider } from 'react-redux'
import {createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
/* 
A Reducer takes the current state value and an action object
and returns a new state value.

Reducer fx signature is (state, action) => newState

State should only contain POJO, arrays, & primitives
 */
import catsReducer from './reducers/catsReducer'


/* 
Create a Redux store holding the state of the app
It's API is subscribe, dispatch, and getState
*/
const store = createStore(catsReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
