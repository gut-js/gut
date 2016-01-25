import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from './store/configureStore';

//Containers
import HomePage from './containers/HomePage'

const store = configureStore();

render(
  <Provider store={store}>
    <div>
      <HomePage />
    </div>
  </Provider>,
  document.getElementById('root')
);
