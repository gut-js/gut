import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from './store/configureStore';

//React-Router stuff:
import { Router, browserHistory } from 'react-router';
import routes from './routes';

//Containers
import HomePage from './containers/HomePage'

const store = configureStore();

render(
  <Provider store={store}>
    <div>
      <Router history={browserHistory} routes={routes} />
    </div>
  </Provider>,
  document.getElementById('root')
);
