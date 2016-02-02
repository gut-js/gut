import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { syncHistory, routeReducer } from 'react-router-redux';
import createHistory from 'history/lib/createHashHistory';
import thunk from 'redux-thunk';

import authReducer from './reducers/authReducer';
import searchReducer from './reducers/searchReducer';
import pollReducer from './reducers/pollReducer';
import dinerReducer from './reducers/dinerReducer';
import viewReducer from './reducers/viewReducer';
import friendReducer from './reducers/friendReducer';

//Router stuff:
import routes from './routes';

//Containers
import HomePage from './containers/HomePage';

//Styling
import './static/styles/styles.scss';

const history = createHistory();
const thunkMid = applyMiddleware(thunk)
const histMid = applyMiddleware(syncHistory(history));
const reducer = combineReducers({
  authReducer,
  searchReducer,
  pollReducer,
  dinerReducer,
  viewReducer,
  friendReducer,
  routing: routeReducer
})

const finalCreateStore = compose(
  thunkMid,
  histMid,
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);


const store = finalCreateStore(reducer);

render(
  <Provider store={store}>
    <div>
      {routes}
    </div>
  </Provider>,
  document.getElementById('root')
);
