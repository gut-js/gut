import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import sayHello from './reducers/reducers';
import App from './containers/App';

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore)

const store = createStoreWithMiddleware(sayHello)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
